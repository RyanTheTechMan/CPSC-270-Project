import {Pressable, StyleSheet, Text, View} from "react-native";
import MapView, {MapMarker} from "react-native-maps";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import sharedStyles, {header_color} from "../Shared/styles";
import {useEffect, useState} from "react";
import {DOMParser} from "@xmldom/xmldom";
import RenderHTML from 'react-native-render-html';

import Animated, {
  SlideInLeft, SlideOutLeft,
  ZoomInUp, ZoomOutDown, ZoomOutUp
} from "react-native-reanimated";

const MAP_KML_URL = "https://www.google.com/maps/d/kml?mid=1lA47_0BtU22mSzSdaSGpmo0w5Ew&forcekml=1"; // Roanoke College Google Map

function MarkerContent({name, type}) {
  if (markerTypes[type] === undefined) {
    console.log("No type provided for marker!");
    return null;
  }
  return (
    <View style={styles.markerContainer}>
      <View style={{...styles.markerIconContainer, backgroundColor: markerTypes[type].backgroundColor}}>
        <MaterialCommunityIcons name={markerTypes[type].icon} size={25} color="#fff" style={{alignSelf: 'center', top: 2}}/>
      </View>
      <View style={styles.markerTextContainer}>
        <Text style={{...styles.markerText, color: markerTypes[type].backgroundColor}}>{name}</Text>
      </View>
    </View>
  );
}

function LoadMapData(onMarkersLoaded) {
  // console.log("Loading map data...");
  let markers = [];

  const fetchKml = async () => {
    const response = await fetch(MAP_KML_URL);
    const kmlData = await response.text();

    const parser = new DOMParser();
    const kmlXML = parser.parseFromString(kmlData, "text/xml");

    const folders = Array.from(kmlXML.getElementsByTagName("Folder"));
    if (folders.length === 0) return null;

    Array.from(folders).forEach((folder) => {
      const folderName = folder.getElementsByTagName("name")[0].textContent;
      Array.from(folder.getElementsByTagName("Placemark")).forEach((placemark) => {
        const nameElement = placemark.getElementsByTagName("name")[0];
        const coordinatesElement = placemark.getElementsByTagName("coordinates")[0];
        const infoElement = placemark.getElementsByTagName("description")[0];

        if (!nameElement || !coordinatesElement) {
          console.log("Invalid marker!!");
        }
        else {
          const name = nameElement.textContent;
          const coordinates = coordinatesElement.textContent.split(",");

          let description = undefined;
          let imgSrc = undefined;

          if (infoElement) {
            const info = infoElement.textContent;

            // Extract the image source
            const imgMatch = info.match(/<img[^>]*src="([^"]*)"/);
            imgSrc = imgMatch && imgMatch[1] || null;

            // Remove the <img> element from the info string
            const cleanedInfo = info.replace(/<img[^>]*>/, '');

            // Use the RenderHTML component to render the cleaned HTML string
            const renderedHTML = <RenderHTML contentWidth={1} source={{ html: cleanedInfo }} />;

            // Extract the text content from the rendered HTML
            description = renderedHTML.props.source.html.replace(/<[^>]+>/g, '').trim();
          }

          const markerType = getMarkerType(folderName, name);
          if (markerType !== undefined) {
            markers = [...markers, {
              id: markers.length,
              displayName: name,
              description: description,
              coordinate: {
                latitude: parseFloat(coordinates[1]),
                longitude: parseFloat(coordinates[0]),
              },
              type: markerType,
              image: imgSrc,
            }];
          }
        }
      })
    });
    // console.log("Running callback")
    onMarkersLoaded(markers);
    // console.log("Callback finished")
  }
  fetchKml();
}
function FilterButton({setFilter}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleFilter = () => setIsOpen(!isOpen);

  let filterIndex = 1;

  const CreateFilterType = ({ type, index }) => {
    let backgroundColor;
    switch (type) {
      case "all":
        backgroundColor = "white";
        break;
      case "parking":
        backgroundColor = "#771414";
        break;
      default:
        backgroundColor = markerTypes[type].backgroundColor;
        break;
    }

    let iconName;
    switch (type) {
      case "all":
        iconName = "all-inclusive";
        break;
      case "parking":
        iconName = "parking";
        break;
      default:
        iconName = markerTypes[type].icon;
    }

    let displayText;
    switch (type) {
      case "all":
        displayText = "All";
        break;
      case "parking":
        displayText = "Parking";
        break;
      default:
        displayText = markerTypes[type].displayName;
        break;
    }

    let textColor;
    switch (type) {
      case "all":
        textColor = "black";
        break;
      default:
        textColor = "white";
        break;
    }

    let filterType;
    switch (type) {
      case "all":
        filterType = [];
      break;
      case "parking":
        filterType = Object.keys(markerTypes).filter((key) => key.startsWith("parking"));
      break;
    default:
      filterType = [type];
      break;
    }

    return (
      <Pressable
        key={type}
        style={[
          styles.filterOption,
          {
            backgroundColor: backgroundColor,
            top: (index) * 60,
          },
        ]}
        onPress={() => {
          setFilter(filterType);
          toggleFilter();
        }}
      >
        <View style={{left: 10, flexDirection: 'row', alignItems: 'center'}}>
          <MaterialCommunityIcons name={iconName} size={24} color={textColor} />
          <Text style={{
            color: textColor,
            fontSize: 16,
            marginLeft: 8,
          }}>{displayText}</Text>
        </View>
      </Pressable>
    )
  }

  const AnimatedComponent = Animated.createAnimatedComponent(View);
  const FilterOption = ({ type, index }) => {

    return (
      <AnimatedComponent entering={SlideInLeft.duration(100 * index)} exiting={SlideOutLeft.duration(150 * index)}>
        <CreateFilterType type={type} index={index} />
      </AnimatedComponent>
    );
  };

  const getFilterItems = () => {
    const allButton = <FilterOption type={"all"} index={filterIndex} key={"all"} />;

    const filterButtons = Object.keys(markerTypes)
      .map((type, index) => {
        if (type.startsWith("parking")) return null;
        filterIndex++;
        return <FilterOption type={type} index={filterIndex} key={type} />;
      })
      .filter((item) => item !== null); // Filter out any null elements from the list

    filterIndex++;

    const parkingButton = <FilterOption type={"parking"} index={filterIndex} key={"parking"} />

    return (
      <>
        {allButton}
        {filterButtons}
        {parkingButton}
      </>
    );
  };

  return (
    <View style={styles.filterContainer}>
      {isOpen && getFilterItems()}
      <Pressable style={styles.filterButton} onPress={toggleFilter}>
        <MaterialCommunityIcons name="filter-variant" size={24} color="black" />
      </Pressable>
    </View>
  );
}

function RenderMap({navigation, markers, filter, setFilter}) {
  const renderMarkers = (markers) => {
    const markerList = markers.map((marker) => {
      // If this marker is not contained in the filter, don't render it
      if (filter.length !== 0 && !filter.includes(marker.type)) {
        // console.log("Filtering out " + marker.displayName + " (" + marker.type + ")");
        return null;
      }

      return (
        <MapMarker
          coordinate={marker.coordinate}
          title={marker.displayName}
          description={"Click to learn more..."}
          onCalloutPress={() => {
            navigation.navigate('MapMarker', {marker: marker});
          }}
          key={marker.id}
        >
          <MarkerContent name={marker.displayName} type={marker.type}/>
        </MapMarker>
      )
    }).filter((item) => item !== null); // Filter out any null elements from the list

    // console.log("Rendering " + markerList.length + " markers...");

    return markerList;
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.297,
          longitude: -80.056,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        initialCamera={{
          center: {
            latitude: 37.297,
            longitude: -80.056,
          },
          pitch: 10,
          heading: 0,
          altitude: 0,
          zoom: 12,
        }}
        showsPointsOfInterest={false} // possibly make this toggleable
        mapType={"standard"}
        showsCompass={true}
        showsUserLocation={true}
        // userInterfaceStyle={"dark"}
        maxZoomLevel={18}
        // minZoomLevel={14} // For some reason breaks zoom
        // onPress={(e) => {
        //   console.log(e.nativeEvent.coordinate);
        // }}
        // onMarkerPress={(e) => {
        //   console.log(e.nativeEvent);
        // }}
        // onMarkerSelect={(e) => {
        //   console.log(e.nativeEvent);
        // }}
        loadingEnabled={true}
        loadingBackgroundColor={'rgba(0,0,0,0.5)'}
        loadingIndicatorColor={header_color}
      >
        {markers && renderMarkers(markers)}
      </MapView>
      <FilterButton setFilter={setFilter}/>
    </View>
  );
}

function Map({navigation}) {
  const [markers, setMarkers] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    LoadMapData(setMarkers);
  }, []);

  return <RenderMap navigation={navigation} markers={markers} filter={filter} setFilter={setFilter} />;
}

export default Map;

const markerTypes = {
  'academic': {displayName: "Academics", icon: 'school', backgroundColor: '#005eaf'},
  'recreational': {displayName: "Recreational", icon: 'basketball', backgroundColor: '#00a651'},
  'administrative': {displayName: "Administrative", icon: 'office-building', backgroundColor: '#6d0093'},
  'food': {displayName: "Food", icon: 'food', backgroundColor: '#d26000'},
  'dormitory': {displayName: "Dormitories", icon: 'home', backgroundColor: '#864600'},
  'parking-fac-staff': {icon: 'parking', backgroundColor: '#7e0000'},
  'parking-commuter': {icon: 'parking', backgroundColor: '#005eaf'},
  'parking-resident': {icon: 'parking', backgroundColor: '#b69400'},
  'parking-visitor': {icon: 'parking', backgroundColor: '#00a651'},
  'parking-restricted': {icon: 'parking', backgroundColor: '#600000'},
};

function getMarkerType(folderName, name) {
  folderName = folderName.toLowerCase();
  if (folderName.includes("athletics"))
      return "recreational"
  if (folderName.includes("food"))
      return "food"
  if (folderName.includes("academic buildings"))
      return "academic"
  if (folderName.includes("administrative"))
      return "administrative"
  if (folderName.includes("residence halls") || folderName.includes("elizabeth"))
      return "dormitory"
  if (folderName.includes("parking")) {// TODO: parking may include more than one type. Staff, commuter, resident, visitor
    name = name.toLowerCase();
    if (name.includes("staff"))
      return "parking-fac-staff"
    else if (name.includes("commuter"))
      return "parking-commuter"
    else if (name.includes("resident"))
      return "parking-resident"
    else if (name.includes("visitor") || name.includes("guest"))
      return "parking-visitor"
    else if (name.includes("restricted"))
      return "parking-restricted"
    else {
      console.log("Unknown parking type: " + name);
      return undefined
    }
  }
  else
  {
    // console.log("Unknown folder name: " + folderName);
    return undefined
  }
}



const styles = StyleSheet.create({
  text: {
    ...sharedStyles.text,
    color: 'black',
    fontSize: 30,
  },
  container: {
    ...sharedStyles.container,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  markerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  markerTextContainer: {
    marginLeft: 35,
    width: '300%',
    position: 'absolute',
    zIndex: 1
  },
  markerText: {
    flexWrap: 'wrap',
  },
  markerIconContainer: {
    width: 30,
    height: 30,
    borderRadius: 50,
    zIndex: -1
  },
  filterContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  filterButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  filterOption: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: 12,
    height: 50,
    borderRadius: 25,
    left: 0,
    zIndex: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '315%',
  }
});