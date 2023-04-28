import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    Pressable,
    View
} from 'react-native';
import { Agenda, CalendarProvider } from 'react-native-calendars';
import { createStackNavigator } from '@react-navigation/stack';
import { AddEventPage } from './Pages/AddEventPage';

// WARNING: For sort to work correctly, edit the module: https://github.com/wix/react-native-calendars/pull/1890/commits/f9cbc87ed1412838d7a58b1cc841132b6ed80aed

const initialCalendarData = {
    '2023-04-24': [{ name: 'CPSC270', startTime: '10:50 AM', endTime: '11:50 AM' }, { name: 'CHEM342', startTime: '12:00 PM', endTime: '1:00 PM' }],
    '2023-04-25': [{ name: 'CPSC270', startTime: '10:50 AM', endTime: '11:50 AM' }, { name: 'CHEM342', startTime: '12:00 PM', endTime: '1:00 PM' }],
    '2023-04-28': [{ name: 'CPSC270 Final', startTime: '10:00 AM', endTime: '11:30 AM' }, { name: 'Lunch with Cathy', startTime: '12:00 PM', endTime: '1:00 PM' }],
}

const Stack = createStackNavigator();

export function CalendarStack() {
    const [calendarData, setCalendarData] = useState(initialCalendarData);
    return (
        <Stack.Navigator initialRouteName="EventCalendar" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="EventCalendar"  >
                {(props) => <CalendarPage {...props} calendarData={calendarData} setCalendarData={setCalendarData} key={calendarData} />}
            </Stack.Screen>
            <Stack.Screen name="AddEvent" >
            {(props) => <AddEventPage {...props} calendarData={calendarData} setCalendarData={setCalendarData} key={calendarData} />}
           </Stack.Screen>
        </Stack.Navigator>
    );
}

export function CalendarPage({ route, navigation, calendarData, setCalendarData }) {
        return (
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
                        extraData={calendarData}
                        items={calendarData}
                        renderItem={(item) => (
                            <View key={item.name}>
                                <Pressable style={styles.item}>
                                    <Text style={styles.itemText}>{item.name}</Text>
                                    <Text style={styles.itemText}>{item.startTime} - {item.endTime}</Text>
                                </Pressable>
                            </View>
                        )}
                    />
                </CalendarProvider>
                <Pressable style={styles.addButton} onPress={() => navigation.navigate('AddEvent')}>
                    <Text style={styles.addButtonText}>+</Text>
                </Pressable>
            </View>
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

