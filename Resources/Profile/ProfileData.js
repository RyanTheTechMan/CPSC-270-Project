import {Image} from "react-native";

const ProfileData = {
    firstName: "John",
    middleName: "Jacob",
    lastName: "Doe",
    email: "jdoe@mail.roanoke.edu",
    phone: "123-456-7890",
    id: "123456789",
    profileImage: Image.resolveAssetSource(require('./image.jpeg')).uri,
    fullName: function() {return this.firstName + " " + this.middleName + " " + this.lastName;},
    displayName: function() {return this.firstName + " " + this.lastName;},
    mailboxNumber: "1234",
    mailboxUnlockCode: "12-34-56",
    packageArrivedDate: new Date("2023-04-20 12:00:01"), // if not empty/null then a package has arrived
    onCampus: true,
    dormRoomLocation: "Trexler 123",
    hasParkingPermit: true,
    hasMealPlan: true,
    mealPlan: 20,
    mealPlanBalance: 6,
    moneyBalance: 16.03,
    printAllowance: 50,
    printBalance: 48.52,
    cumulativeGPA: 3.759,
    overallProgress: 0.42,
    totalUnits: 25.5 / 33.5,
    totalUnitsFromSchool: 21.5 / 33,
    terms: [
	{id: 1, title: "Fall 2020", grades: [
		{id: 1, title: "CPSC120", description: "A"},
		{id: 2, title: "STAT210", description: "A"},
		{id: 3, title: "HNRS110", description: "A-"},
		{id: 4, title: "HNRS111", description: "P"},
	]},
	{id: 2, title: "Spring 2021", grades: [
		{id: 1, title: "CPSC170", description: "B"},
		{id: 2, title: "CPSC170L", description: "Z"},
		{id: 3, title: "HNRS112", description: "P"},
		{id: 4, title: "HNRS120", description: "A-"},
		{id: 5, title: "HNRS270G", description: "A-"},
		{id: 6, title: "MATH131", description: "A-"},
	]},
	{id: 3, title: "Fall 2021", grades: [
		{id: 1, title: "CPSC250", description: "W"},
		{id: 2, title: "CPSC250L", description: "Z"},
		{id: 3, title: "CPSC361", description: "A-"},
		{id: 4, title: "HNRS113", description: "P"},
		{id: 5, title: "HNRS271", description: "A"},
		{id: 6, title: "LATN101", description: "A"},
	]},
	{id: 4, title: "Spring 2022", grades: [
		{id: 1, title: "DATA170", description: "A"},
		{id: 2, title: "HNRS114", description: "P"},
		{id: 3, title: "LATN102", description: "A-"},
		{id: 4, title: "MATH268", description: "P"},
		{id: 5, title: "STAT220", description: "A-"},
	]},
	{id: 5, title: "Fall 2022", grades: [
		{id: 1, title: "CPSC250", description: "A"},
		{id: 2, title: "CPSC250L", description: "Z"},
		{id: 3, title: "CPSC350", description: "B"},
		{id: 4, title: "CPSC362", description: "A"},
		{id: 5, title: "LATN201", description: "A-"},
	]},
	{id: 6, title: "Spring 2023", grades: [
		{id: 1, title: "CPSC270", description: ""},
		{id: 2, title: "CPSC370", description: ""},
		{id: 3, title: "CPSC464", description: ""},
		{id: 4, title: "HNRS260PS", description: ""},
		{id: 5, title: "INQ260AN", description: ""},
	]},
	{id: 7, title: "Fall 2023", grades: [
		{id: 1, title: "CPSC450", description: ""},
		{id: 2, title: "HHP160", description: ""},
		{id: 3, title: "INQ250CH", description: ""},
		{id: 4, title: "INQ250CHL", description: ""},
		{id: 5, title: "MATH201", description: ""},
	]},
	{id: 8, title: "Spring 2024", grades: [
		{id: 1, title: "CPSC470", description: ""},
		{id: 2, title: "HHP114", description: ""},
		{id: 3, title: "INQ300", description: ""},
		{id: 4, title: "MATH122", description: ""},
	]},
    ],
}

export default ProfileData;