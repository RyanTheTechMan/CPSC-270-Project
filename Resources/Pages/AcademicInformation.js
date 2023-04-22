import React from "react";
import {StyleSheet, ScrollView, View, Text} from "react-native";
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

function OverallProgress()
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
				<OverallProgress />
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
				<RoundedRect title={"Term GPA: "}>
					<Text>{term.gpa}</Text>
				</RoundedRect>
				{term.grades.map((myClass) => (
					<RoundedRect key={myClass.title} title={myClass.title}>
						<Text>{"Midterm: " + myClass.midterm}</Text>
						<Text>{"Final: " + myClass.final}</Text>
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

function MajorGPA()
{
	return(
		<RoundedRect title={"Major GPA"}>
			<Text>{ProfileData.majorGPA}</Text>
		</RoundedRect>
	)
}

function CumulativeGPA()
{
	return(
		<RoundedRect title={"Cumulative GPA"}>
				<Text>{ProfileData.cumulativeGPA}</Text>
		</RoundedRect>
	)
}

function GPA()
{
	return(
		<RoundedRect title={"GPA"}>
			<RoundedRectList>
				<CumulativeGPA />
				<MajorGPA />
			</RoundedRectList>
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