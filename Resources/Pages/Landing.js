import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import DirectoryList from '../DirectoryList';
import sharedStyles, {neutral_color} from "../Shared/styles";

const LandingPage = ({navigation}) => {
  
  const data = [
    { id: 0, title: 'Dining Options' , pageName: 'Dining'},
    { id: 1, title: 'Mail Services' , pageName: 'Mail'},
    { id: 2, title: 'Academic Information' , pageName: 'Academics'},
    { id: 3, title: 'Financial Information', pageName: 'Financial' },
    { id: 4, title: '. . .', pageName: undefined},
  ];

  const handlePress = (id) => {
    if (data[id].pageName !== undefined) {
      console.log('Navigating to ' + data[id].pageName)
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
    backgroundColor: neutral_color,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default LandingPage;