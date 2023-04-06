import { Dimensions, StyleSheet, Text, View, SectionList, FlatList, Pressable, TouchableOpacity, ScrollView, } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from "react";

export const commonsMenu = [
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

export const freshensMenu = [
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

export const cavernMenu = [
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

const { width, height } = Dimensions.get('window');

const Stack = createStackNavigator();

export function DiningStack() {
  return (
    <Stack.Navigator initialRouteName="Commons" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Commons" component={DiningPage} />
      <Stack.Screen name="Freshens" component={DiningPage} />
      <Stack.Screen name="Cavern" component={DiningPage} />
    </Stack.Navigator>
  );
}


function DiningPage({ navigation, route }) {
  const menus = {
    Commons: commonsMenu,
    Freshens: freshensMenu,
    Cavern: cavernMenu,
  };

  const [selectedMenu, setSelectedMenu] = useState('Commons');

  const handleMenuPress = (menu) => {
    setSelectedMenu(menu);
  };

  const renderMenuButton = (menu) => (
    <TouchableOpacity
      style={[
        styles.button,
        selectedMenu === menu ? styles.selectedButton : styles.unselectedButton,
      ]}
      onPress={() => handleMenuPress(menu)}
      key={menu}
    >
      <Text
        style={[
          styles.buttonText,
          selectedMenu === menu ? styles.selectedButtonText : null,
        ]}
      >
        {menu}
      </Text>
    </TouchableOpacity>
  );

  const renderMenu = (menuData) => (
    <FlatList
      style={styles.menuSchedule}
      showsVerticalScrollIndicator={false}
      data={menuData}
      keyExtractor={(item) => item.day}
      renderItem={({ item }) => (
        <>
          {<Text style={styles.day}>{item.day}</Text>}
          {item.meals.map((meal) => (
            <View key={meal.meal} style={{borderWidth: 4}}>
              <Text style={styles.meal}>{meal.meal}</Text>
              {meal.mealItems.map((mealItem) => (
                <Text style={styles.item} key={mealItem}>{mealItem}</Text>
              ))}
            </View>
          ))}
        </>
      )}
    />
  );

  return (
    <View style={styles.page}>
      <View style={styles.diningButtons}>
        {renderMenuButton('Cavern')}
        {renderMenuButton('Commons')}
        {renderMenuButton('Freshens')}
      </View>
      {renderMenu(menus[selectedMenu])}
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
    alignItems: 'center',
    borderWidth: 2,
  },
  meal: {
    flex: 1,
    fontSize: 24,
    marginTop: 15,
    marginBottom: 10,
    fontWeight: '600',
    color: '#313131',
    borderWidth: 2,
    width: '70%',
    alignItems: 'center',

  },
  item: {
    fontSize: 18,
    marginLeft: 20,
    marginBottom: 5,
    color: '#313131',
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
