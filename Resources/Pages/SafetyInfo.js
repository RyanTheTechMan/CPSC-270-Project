import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { RoundedRect, RoundedRectList } from "../RoundedRect";
import {neutral_color} from "../Shared/styles";
import { PhoneNumberLink, EmailLink } from '../PhoneEmailComponents';
import SafetyData from '../Shared/SafetyData.js';

function EmailContactInfo({pContact})
{
	return(
		<View>
			{pContact.map((singleContact) => (
				<View>			
					<Text style={styles.boldandwhite}>{singleContact.label}</Text>
					<EmailLink emailAddress={singleContact.contact} />
				</View>
			))}
		</View>
	)
}

function PhoneContactInfo({pContact})
{
	console.log(pContact);
	return(
		<View>
			{pContact.map((singleContact) => (
				<View>			
					<Text style={styles.boldandwhite}>{singleContact.label}</Text>
					<PhoneNumberLink phoneNumber={singleContact.contact} />
				</View>
			))}
		</View>
	)
}

const SafetyList = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <RoundedRectList>
		{SafetyData.contacts.map((item) => (
			<RoundedRect title={item.title} style={styles.custom}>
				<PhoneContactInfo pContact={item.phoneContactInfo} />
				<EmailContactInfo pContact={item.emailContactInfo} />
			</RoundedRect>
		))}
        

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