import {StyleSheet, Text, View} from "react-native";
import MapView, {MapMarker} from "react-native-maps";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import sharedStyles, {header_color} from "../Shared/styles";
import {useState} from "react";

function MarkerContent({name, type}) {
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

function Map({navigation}) {
  const [filter, setFilter] = useState([]);

  const renderMarkers = () => {
    return markers.map((marker) => {
      // If this marker is not contained in the filter, don't render it
      if (filter.length !== 0 && !filter.includes(marker.type)) {
        console.log("Filtering out " + marker.displayName + " (" + marker.type + ")");
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
    })
  }

  return (
    <View style={styles.container} >
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
        onPress={(e) => {
          console.log(e.nativeEvent.coordinate);
        }}
        onMarkerPress={(e) => {
          console.log(e.nativeEvent);
        }}
        onMarkerSelect={(e) => {
          console.log(e.nativeEvent);
        }}
        loadingEnabled={true}
        loadingBackgroundColor={'rgba(0,0,0,0.5)'}
        loadingIndicatorColor={header_color}
      >
        {renderMarkers()}
      </MapView>
    </View>
  );
}

export default Map;


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
  }
});

const dormTags = ['dorm', 'dorms', 'dormitory', 'residence hall', 'residence halls', 'residence', 'residential']

const markers = [
  {
    displayName: "Trexler",
    overview: 'Home to the Math and Computer Science departments',
    description: 'Trexler houses the chemistry, and mathematics, computer science and physics departments, as well as the office of Information Technology. Built in 1970 as part of a three-building complex, Trexler Hall was named after Duke C. Trexler, LL.D. (1970 honorary degree) for his distinguished service and contributions to the College. He is also a graduate of the Roanoke class of 1913.',
    tags: ['cs', 'computer science', 'math', 'mathematics', 'chemistry', 'engineering'],
    id: 'trexler',
    type: 'academic',
    coordinate: {
      latitude: 37.296121369574145,
      longitude: -80.05661168111257
    },
  },
  {
    displayName: "Colket Center",
    overview: 'Find food and fun here.',
    description: '',
    tags: ['food', 'dining', 'pizza', 'salad', 'commons', 'mons', 'pickle', 'game room', 'pool', 'ping pong', 'table tennis'],
    id: 'colket',
    type: 'food',
    coordinate: {
      latitude: 37.296932796576336,
      longitude: -80.05561340068296
    },
  },
  {
    displayName: "Roony's Brews",
    overview: 'A great place to grab a coffee and a quick bite to eat.',
    description: "",
    tags: ['food', 'dining', 'coffee', 'tea', 'sandwiches', 'salads', 'snacks'],
    id: 'roonys',
    type: 'food',
    coordinate: {
      latitude: 37.29559536940759,
      longitude: -80.05365855148594
    }
  },
  {
    displayName: "Alumni Gym",
    overview: 'Practice your basketball skills here',
    description: '',
    tags: ['gym', 'workout', 'fitness', 'exercise', 'court', 'basketball'],
    id: 'alumni-gym',
    type: 'recreational',
    coordinate: {
      latitude: 37.29637435947571,
      longitude: -80.05609524513685
    }
  },
  {
    displayName: "Bast Center",
    overview: 'Houses a basketball court, pool, and more',
    description: '',
    tags: ['gym', 'workout', 'fitness', 'exercise', 'court', 'pool', 'swim', 'swimming'],
    id: 'bast-center',
    type: 'recreational',
    coordinate: {
      latitude: 37.296895211364586,
      longitude: -80.05650647935589
    }
  },
  {
    displayName: "Cregger Center",
    overview: 'Home to Maroons Athletics. Find the gym and all athletic facilities here.',
    description: '',
    tags: ['gym', 'workout', 'fitness', 'exercise', 'court', 'fitness center', 'athletics', 'athletic center'],
    id: 'cregger-center',
    type: 'recreational',
    coordinate: {
      latitude: 37.29783291545162,
      longitude: -80.05475956768488
    }
  },
  {
    displayName: "Maxey Hall",
    overview: '',
    description: 'Maxey Hall has a total of 64,818 square feet and houses up to 243 students. Maxey Hall has a variety of additional features, including  1 standard classroom, 1 large seminar room, 1 small conference room, 1 office, and large common area kitchens. Each floor has study areas and each room has individual heating/air controls. It is also home to the  Honors Living Learning Community.',
    tags: [...dormTags, 'honors', 'honors program'],
    id: 'maxey-hall',
    type: 'dormitory',
    coordinate: {
      latitude: 37.2979212254888,
      longitude: -80.05721709468209
    }
  },
  {
    displayName: "Beamer Hall",
    overview: '',
    description: 'Completed in August 2005, Beamer Hall forms a new residence complex known as CBR along with Caldwell and Ritter Halls. Beamer houses upperclass men and women. It is also home to the Scholars Living Learning Community, composed of students looking for a more studious living environment.',
    tags: [...dormTags, 'cbr'],
    id: 'beamer-hall',
    type: 'dormitory',
    address: '350 North Market Street, Salem, VA 24153',
    coordinate: {
      latitude: 37.298509625883064,
      longitude: -80.05692321019541
    },
  },
  {
    displayName: "Caldwell Hall",
    overview: '',
    description: 'Completed in August 2005, Caldwell Hall forms the CBR complex along with Beamer and Ritter Halls. Caldwell houses upperclass men and women. The building is named for Clarence Caldwell, a former vice president of finance, at the request of Roanoke College Board of Trustee member Nancy Baird Mulheren \'72. Ms. Mulheren pledged $2.5 million for the new residence hall in tribute to her late husband, John Mulheren \'71, who died in 2004. "Clarence Caldwell is the man who always kept his eye on meeting the tuition needs of students," Nancy Mulheren said. "Without him, John could not have stayed in school."',
    tags: [...dormTags, 'cbr'],
    id: 'caldwell-hall',
    type: 'dormitory',
    coordinate: {
      latitude: 37.29825714543722,
      longitude: -80.05673783219322
    }
  },
  {
    displayName: "Ritter Hall",
    overview: '',
    description: 'Completed in August 2005, Ritter Hall forms a residence "complex" along with Caldwell and Beamer Halls. Ritter houses upperclass men and women. The building is named for Rev. Guy "Tex" Ritter, retired associate professor of religion and philosophy, at the request of Roanoke College Board of Trustee member Nancy Baird Mulheren \'72. Ms. Mulheren pledged $2.5 million for the new residence hall in tribute to her late husband, John Mulheren \'71, who died in 2004. "Tex Ritter is a symbol of spirit and generosity," Mulheren said. "He always has a great story to tell and he is anxious to share a lesson in life. Plus, he mentored John in \'pranksterology!\' It was Tex who allowed the historic obelisk to be built in secret in his garage."',
    tags: [...dormTags, 'cbr'],
    id: 'ritter-hall',
    type: 'dormitory',
    coordinate: {
      latitude: 37.29859006195328,
      longitude: -80.05653279288778
    }
  },
];

const markerTypes = {
  'academic': {icon: 'school', backgroundColor: 'darkblue'},
  'recreational': {icon: 'basketball', backgroundColor: 'green'},
  'administrative': {icon: 'office-building', backgroundColor: 'purple'},
  'food': {icon: 'food', backgroundColor: 'orange'},
  'dormitory': {icon: 'home', backgroundColor: 'brown'},
};