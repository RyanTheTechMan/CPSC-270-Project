import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';

const CustomTab = ({children, onPress, style}) => {
  return (
    <View style={{zIndex: -1, flex:1}}>
      <TouchableOpacity onPress={onPress} style={[styles.tab, style]}>
        {children}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomTab;