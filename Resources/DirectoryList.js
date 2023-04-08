import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import sharedStyles, {header_color} from "./Shared/styles";

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
    backgroundColor: header_color,
  },
  iconSquare: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default DirectoryList;