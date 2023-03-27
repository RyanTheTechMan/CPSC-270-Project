import React from 'react';
import { StyleSheet, View } from 'react-native';
import RectList from '../RectList.js';

const data = [
  { id: 1, title: 'Salem Police Department', description: '1(234) 567-8910' },
  { id: 2, title: 'Campus Safety', description: '1(234) 567-8910' },
  { id: 3, title: 'RA on Duty', description: 'North Side: 1(234) 567-8910\nSouth Side: 1(234) 567-8910\nWest Side: 1(234) 567-8910\nEC: 1(234) 567-8910' },
  { id: 4, title: 'Res. Life & Housing', description: '1(234) 567-8910' },
  { id: 5, title: 'Student Health & Counseling', description: '1(234) 567-8910' },
];

export default function SafetyPage() {
  return (
    <View style={styles.container}>
      <RectList data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
