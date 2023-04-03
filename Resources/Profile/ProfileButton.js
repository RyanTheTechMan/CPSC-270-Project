import styles from "../Shared/styles";
import {Pressable, View, Text} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-elements';

import profileData from "./ProfileData";

const profileButtonSize = 75;

styles.profileButton = {
  position: 'absolute',
  alignSelf: 'center',
  bottom: 30,
  zIndex: 2,
};

styles.avatarContainer = {
  width: profileButtonSize,
  height: profileButtonSize,
  borderRadius: 100,
  backgroundColor: 'white',
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.3,
  shadowRadius: 4,
  elevation: 5,
};

styles.text = {
  fontSize: 10,
  color: 'gray',
  marginTop: 5,
//   center horizontally
  alignSelf: 'center'
};

function ProfileButton(props) {
  const navigation= useNavigation();

  return (
    <View style={styles.profileButton}>
      <Pressable onPress={() => navigation.navigate('ProfileOverlay')}>
        <View style={styles.avatarContainer}>
          <Avatar rounded size={profileButtonSize} source={{uri: profileData.profileImage}} />
        </View>
      </Pressable>
      <Text style={styles.text}>Profile</Text>
    </View>
  );
}

export default ProfileButton;
