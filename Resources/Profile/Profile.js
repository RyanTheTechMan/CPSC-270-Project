import styles from "../Shared/styles";
import {Image, Pressable, View, Text} from "react-native";

const profileButtonSize = 75;

styles.profileButton = {
  position: 'absolute',
  bottom: 0,
  margin: profileButtonSize / 2,
  left: '50%',
  marginLeft: -profileButtonSize / 2,
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
styles.profileButtonImage = {
  width: profileButtonSize,
  height: profileButtonSize,
  borderRadius: 50,
}
function ProfileButton() {
  return (
    <View style={styles.profileButton}>
      <Pressable onPress={() => console.log("would have gone to profile")}>
        <Image
          style={styles.profileButtonImage}
          source={require('./image.jpeg')}
        />
      </Pressable>
    </View>
  );
}

export default ProfileButton;