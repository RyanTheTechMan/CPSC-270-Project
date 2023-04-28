import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { RoundedRect, RoundedRectList } from "../RoundedRect";
import { PhoneNumberLink, EmailLink } from '../PhoneEmailComponents';
import SafetyData from '../Shared/SafetyData.js';

function EmailContactInfo({pContact})
{
	return(
		<View>
			{pContact.map((singleContact) => (
				<View key={singleContact.label}>			
					<Text style={styles.boldandwhite}>{singleContact.label}</Text>
					<EmailLink emailAddress={singleContact.contact} />
				</View>
			))}
		</View>
	)
}

function PhoneContactInfo({pContact})
{
	return(
		<View>
			{pContact.map((singleContact) => (
				<View key={singleContact.label}>			
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
          <RoundedRect key={item.title} title={item.title} style={styles.custom}>
            <PhoneContactInfo pContact={item.phoneContactInfo} />
            <EmailContactInfo pContact={item.emailContactInfo} />
          </RoundedRect>
        ))}
        
      </RoundedRectList>

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
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