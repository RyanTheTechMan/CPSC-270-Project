import React from "react";
import {SafeAreaView, ScrollView, StyleSheet, Text} from "react-native";
import ProfileData from '../Profile/ProfileData.js';
import { RoundedRect, RoundedRectList } from "../RoundedRect.js";
import { Divider } from '@rneui/themed';
import * as style from "../Shared/styles";



function StudentFinance()
{
	return(
		<RoundedRect title={"Account Overview"}>
		    <Text style={styles.AmountDue}>{"    Amount Due                                               -$800.00"}</Text>
		    <Divider width={1} color={style.header_color} />
		    <Text style={styles.AmountDue}>{"+ Amount Overdue                                              $0.00"}</Text>
		    <Divider width={2} color={style.header_color} />
		    <Text style={styles.AmountDue}>{"= Total Amount Due                                      -$800.00"}</Text>
		    <Divider width={2} color={style.header_color} /> 
		    <Text style={styles.AmountDue}>{"= Total Account Balance                               -$800.00"}</Text>
		</RoundedRect>
	)
}

function FinancialAidHome()
{
	return(
		<RoundedRect title={"Financial Aid Home"}>
			<RoundedRectList>

			</RoundedRectList>
		</RoundedRect>
	)
}

function RequiredDocuments()
{
	return(
		<RoundedRect title={"Required Documents"}>
			<RoundedRectList>

			</RoundedRectList>
		</RoundedRect>
	)
}

function Awards()
{
	return(
		<RoundedRect title={"Report/View Outside Awards"}>
			<RoundedRectList>

			</RoundedRectList>
		</RoundedRect>
	)
}

function RequestLoan()
{
	return(
		<RoundedRect title={"Request a New Loan"}>
			<RoundedRectList>

			</RoundedRectList>
		</RoundedRect>
	)
}

function SatisfactoryAcademicProgress()
{
	return(
		<RoundedRect title={"Satisfactory Academic Progress"}>
			<RoundedRectList>

			</RoundedRectList>
		</RoundedRect>
	)
}

function FinancialAid()
{
	return(
		<RoundedRect title={"Financial Aid"}>
			<FinancialAidHome />
			<RequiredDocuments />
			<Awards />
			<RequestLoan />
			<SatisfactoryAcademicProgress />
		</RoundedRect>
	)
}

function TaxInformation()
{
	return(
		<RoundedRect title={"Tax Information"}>
			<RoundedRectList>

			</RoundedRectList>
		</RoundedRect>
	)
}

function BankingInformation()
{
	return(
		<RoundedRect title={"Banking Information"}>
			<RoundedRectList>

			</RoundedRectList>
		</RoundedRect>
	)
}

function AcademicInformationPage()
{
	return(
		<ScrollView>
			<StudentFinance />
			<FinancialAid />
			<TaxInformation />
			<BankingInformation />
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	AmountDue: {
		fontSize: 15
	}
});

export default AcademicInformationPage;