import { StyleSheet, Text, View, SectionList, FlatList, ScrollView, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

export const commonsMenu = [
  {
    day: 'Sunday',
    meals: [{ meal: "Breakfast", mealItems: ["Eggs", "Toast"] }, { meal: "Lunch", mealItems: ["Sandwiches", "Soup", "Cookies"] }, { meal: "Dinner", mealItems: ["Pizza", "Salad", "Burgers"] }]
  },
  {
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
  },
  {
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

const Stack = createStackNavigator();




export function DiningStack() {
  console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
  return (
    <Stack.Navigator initialRouteName="Cavern">
      <Stack.Screen name="Commons" component={DiningPage} initialParams={{ menuData: { commonsMenu } }} />
      <Stack.Screen name="Freshens" component={DiningPage} initialParams={{ menuData: { freshensMenu } }} />
      <Stack.Screen name="Cavern" component={DiningPage} initialParams={{ menuData: { cavernMenu } }} />
    </Stack.Navigator>
  );
}

function DiningPage({ route }) {
  const { menuData } = route.params;
  // console.log(menuData);
  // console.log(commonsMenu);

  return (
    <View style={styles.page}>
      <View style={styles.diningButtons}>
        <Button title="Cavern" style={styles.button} />
        <Button title="Commons" style={styles.button} />
        <Button title="Freshens" style={styles.button} />
      </View>
      <FlatList
        data={menuData[Object.keys(menuData)[0]]}
        renderItem={({ item }) =>
          <View>
            <Text style={styles.day}> {item.day}</Text>
            <FlatList
              data={item.meals}
              renderItem={({ item }) =>
                <View>
                  <Text style={styles.meal}>{item.meal}</Text>
                  <FlatList
                    data={item.mealItems}
                    renderItem={({ item }) =>
                      <Text>{item}</Text>
                    }
                  />

                </View>
              }

            />
          </View>
        }
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    fontColor: 'black',
  },
  day: {
    fontSize: 40,
    marginTop: 20,
  },
  meal: {
    flex: 1,
    fontSize: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  diningButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'red',
  },
});
