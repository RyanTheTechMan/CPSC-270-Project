import React from 'react';
import { StyleSheet, View } from 'react-native';
import RectList from '../RectList.js';

const data = [
  { id: 1, title: 'Rectangle 1', description: 'Description 1' },
  { id: 2, title: 'Rectangle 2', description: 'Description 2' },
  { id: 3, title: 'Rectangle 3', description: 'Description 3' },
];

export default function RectListDemo() {
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
