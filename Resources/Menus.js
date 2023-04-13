import { Dimensions, StyleSheet, Text, View, SectionList, FlatList, Pressable, TouchableOpacity, ScrollView, } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from "react";

const commonsMenu = [
  {
    day: 'Sunday',
    meals: [{ meal: "Breakfast", mealItems: ["Eggs", "Toast"] }, { meal: "Lunch", mealItems: ["Sandwiches", "Soup", "Cookies"] }, { meal: "Dinner", mealItems: ["Pizza", "Salad", "Burgers"] }]
  }, {
    day: 'Monday',
    meals: [{ meal: "Breakfast", mealItems: ["Eggs", "Toast"] }, { meal: "Lunch", mealItems: ["Sandwiches", "Soup", "Cookies"] }, { meal: "Dinner", mealItems: ["Pizza", "Salad", "Burgers"] }]
  }, {
    day: 'Tuesday',
    meals: [{ meal: "Breakfast", mealItems: ["Eggs", "Toast"] }, { meal: "Lunch", mealItems: ["Sandwiches", "Soup", "Cookies"] }, { meal: "Dinner", mealItems: ["Pizza", "Salad", "Burgers"] }]
  }, {
    day: 'Wednesday',
    meals: [{ meal: "Breakfast", mealItems: ["Eggs", "Toast"] }, { meal: "Lunch", mealItems: ["Sandwiches", "Soup", "Cookies"] }, { meal: "Dinner", mealItems: ["Pizza", "Salad", "Burgers"] }]
  }, {
    day: 'Thursday',
    meals: [{ meal: "Breakfast", mealItems: ["Eggs", "Toast"] }, { meal: "Lunch", mealItems: ["Sandwiches", "Soup", "Cookies"] }, { meal: "Dinner", mealItems: ["Pizza", "Salad", "Burgers"] }]
  }, {
    day: 'Friday',
    meals: [{ meal: "Breakfast", mealItems: ["Eggs", "Toast"] }, { meal: "Lunch", mealItems: ["Sandwiches", "Soup", "Cookies"] }, { meal: "Dinner", mealItems: ["Pizza", "Salad", "Burgers"] }]
  }, {
    day: 'Saturday',
    meals: [{ meal: "Breakfast", mealItems: ["Eggs", "Toast"] }, { meal: "Lunch", mealItems: ["Sandwiches", "Soup", "Cookies"] }, { meal: "Dinner", mealItems: ["Pizza", "Salad", "Burgers"] }]
  },
]

const freshensMenu = [
  {
    day: 'Sunday',
    meals: [{ meal: "Breakfast", mealItems: ["Breakfast Burrito", "Fruit and Yogurt", "Chicken and Waffles"] }, { meal: "Lunch", mealItems: ["Chicken Salad", "Banana", "Apple", "Smoothies"] }, { meal: "Dinner", mealItems: ["Chicken Pizza", "Home Fries", "Cucumber Slices"] }]
  }, {
    day: 'Monday',
    meals: [{ meal: "Breakfast", mealItems: ["Breakfast Burrito", "Fruit and Yogurt", "Chicken and Waffles"] }, { meal: "Lunch", mealItems: ["Chicken Salad", "Banana", "Apple", "Smoothies"] }, { meal: "Dinner", mealItems: ["Chicken Pizza", "Home Fries", "Cucumber Slices"] }]
  }, {
    day: 'Tuesday',
    meals: [{ meal: "Breakfast", mealItems: ["Breakfast Burrito", "Fruit and Yogurt", "Chicken and Waffles"] }, { meal: "Lunch", mealItems: ["Chicken Salad", "Banana", "Apple", "Smoothies"] }, { meal: "Dinner", mealItems: ["Chicken Pizza", "Home Fries", "Cucumber Slices"] }]
  }, {
    day: 'Wednesday',
    meals: [{ meal: "Breakfast", mealItems: ["Breakfast Burrito", "Fruit and Yogurt", "Chicken and Waffles"] }, { meal: "Lunch", mealItems: ["Chicken Salad", "Banana", "Apple", "Smoothies"] }, { meal: "Dinner", mealItems: ["Chicken Pizza", "Home Fries", "Cucumber Slices"] }]
  }, {
    day: 'Thursday',
    meals: [{ meal: "Breakfast", mealItems: ["Breakfast Burrito", "Fruit and Yogurt", "Chicken and Waffles"] }, { meal: "Lunch", mealItems: ["Chicken Salad", "Banana", "Apple", "Smoothies"] }, { meal: "Dinner", mealItems: ["Chicken Pizza", "Home Fries", "Cucumber Slices"] }]
  }, {
    day: 'Friday',
    meals: [{ meal: "Breakfast", mealItems: ["Breakfast Burrito", "Fruit and Yogurt", "Chicken and Waffles"] }, { meal: "Lunch", mealItems: ["Chicken Salad", "Banana", "Apple", "Smoothies"] }, { meal: "Dinner", mealItems: ["Chicken Pizza", "Home Fries", "Cucumber Slices"] }]
  },
]

const cavernMenu = [
  {
    day: 'Monday',
    meals: [{ meal: "Dinner", mealItems: ["Fries", "Salad", "Burgers", "Chicken Sandwich"] }]
  }, {
    day: 'Tuesday',
    meals: [{ meal: "Dinner", mealItems: ["Fries", "Salad", "Burgers", "Chicken Sandwich"] }]
  }, {
    day: 'Wednesday',
    meals: [{ meal: "Dinner", mealItems: ["Fries", "Salad", "Burgers", "Chicken Sandwich"] }]
  }, {
    day: 'Thursday',
    meals: [{ meal: "Dinner", mealItems: ["Fries", "Salad", "Burgers", "Chicken Sandwich"] }]
  }, {
    day: 'Friday',
    meals: [{ meal: "Dinner", mealItems: ["Fries", "Salad", "Burgers", "Chicken Sandwich"] }]
  }, {
    day: 'Saturday',
    meals: [{ meal: "Dinner", mealItems: ["Fries", "Salad", "Burgers", "Chicken Sandwich"] }]
  },

]

//Renders the selected menu
function renderMenu(selectedMenu) {
  return (
    <FlatList
      style={styles.menuSchedule}
      showsVerticalScrollIndicator={false}
      data={selectedMenu}
      keyExtractor={(item) => item.day}
      renderItem={({ item }) => (
        <View>
          {<Text style={styles.day}>{item.day}</Text>}
          {item.meals.map((meal) => (
            <View key={meal.meal} style={styles.mealContainer}>
              <Text style={styles.meal}>{meal.meal}</Text>
              {meal.mealItems.map((mealItem) => (
                <Text style={styles.item} key={mealItem}>{mealItem}</Text>
              ))}
            </View>
          ))}
        </View>
      )}
    />
  )
};

//Changes menu selected
function handleMenuPress(diningMenu, setSelectedMenu) {
  setSelectedMenu(diningMenu);
};

//Converts dining location to corresponding menu object
function locationToMenuConverter(diningLocation) {
  switch (diningLocation) {
    case 'Commons':
      return commonsMenu;
    case 'Cavern':
      return cavernMenu;
    case 'Freshens':
      return freshensMenu;
  }
};

//Renders buttons for selecting dining locations
function renderMenuButton(diningLocation, selectedMenu, setSelectedMenu) {
  diningMenu = locationToMenuConverter(diningLocation);
  return (
    <TouchableOpacity
      style={[
        styles.button,
        selectedMenu === diningMenu ? styles.selectedButton : styles.unselectedButton,
      ]}
      onPress={() => handleMenuPress(diningMenu, setSelectedMenu)}
      key={diningMenu}
    >
      <Text
        style={[
          styles.buttonText,
          selectedMenu === diningMenu ? styles.selectedButtonText : null,
        ]}
      >
        {diningMenu}
      </Text>
    </TouchableOpacity>
  )
};

//Calls functions that render buttons to select dining locations and menu of activate button  

function DiningPage() {

  const [selectedMenu, setSelectedMenu] = useState(commonsMenu);
console.log(selectedMenu);
  return (
    <View style={styles.page}>
      <View style={styles.diningButtons}>
        {renderMenuButton('Cavern', selectedMenu, setSelectedMenu)}
        {renderMenuButton('Commons', selectedMenu, setSelectedMenu)}
        {renderMenuButton('Freshens', selectedMenu, setSelectedMenu)}
      </View>
      {renderMenu(selectedMenu)}
    </View>
  );
}


//Navigation component that manages different dining location pages.  Entry point for Dining.

const Stack = createStackNavigator();

export function DiningStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Commons" component={DiningPage} />
      <Stack.Screen name="Freshens" component={DiningPage} />
      <Stack.Screen name="Cavern" component={DiningPage} />
    </Stack.Navigator>
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
    alignItems: 'center',
    width: '100%',
  },
  mealContainer: {
    alignItems: 'center',
  },
  meal: {
    flex: 1,
    fontSize: 24,
    marginTop: 15,
    marginBottom: 10,
    fontWeight: '600',
    color: '#313131',
    width: 'auto',
  },
  item: {
    fontSize: 18,
    marginBottom: 5,
    color: '#313131',
    width: 'auto',

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
  selectedButtonText: {
    color: '#ffffff',
  },
  separator: {
    color: 'black',
    width: '100%',
    height: 0.5,
  },
});
