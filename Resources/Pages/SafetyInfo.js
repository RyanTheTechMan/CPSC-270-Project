import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { RoundedRect, RoundedRectList } from "../RoundedRect";
import {neutral_color} from "../Shared/styles";
import { PhoneNumberLink, EmailLink } from '../PhoneEmailComponents';


const SafetyList = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <RoundedRectList>
        <RoundedRect title="Salem Police Department" style={styles.custom}>
          <View>
            <Text style={styles.boldandwhite}>Emergency: </Text>
            <PhoneNumberLink phoneNumber='911' />
            <Text style={styles.boldandwhite}>Police Non-Emergency Dispatch: </Text>
            <PhoneNumberLink phoneNumber='540-375-3078' />
            <Text style={styles.boldandwhite}>Office of Chief of Police and Deputy Chief of Police: </Text>
            <PhoneNumberLink phoneNumber='540-375-3010' />
            <Text style={styles.boldandwhite}>Records and Detective Division: </Text>
            <PhoneNumberLink phoneNumber='540-375-3083' />
            <Text style={styles.boldandwhite}>Animal Control & Animal Shelter: </Text>
            <PhoneNumberLink phoneNumber='540-375-3038' />
            <Text style={styles.boldandwhite}>Salem City Sheriff's Department Non Emergency: </Text>
            <PhoneNumberLink phoneNumber='540-375-3040' />
            <Text style={styles.boldandwhite}>or</Text>
            <PhoneNumberLink phoneNumber='540-389-0978' />
            <Text style={styles.boldandwhite}>Probation & Parole: </Text>
            <PhoneNumberLink phoneNumber='540-387-5257' />
            <Text style={styles.boldandwhite}>Email: </Text>
            <EmailLink emailAddress='salempolice@salemva.gov' />
          </View>
        </RoundedRect>

        <RoundedRect title="Campus Safety" style={styles.custom}>
        <View>
          <Text style={styles.boldandwhite}>Phone:</Text>
          <PhoneNumberLink phoneNumber='540-375-2310' />
          <Text style={styles.boldandwhite}>Email:</Text>
          <EmailLink emailAddress='CampusSafety@roanoke.edu' />
        </View>
        </RoundedRect>

        <RoundedRect title="RA On Duty" style={styles.custom}>
          <View>
            <Text style={styles.boldandwhite}>North Side RA: </Text>
            <PhoneNumberLink phoneNumber='540-524-0699' />
            <Text style={styles.boldandwhite}>South Side RA: </Text>
            <PhoneNumberLink phoneNumber='540-521-4282' />
            <Text style={styles.boldandwhite}>West Side RA: </Text>
            <PhoneNumberLink phoneNumber='540-521-3246' />
            <Text style={styles.boldandwhite}>Elizabeth Campus RA: </Text>
            <PhoneNumberLink phoneNumber='540-375-2310' />
          </View>
        </RoundedRect>

        <RoundedRect title="Res. Life & Housing" style={styles.custom}>
          <View>
            <Text style={styles.boldandwhite}>Phone:</Text>
            <PhoneNumberLink phoneNumber='540-375-2308' />
            <Text style={styles.boldandwhite}>Email:</Text>
            <EmailLink emailAddress='reslife@roanoke.edu' />
          </View>
        </RoundedRect>
        
        <RoundedRect title="Student Health & Counseling" style={styles.custom}>
          <View>
            <Text style={styles.boldandwhite}>Phone:</Text>
            <PhoneNumberLink phoneNumber='540-375-2286' />
            <Text style={styles.boldandwhite}>Email:</Text>
            <EmailLink emailAddress='healthservices@roanoke.edu' />
          </View>
        </RoundedRect>
      </RoundedRectList>

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
//    backgroundColor: neutral_color,
    flexGrow: 1,
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  imageContainer: {
    width: "100%",
    height: 200,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  boldandwhite: {
    fontWeight: 'bold', 
    color: '#fff'
  },
});

export default SafetyList;