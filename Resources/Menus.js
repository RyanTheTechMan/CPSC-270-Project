import { Dimensions, StyleSheet, Text, View, SectionList, FlatList, Pressable, TouchableOpacity, ScrollView, } from 'react-native';
import { useState } from "react";
import { commonsMenu, freshensMenu, cavernMenu} from './Shared/diningData.js';

export function RenderMealItems(mealItems){
  return(
    <FlatList
      style={styles.mealContainer}
      data={mealItems.mealItems}
      renderItem={({ item }) => (
        <View key={item}>
          <Text style={styles.mealItemText}>{item}</Text>
        </View>
      )}
    />
  );
}

export function RenderMeal(dayMeals) {
  return (
    <FlatList
      style={styles.mealContainer}
      data={dayMeals.dayMeals}
      renderItem={({ item }) => (
        <View key= {item.meal}>
          <Text  style={styles.meal}>{item.meal}</Text>
          <RenderMealItems mealItems={item.mealItems}/>
        </View>
      )}
    />
  );
}

export function RenderDay(locationMenu) {
  return (
    <FlatList
      style={styles.menuSchedule}
      showsVerticalScrollIndicator={false}
      data={locationMenu.locationMenu}
      keyExtractor={(item) => item.day}
      renderItem={({ item }) => (
        <View key={item.day}>
          <Text  style={styles.day} >{item.day}</Text>
          {console.log(item.day)}
          <RenderMeal dayMeals={item.meals} />
        </View>
      )}
    />
  );
}

export function convertLocationToMenu(selectedLocation) {
  let locationMenu;
  switch (selectedLocation) {
    case 'Cavern':
      locationMenu = cavernMenu;
      break;
    case 'Commons':
      locationMenu = commonsMenu;
      break;
    case 'Freshens':
      locationMenu = freshensMenu;
      break;
  }
  return locationMenu;
}

export function RenderLocationMenu(props) {
  const selectedLocation = props.selectedLocation;
  const locationMenu = convertLocationToMenu(selectedLocation);
  return (
    <RenderDay locationMenu={locationMenu} />
  );
}

export function RenderDiningLocationButton(props) {
  return (
    <TouchableOpacity
      style={[styles.button, props.selectedLocation === props.diningLocation ? styles.selectedButton : styles.unselectedButton]}
      onPress={() => props.handleLocationPress(props.diningLocation)}
    >
      <Text style={[styles.buttonText, props.selectedLocation === props.diningLocation ? styles.selectedText : null]} >{props.diningLocation}</Text>
    </TouchableOpacity>
  );
}

export function DiningPage() {

  const [selectedLocation, setSelectedLocation] = useState('Cavern');

  function handleLocationPress(diningLocation) {
    setSelectedLocation(diningLocation)
  }
  return (
    <View>
      <View style={styles.diningButtons}>
        <RenderDiningLocationButton selectedLocation={selectedLocation} diningLocation='Cavern' handleLocationPress={handleLocationPress} />
        <RenderDiningLocationButton selectedLocation={selectedLocation} diningLocation='Commons' handleLocationPress={handleLocationPress} />
        <RenderDiningLocationButton selectedLocation={selectedLocation} diningLocation='Freshens' handleLocationPress={handleLocationPress} />
      </View>
      <RenderLocationMenu selectedLocation={selectedLocation} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'flex-start',
    width: '100%',
    borderWidth: 2,
  },
  menuSchedule: {
    paddingHorizontal: 10,
    flexShrink: 0,
    width: '100%',
  },
  day: {
    fontSize: 40,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#4a4a4a',
    textAlign: 'left',
    width: '100%',
  },
  mealContainer: {
    flex: 1,
    alignContent: 'center',
  },
  meal: {
    flex: 1,
    fontSize: 24,
    marginTop: 15,
    marginBottom: 10,
    fontWeight: '600',
    color: '#313131',
    width: 'auto',
    textAlign: 'center',
  },
  mealItemText: {
    fontSize: 18,
    marginBottom: 5,
    color: '#313131',
    width: 'auto',
    textAlign: 'center',

  },
  diningButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#dcdcdc',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#dcdcdc',
  },
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  selectedButton: {
    backgroundColor: '#4d4d4d',
    borderColor: '#4d4d4d',
  },
  unselectedButton: {
    backgroundColor: '#ffffff',
    borderColor: '#dcdcdc',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#313131',
    textAlign: 'center',
  },
  selectedText: {
    color: '#ffffff',
  },
  separator: {
    color: 'black',
    width: '100%',
    height: 0.5,
  },
});
