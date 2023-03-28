import styles from "../Shared/styles";
import {Image, Pressable, View, Text} from "react-native";
import ProfileData from "./ProfileData";
import ImageLoader from "../Shared/Loading/ImageLoader";

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
        <ImageLoader
          source={'https://images.unsplash.com/photo-1526666923127-b2970f64b422'}
          loadingSource={'https://cdn.onlinewebfonts.com/svg/download_527746.svg'}
          // loadingSource={require('../Shared/Loading/failed_loading_profile.svg')}
          errorSource={'https://media.istockphoto.com/id/1420881183/vector/no-image-available-illustration-isolated-placeholder.jpg?s=612x612&w=0&k=20&c=uJkcaL6mEZpLHIlX9klz8CclzmrTHNAHUNdyLNvphAA='}
          style={styles.profileButtonImage}
        />
      </Pressable>
    </View>
  );
}

export default ProfileButton;