import React from "react";
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import ProfileData from '../Profile/ProfileData.js';
import { RoundedRect, RoundedRectList } from "../RoundedRect.js";
import { Divider } from '@rneui/themed';
import * as style from "../Shared/styles";
import { EmailLink, PhoneNumberLink } from "../PhoneEmailComponents.js";

export function BankingInformation()
{
	return(
		<RoundedRect title={"Banking Information"}>
			<RoundedRectList>
				<RoundedRect title="Payroll Deposits">
					<Text>{"Kern Schools Federal CU"}</Text>
				</RoundedRect>
				<RoundedRect title="Refunds, Reimbursements & Payments">
					<Text>{"Sean's Checking Account"}</Text>
				</RoundedRect>
			</RoundedRectList>
		</RoundedRect>
	)
}

export function TaxInformation()
{
	return(
		<RoundedRect title={"Tax Information"}>
			<RoundedRectList>
				<RoundedRect title="W2 Forms">

				</RoundedRect>
				<RoundedRect title="1098 Statements">

				</RoundedRect>
			</RoundedRectList>
		</RoundedRect>
	)
}

export function FinancialAidCounselor()
{
	return(
		<RoundedRect title="Financial Aid Counselor">
			<PhoneNumberLink phoneNumber='540-375-2235' />
			<EmailLink emailAddress='finaid@roanoke.edu' />
		</RoundedRect>
	)
}

export function SAPDetails()
{
	return(
		<RoundedRect title="SAP Details">
			<RoundedRectList>
				<RoundedRect title="Attempted Credits">
					<Text>{ProfileData.attemptedCredits}</Text>
				</RoundedRect>
				<RoundedRect title="Completed Credits">
					<Text>{ProfileData.completedCredits}</Text>
				</RoundedRect>
				<RoundedRect title="Cumulative GPA">
					<Text>{ProfileData.cumulativeGPA}</Text>
				</RoundedRect>
				<RoundedRect title="Pace of Completion">
					<Text>{ProfileData.paceOfCompletion}</Text>
				</RoundedRect>
			</RoundedRectList>
		</RoundedRect>
	)
}

export function SAPStatus()
{
	return(
		<RoundedRect title="SAP Status">
			<RoundedRectList>
				<RoundedRect title="Evaluation Period">
					<Text>{"1/1/2022 - 5/9/2022"}</Text>
				</RoundedRect>
				<RoundedRect title="Program">
					<Text>{"Data Science - Bachelor of Science - Honors Program"}</Text>
				</RoundedRect>
				<RoundedRect title="SAP Status">
					<Text>{"✓ Satisfactory"}</Text>
				</RoundedRect>
			</RoundedRectList>
		</RoundedRect>
	)
}

export function SatisfactoryAcademicProgress()
{
	return(
		<RoundedRect title={"Satisfactory Academic Progress"}>
			<RoundedRectList>
				<SAPStatus />
				<SAPDetails />
				<FinancialAidCounselor />
			</RoundedRectList>
		</RoundedRect>
	)
}

export function FinancialAid()
{
	return(
		<RoundedRect title={"Financial Aid"}>
			<SatisfactoryAcademicProgress />
		</RoundedRect>
	)
}

export function StudentFinance()
{
	return(
		<RoundedRect title={"Account Overview"}>
		    <Text style={styles.AmountDue}>{"    Amount Due                                               -$800.00"}</Text>
		    <Divider width={1} color={style.secondary_color} />
		    <Text style={styles.AmountDue}>{"+ Amount Overdue                                              $0.00"}</Text>
		    <Divider width={2} color={style.secondary_color} />
		    <Text style={styles.AmountDue}>{"= Total Amount Due                                      -$800.00"}</Text>
		    <Divider width={2} color={style.secondary_color} /> 
		    <Text style={styles.AmountDue}>{"= Total Account Balance                               -$800.00"}</Text>
		</RoundedRect>
	)
}

export function ContactFinancialAidOffice()
{
	return(
		<RoundedRect title="Contact Financial Aid Office">
			<PhoneNumberLink phoneNumber='540-375-2235' />
			<EmailLink emailAddress='finaid@roanoke.edu' />
		</RoundedRect>
	)
}

export function AcademicInformationPage()
{
	return(
		<ScrollView>
			<ContactFinancialAidOffice />
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