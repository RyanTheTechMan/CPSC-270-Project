import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import {header_color} from "./Shared/styles";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DirectoryList = ({ data, onPress, iconName }) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.item}
          onPress={() => onPress(item.id)}
        >
          <View style={styles.iconSquare}>
            <MaterialCommunityIcons name={item.iconName} size={40} color="#fff" style={{alignSelf: 'center', top: 4}}/>
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
    backgroundColor: header_color,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default DirectoryList;