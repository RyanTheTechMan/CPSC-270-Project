import React from "react";
import {SafeAreaView, ScrollView, FlatList, View, Text} from "react-native";
import ProfileData from '../Profile/ProfileData.js';
//import { Divider } from '@rneui/themed';
import { RoundedRect, RoundedRectList } from "../RoundedRect.js";

function AcademicInformationPage()
{
	return(
		<ScrollView>
			{ProfileData.terms.map((item) => (
				<View>
					<RoundedRect title={item.title}>
						<RoundedRectList>
							{item.grades.map((myClass) => (
								<RoundedRect title={myClass.title}>
									<Text>
										{myClass.description}
									</Text>
								</RoundedRect>
							))}
						</RoundedRectList>
					</RoundedRect>
				</View>
			))}

		</ScrollView>
	)
}


export default AcademicInformationPage;