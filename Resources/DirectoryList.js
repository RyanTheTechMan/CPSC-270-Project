import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

const DirectoryList = ({ data, onPress }) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.item}
          onPress={() => onPress(item.id)}
        >
          <View style={styles.iconSquare}>
            {/* add your icon here */}
          </View>
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
  },
  iconSquare: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 20,
    backgroundColor: '#bdbdbd',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default DirectoryList;