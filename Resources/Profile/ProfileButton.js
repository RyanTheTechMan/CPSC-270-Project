import React from 'react';
import { Pressable, View, Text, Dimensions, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-elements';

import profileData from './ProfileData';
import sharedStyles from '../Shared/styles';

const profileButtonSize = 75;

const { width, height } = Dimensions.get('window');

const styles = {
  ...sharedStyles,
  profileButton: {
    alignSelf: 'center',
    zIndex: 2,
    width: profileButtonSize,
    height: profileButtonSize,
    bottom: 30,
  },
  avatarContainer: {
    backgroundColor: 'rgba(0,0,0,1)',

    // iOS
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 3,

    // Android
    elevation: 20,
  },
  text: {
    fontSize: 10,
    color: sharedStyles.selected.color,
    marginTop: 5,
    alignSelf: 'center',
  },
};

function ProfileButton(props) {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View style={styles.profileButton}>
        <Pressable onPress={() => navigation.navigate('ProfileOverlay')}>
          <Avatar
            rounded
            containerStyle={styles.avatarContainer}
            size={profileButtonSize}
            source={{ uri: profileData.profileImage }}
          />
        </Pressable>
        <Text style={styles.text}>Profile</Text>
      </View>
    </View>
  );
}

export default ProfileButton;
