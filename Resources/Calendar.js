import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    Pressable
} from 'react-native';
import { Agenda, CalendarProvider } from 'react-native-calendars';

const calendarData = {
    '2023-04-10': [{ name: 'CPSC270', time: '10:50-11:50pm' }, { name: 'CHEM342', time: '12:00-1:00pm' }],
    '2023-04-12': [{ name: 'CPSC270', time: '10:50-11:50pm' }, { name: 'CHEM342', time: '12:00-1:00pm' }, { name: 'CHEM342L', time: '2:20-5:20pm' }],
    '2023-04-14': [{ name: 'CPSC270', time: '10:50-11:50pm' }, { name: 'CHEM342', time: '12:00-1:00pm' }],
}



export function CalendarPage() {

    return (
        <CalendarProvider style={styles.container}>
            <Agenda
                theme={{
                    dotColor: '#8B1D3D',
                    selectedDayBackgroundColor: '#8B1D3D',
                }}
                items={calendarData}
                renderItem={(item, isFirst) => (
                    <TouchableOpacity style={styles.item}>
                        <Text style={styles.itemText}>{item.name}</Text>
                        <Text style={styles.itemText}>{item.time}</Text>
                    </TouchableOpacity>
                )}
            />
        </CalendarProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
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

