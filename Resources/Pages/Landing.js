import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import DirectoryList from '../DirectoryList';

 export const data = [
    { id: 0, title: 'Dining Options', iconName: 'food', pageName: 'Dining' },
    { id: 1, title: 'Mail Services', iconName: 'email', pageName: 'Mail' },
    { id: 2, title: 'Academic Information', iconName: 'school', pageName: 'Academics' },
    { id: 3, title: 'Financial Information', iconName: 'bank', pageName: 'Financial' },
  ];

export function LandingPage({ navigation }) {

  function handlePress(id) {
    if (data[id].pageName !== undefined) {
      navigation.navigate(data[id].pageName);
    } else
      console.log('No page for "' + data[id].title + '"');
  };

  return (
    <View style={styles.container}>
      <DirectoryList data={data} onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default LandingPage;