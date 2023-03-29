import { StyleSheet, Text, View, SectionList, FlatList, ScrollView } from 'react-native';

export const commonsMenu = [
    {
        day: 'Sunday',
        meals: [{ meal: "Breakfast", mealItems: ["Eggs", "Toast"] }, { meal: "Lunch", mealItems: ["Sandwiches", "Soup", "Cookies"] }, { meal: "Dinner", mealItems: ["Pizza", "Salad", "Burgers"] }]
    },
    {
        day: 'Monday',
        meals: [{ meal: "Breakfast", mealItems: ["Eggs", "Toast"] }, { meal: "Lunch", mealItems: ["Sandwiches", "Soup", "Cookies"] }, { meal: "Dinner", mealItems: ["Pizza", "Salad", "Burgers"] }]
    },    {
        day: 'Tuesday',
        meals: [{ meal: "Breakfast", mealItems: ["Eggs", "Toast"] }, { meal: "Lunch", mealItems: ["Sandwiches", "Soup", "Cookies"] }, { meal: "Dinner", mealItems: ["Pizza", "Salad", "Burgers"] }]
    },    {
        day: 'Wednesday',
        meals: [{ meal: "Breakfast", mealItems: ["Eggs", "Toast"] }, { meal: "Lunch", mealItems: ["Sandwiches", "Soup", "Cookies"] }, { meal: "Dinner", mealItems: ["Pizza", "Salad", "Burgers"] }]
    },    {
        day: 'Thursday',
        meals: [{ meal: "Breakfast", mealItems: ["Eggs", "Toast"] }, { meal: "Lunch", mealItems: ["Sandwiches", "Soup", "Cookies"] }, { meal: "Dinner", mealItems: ["Pizza", "Salad", "Burgers"] }]
    },    {
        day: 'Friday',
        meals: [{ meal: "Breakfast", mealItems: ["Eggs", "Toast"] }, { meal: "Lunch", mealItems: ["Sandwiches", "Soup", "Cookies"] }, { meal: "Dinner", mealItems: ["Pizza", "Salad", "Burgers"] }]
    },    {
        day: 'Saturday',
        meals: [{ meal: "Breakfast", mealItems: ["Eggs", "Toast"] }, { meal: "Lunch", mealItems: ["Sandwiches", "Soup", "Cookies"] }, { meal: "Dinner", mealItems: ["Pizza", "Salad", "Burgers"] }]
    },
]

export function DiningPage({route, navigation}) {
  const {data} = route.params;
    console.log(data);
    return (
      <View style={styles.page}>
        <FlatList
          data={data}
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
      alignItems: 'left',
      marginTop: 20,
    },
    meal: {
      flex: 1,
      fontSize: 20,
      marginTop: 20,
      alignItems: 'center',
  
    }
  });
  