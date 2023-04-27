import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns'

export function AddEventPage({ route, navigation }) {
  console.log(route.params.calendarData);
  let tempCalendarData = route.params.calendarData;
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [timePicker, setTimePicker] = useState(false);
  const [endTimePicker, setEndTimePicker] = useState(false);
  const [time, setTime] = useState(new Date(Date.now()));
  const [endTime, setEndTime] = useState(new Date(Date.now()));
  const [eventText, setEventText] = useState('');

  function showDatePicker() {
    setDatePicker(true);
  };

  function showTimePicker() {
    setTimePicker(true);
  };

  function showEndTimePicker() {
    setEndTimePicker(true);
  };

  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  };

  function onStartTimeSelected(event, value) {
    setTime(value);
    setTimePicker(false);
  };

  function onEndTimeSelected(event, value) {
    setEndTime(value);
    setEndTimePicker(false);
  };

  console.log(format(date, 'yyyy-MM-dd'));
  const dateInKeyFormat = format(date, 'yyyy-MM-dd');
  let startTime = format(time, 'K:mm a');
  //console.log('STARTTIME');
  //console.log(startTime);
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styleSheet.MainContainer}>

        <Text style={styleSheet.text}>Date = {date.toDateString()}</Text>

        <Text style={styleSheet.text}>Start Time = {time.toLocaleTimeString('en-US')}</Text>

        <Text style={styleSheet.text}>End Time = {endTime.toLocaleTimeString('en-US')}</Text>

        <TextInput
          style={styleSheet.eventText}
          placeholder='Enter event name here'
          onChangeText={newText => setEventText(newText)}
          value={eventText}
        />

        {datePicker && (
          <DateTimePicker
            value={date}
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onDateSelected}
            style={styleSheet.datePicker}
          />
        )}

        {timePicker && (
          <DateTimePicker
            value={time}
            mode={'time'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={false}
            onChange={onStartTimeSelected}
            style={styleSheet.datePicker}
          />
        )}

        {endTimePicker && (
          <DateTimePicker
            value={time}
            mode={'time'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={false}
            onChange={onEndTimeSelected}
            style={styleSheet.datePicker}
          />
        )}

        {!datePicker && (
          <View style={{ margin: 10 }}>
            <Pressable style={styleSheet.pickerToggle} onPress={showDatePicker}>
              <Text style={styleSheet.pickerText}>Show Date Picker</Text>
            </Pressable>
          </View>
        )}

        {!timePicker && (
          <View style={{ margin: 10 }}>
            <Pressable style={styleSheet.pickerToggle} onPress={showTimePicker}>
              <Text style={styleSheet.pickerText}>Event Start Time</Text>
            </Pressable>
          </View>
        )}

        {!endTimePicker && (
          <View style={{ margin: 10 }}>
            <Pressable style={styleSheet.pickerToggle} onPress={showEndTimePicker}>
              <Text style={styleSheet.pickerText}>Event End Time</Text>
            </Pressable>
          </View>
        )}
        <Pressable style={styleSheet.pickerToggle}
          onPress={() => {
            const eventData = {
              date: dateInKeyFormat,
              name: eventText,
              time: startTime,
            };
            const updatedCalendarData = updateCalendarData(eventData, tempCalendarData);
            route.params.changeCalendar(updatedCalendarData);
          }}
        >
          <Text style={styleSheet.pickerText}>Add This Event to Calendar</Text>
        </Pressable>

      </View>
    </SafeAreaView>
  );
}

function updateCalendarData(eventData, tempCalendarData) {
  if (!tempCalendarData[eventData.date]) {
    tempCalendarData[eventData.date] = [{ name: eventData.name, time: eventData.time }];
  }
  else {
    tempCalendarData[eventData.date].push({ name: eventData.name, time: eventData.time });
    tempCalendarData[eventData.date].sort((eventA, eventB) => {
      if (eventA.time < eventB.time) {
        return -1;
      }
      if (eventA.time > eventB.time) {
        return 1;
      }
      return 0;
    });
  }
  return tempCalendarData;
};

const styleSheet = StyleSheet.create({

  MainContainer: {
    flex: 1,
    padding: 6,
    alignItems: 'center',
    backgroundColor: 'white'
  },

  text: {
    fontSize: 25,
    color: 'red',
    padding: 3,
    marginBottom: 10,
    textAlign: 'center'
  },

  // Style for iOS ONLY...
  datePicker: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 320,
    height: 260,
    display: 'flex',
  },

  pickerText: {
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 40,


  },
  pickerToggle: {
    borderRadius: '10%',
    backgroundColor: '#8B1D3D',
  },

  eventText: {
    borderWidth: 2,
    fontSize: 30,
    padding: 10,

  },

});