import React from 'react';
import { TouchableOpacity, Text, Linking, StyleSheet} from 'react-native';

const PhoneNumberLink = ({ phoneNumber }) => {
  const handlePhonePress = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  }

  return (
    <TouchableOpacity onPress={handlePhonePress}>
      <Text style={styles.link}>{phoneNumber}</Text>
    </TouchableOpacity>
  );
}

const EmailLink = ({ emailAddress }) => {
  const handleEmailPress = () => {
    Linking.openURL(`mailto:${emailAddress}`);
  }

  return (
    <TouchableOpacity onPress={handleEmailPress} >
      <Text style={styles.link}>{emailAddress}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  link: {
    color: 'cornflowerblue',
    fontWeight: 'bold', 
    textDecorationLine: 'underline',
  }
});

export { PhoneNumberLink, EmailLink };
