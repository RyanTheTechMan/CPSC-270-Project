import React from "react";
import {SafeAreaView} from "react-native";
import RectList from '../RectList.js';
import ProfileData from '../Profile/ProfileData.js';

function AcademicInformationPage()
{
	return(
		<SafeAreaView>
			<RectList data = {ProfileData.grades}></RectList>
		</SafeAreaView>
	)
}


export default AcademicInformationPage;