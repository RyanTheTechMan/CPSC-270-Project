import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import ProfileData from "../Profile/ProfileData";

function ProfileOverlay() {
  const name = ProfileData.fullName();
  const lockboxNumber = ProfileData.mailboxNumber;
  const imageUrl = ProfileData.profileImage;
  const money = ProfileData.moneyBalance;
  const printAllotment = ProfileData.printBalance;
  const mealSwipes = ProfileData.mealPlanBalance;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.lockbox}>
            <Icon name="lock" size={16} color="#333" />
            <Text style={styles.lockboxNumber}>{lockboxNumber}</Text>
          </View>
        </View>
      </View>
      <View style={styles.separator} />
      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statTitle}>Money</Text>
          <Text style={styles.statValue}>${money}</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statTitle}>Print Allotment</Text>
          <Text style={styles.statValue}>{printAllotment}</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statTitle}>Meal Swipes</Text>
          <Text style={styles.statValue}>{mealSwipes}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
  },
  userInfo: {
    marginLeft: 150,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lockbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  lockboxNumber: {
    marginLeft: 4,
    fontSize: 14,
  },
  separator: {
    backgroundColor: '#ccc',
    height: 1,
    marginTop: 100,
    marginBottom: 16,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stat: {
    alignItems: 'center',
  },
  statTitle: {
    fontSize: 14,
    color: '#888',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileOverlay;