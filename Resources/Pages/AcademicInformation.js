import React from "react";
import {SafeAreaView, ScrollView, FlatList, View} from "react-native";
import RectList from '../RectList.js';
import ProfileData from '../Profile/ProfileData.js';
import { Divider } from '@rneui/themed';

function AcademicInformationPage()
{
	return(
		<ScrollView>
			{ProfileData.terms.map((item) => (
				<View>
					<Divider subHeader={item.title} />
					<FlatList 
						data={item.grades} 
						renderItem={({gradeItem}) => <RectList data={gradeItem}></RectList>}
						keyExtractor={item => item.id}	
					/>
				</View>
			))}

		</ScrollView>
	)
}


export default AcademicInformationPage;