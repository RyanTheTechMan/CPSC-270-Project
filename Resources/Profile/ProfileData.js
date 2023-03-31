const ProfileData = {
    firstName: "John",
    middleName: "Jacob",
    lastName: "Doe",
    email: "jdoe@mail.roanoke.edu",
    phone: "123-456-7890",
    id: "123456789",
    profileImage: 'https://fakeface.rest/thumb/view?gender=male&minimum_age=18&maximum_age=40',
    fullName: function() {return this.firstName + " " + this.middleName + " " + this.lastName;},
    displayName: function() {return this.firstName + " " + this.lastName;},
    mailboxNumber: "1234",
    mailboxUnlockCode: "12-34-56",
    onCampus: true,
    dormRoomLocation: "Trexler 123",
    hasParkingPermit: true,
    hasMealPlan: true,
    mealPlan: "20",
    mealPlanBalance: "16",
    moneyBalance: "16.03",
    printAllowance: "50",
    printBalance: "48.52",
    grades: 
    {id: 1, title: "Fall 2020", description: [
    	{"CJUS213" : "A-"},
	{"CPSC120" : "A"},
	{"STAT210" : "A"}, 
	{"HNRS110" : "A-"},
	{"HNRS111" : "P"}
    	],
     "Spring 2021" : [
	{"CPSC170" : "B"},
	{"CPSC170L" : "Z"},
	{"HNRS112" : "P"},
	{"HNRS120" : "A-"},
	{"HNRS270-G" : "A-"},
	{"MATH131" : "A-"}
	],
	"Fall 2021" : [
	{"CPSC250" : "W"},
	{"CPSC250L" : "Z"},
	{"CPSC361" : "A-"},
	{"HNRS113" : "P"},
	{"HNRS271" : "A"},
	{"LATN101" : "A"}
	],
	"Spring 2022" : [
	{"DATA170" : "A"},
	{"HNRS114" : "P"},
	{"LATN102" : "A-"},
	{"MATH268" : "P"},
	{"STAT220" : "A-"}
	],
	"Fall 2022" : [
	{"CPSC250" : "A"},
	{"CPSC250L" : "Z"},
	{"CPSC350" : "B"},
	{"CPSC362" : "A"},
	{"LATN201" : "A-"}
	]
    }
}

export default ProfileData;