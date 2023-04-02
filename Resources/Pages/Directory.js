import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import DirectoryList from '../DirectoryList';
import sharedStyles, {neutral_color} from "../Shared/styles";

const DirectoryPage = () => {
  const data = [
    { id: 1, title: 'Dining Options' },
    { id: 2, title: 'Mail Services' },
    { id: 3, title: 'Academic Information' },
    { id: 4, title: 'Financial Information' },
    { id: 5, title: '. . .' },
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
    backgroundColor: neutral_color,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default DirectoryPage;