import { StyleSheet } from 'react-native';

const header_color = '#8B1D3D';
const primary_color = '#f3af98';
const secondary_color = '#224B5B';
const tertiary_color = '#67AF96';
const success_color = '#4A9772';
const warning_color = '#F2C94C';
const danger_color = '#D83A56';
const neutral_color = '#EDECD3';

const sharedStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: neutral_color,
  },
  header: {
    backgroundColor: header_color,
    color: neutral_color,
    tintColor: '#fff',
  },
  selected: {
    color: secondary_color
  },
  unselected: {
    color: primary_color
  },
  button: {
    backgroundColor: primary_color,
  },
  button_text: {
    color: neutral_color
  },

});

export default sharedStyles;

export {
  header_color,
  primary_color,
  secondary_color,
  tertiary_color,
  success_color,
  warning_color,
  danger_color,
  neutral_color
}