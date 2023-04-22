import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import {header_color} from "./Shared/styles";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Icon({item})
{
	return(
		<View style={styles.iconSquare}>
            <MaterialCommunityIcons name={item.iconName} size={40} color="#fff" style={{alignSelf: 'center', top: 4}}/>
          </View>
	)
}

function DirectoryListItem({item, index, onPress})
{
	return(
		<TouchableOpacity
          	key={index}
          	style={styles.item}
          	onPress={() => onPress(item.id)}
          >
          	<Icon item={item}></Icon>
          	<Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
	)
}

function DirectoryList({ data, onPress }){
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <DirectoryListItem key={item.title} item={item} index={index} onPress={onPress}/>
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