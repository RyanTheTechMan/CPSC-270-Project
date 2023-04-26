import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    Pressable,
    View
} from 'react-native';
import { Agenda, CalendarProvider } from 'react-native-calendars';
import { createStackNavigator } from '@react-navigation/stack';
import { AddEventPage } from './Pages/AddEventPage';

const initialCalendarData = {
    '2023-04-10': [{ name: 'CPSC270', time: '10:50-11:50pm' }, { name: 'CHEM342', time: '12:00-1:00pm' }],
    '2023-04-11': [],
    '2023-04-12': [{ name: 'CPSC270', time: '10:50-11:50pm' }, { name: 'CHEM342', time: '12:00-1:00pm' }, { name: 'CHEM342L', time: '2:20-5:20pm' }],
    '2023-04-14': [{ name: 'CPSC270', time: '10:50-11:50pm' }, { name: 'CHEM342', time: '12:00-1:00pm' }],
}

const Stack = createStackNavigator();

export function CalendarStack() {
    const [calendarData, setCalendarData] = useState(initialCalendarData);
    const CalendarContext = React.createContext();

    return (
        <CalendarContext.Provider calendarData={calendarData} onAddEvent={(newData) => {
            setCalendarData(newData)
            console.log("New data added");
            console.log(newData);
        }}>
            <Stack.Navigator initialRouteName="EventCalendar" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="EventCalendar" component={CalendarPage} />
                <Stack.Screen name="AddEvent" component={AddEventPage} />
            </Stack.Navigator>
        </CalendarContext.Provider>
    );
}

export function CalendarPage({ route, navigation }) {

    return (
        <CalendarContext.User>
            <View style={styles.calendar}>
                <CalendarProvider style={styles.container}>
                    <Agenda
                        theme={{
                            dotColor: '#8B1D3D',
                            selectedDayBackgroundColor: '#8B1D3D',
                        }}
                        renderEmptyData={() => {
                            return <View />
                        }}
                        items={calendarData}
                        renderItem={(item) => (
                            <Pressable style={styles.item}>
                                <Text style={styles.itemText}>{item.name}</Text>
                                <Text style={styles.itemText}>{item.time}</Text>
                            </Pressable>
                        )}
                    />
                </CalendarProvider>
                <Pressable style={styles.addButton} onPress={() => navigation.navigate('AddEvent', {
                    calendarData: calendarData,
                })}>
                    <Text style={styles.addButtonText}>+</Text>
                </Pressable>
            </View>
        </CalendarContext.User>
    );
};



const styles = StyleSheet.create({
    addButton: {
        height: 60,
        width: 60,
        backgroundColor: '#8B1D3D',
        position: 'absolute',
        bottom: '10%',
        right: 10,
        borderRadius: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        fontSize: 40,
        color: 'white',
        paddingBottom: 5,
    },
    calendar: {
        height: '100%',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17,
    },
    itemText: {
        color: '#888',
        fontSize: 16,
    }
});

