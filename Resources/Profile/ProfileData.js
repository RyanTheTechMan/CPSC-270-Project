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
    mealPlan: 20,
    mealPlanBalance: 6,
    moneyBalance: 16.03,
    printAllowance: 50,
    printBalance: 48.52,
}

export default ProfileData;