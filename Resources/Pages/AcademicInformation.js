import React from "react";
import {SafeAreaView, ScrollView, View, Text} from "react-native";
import ProfileData from '../Profile/ProfileData.js';
import { RoundedRect, RoundedRectList } from "../RoundedRect.js";
import * as Progress from 'react-native-progress';
import * as style from "../Shared/styles";

function TotalSchoolUnits()
{
	return(
		<RoundedRect title={"Total Units from this School"}>
			<Progress.Bar progress={ProfileData.totalUnitsFromSchool} 
	 		     width={style.subProgressBarWidth} 
				color={style.progress_bar_color} />
		</RoundedRect>
	)
}

function TotalUnits()
{
	return(
		<RoundedRect title={"Total Units"}>
		     <Progress.Bar progress={ProfileData.totalUnits}
				width={style.subProgressBarWidth} 
				color={style.progress_bar_color} />
		</RoundedRect>
	)
}

function Progress()
{
	<RoundedRect title={"Progress"}>
	    <Progress.Bar progress={ProfileData.overallProgress} 
	        	width={style.subProgressBarWidth} 
			color={style.progress_bar_color}/>
	</RoundedRect>
}

function StudentProgress()
{
	return(
		<RoundedRect title={"My Progress"}>
			<RoundedRectList>
				<Progress />
				<TotalUnits />
				<TotalSchoolUnits />
			</RoundedRectList>
		</RoundedRect>
	)
}

function Terms({term})
{
	return(
		<RoundedRect title={term.title}>
			<RoundedRectList>
				{term.grades.map((myClass) => (
					<RoundedRect key={myClass.title} title={myClass.title}>
						<Text>{myClass.description}</Text>
					</RoundedRect>
				))}
			</RoundedRectList>
		</RoundedRect>
	)
}

function Grades()
{
	return(
		<RoundedRect title={"Grades"}>
			<RoundedRectList>
			{ProfileData.terms.map((item) => (
				<View key={item.title}>
					<Terms term={item} />
				</View>
			))}
			</RoundedRectList>
		</RoundedRect>
	)
}

function GPA()
{
	return(
		<RoundedRect title={"Cumulative GPA"}>
			<Text>{ProfileData.cumulativeGPA}</Text>
		</RoundedRect>
	)
}

function AcademicInformationPage()
{
	return(
		<ScrollView>
			<GPA />
			<Grades />
			<StudentProgress />
		</ScrollView>
	)
}

export default AcademicInformationPage;