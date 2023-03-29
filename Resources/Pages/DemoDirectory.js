import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import DirectoryList from '../DirectoryList';

const DemoDirectory = () => {
  const data = [
    { id: 1, title: 'Rectangle 1' },
    { id: 2, title: 'Rectangle 2' },
    { id: 3, title: 'Rectangle 3' },
    { id: 4, title: 'Rectangle 4' },
    { id: 5, title: 'Rectangle 5' },
  ];

  const handlePress = (id) => {
    console.log(`Pressed rectangle with ID ${id}`);
    // navigate to the appropriate page based on the ID
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Directory List</Text>
      <DirectoryList data={data} onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default DemoDirectory;