import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen, debug } from '@testing-library/react-native'
import { DiningPage, RenderLocationMenu, handleLocationPress, RenderDiningLocationButton, RenderDay, RenderMeal, RenderMealItems, convertLocationToMenu } from './Resources/Menus';
import { freshensMenu, commonsMenu, cavernMenu, } from './Resources/Shared/diningData.js';
import { MailPage, RenderStudentAddress, RenderMailboxCode, studentInfoGroup } from './Resources/Pages/Mail.js';
import { data, LandingPage } from './Resources/Pages/Landing.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { App } from './App.js';
import {ProfileData} from './Resources/Profile/ProfileData';
import {Image} from "react-native";
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import styles from "./Resources/Shared/styles";
import NavBar from "./Resources/NavBar";




//DINING PAGE TESTS (Menus.js)

describe('<DiningPage />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<DiningPage />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('<RenderLocationMenu selectedLocation={selectedLocation} /> where selectedLocation = \'Freshens\'', () => {
    it('renders correctly', () => {
        const selectedLocation = 'Freshens';
        const tree = renderer.create(<RenderLocationMenu selectedLocation={selectedLocation} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('<RenderDiningLocationButton /> where selectedLocation = \'Cavern\'', () => {
    it('renders correctly for selected button', () => {
        const selectedLocation = 'Cavern';
        const tree = renderer.create(<RenderDiningLocationButton selectedLocation={selectedLocation} diningLocation='Cavern' handleLocationPress={handleLocationPress} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders correctly for unselected button', () => {
        const selectedLocation = 'Cavern';
        const tree = renderer.create(<RenderDiningLocationButton selectedLocation={selectedLocation} diningLocation='Commons' handleLocationPress={handleLocationPress} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('<RenderDay locationMenu = {freshensMenu}/> ', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<RenderDay locationMenu={freshensMenu} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('<RenderMeal dayMeals = {commonsMenu[1].meals}/> ', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<RenderMeal dayMeals={commonsMenu[1].meals} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('<RenderMealItems mealItems = {cavernMenu[2].meals[0].mealItems}/> ', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<RenderMealItems mealItems={cavernMenu[2].meals[0].mealItems} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

test('convertLocationToMenu converts Commons to commonsMenu', () => {
    expect(convertLocationToMenu('Commons')).toBe(commonsMenu);
});

describe('DiningPage', () => {
    it('displays Freshens menu on button press', () => {
        const { getByText, debug } = render(<DiningPage />);
        const freshensButton = getByText('Freshens');
        fireEvent.press(freshensButton);
        const tree = screen.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('DiningPage', () => {
    it('displays Commons menu on button press', () => {
        const { getByText, debug } = render(<DiningPage />);
        const commonsButton = getByText('Commons');
        fireEvent.press(commonsButton);
        const tree = screen.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('DiningPage', () => {
    it('displays Cavern menu on button press', () => {
        const { getByText, debug } = render(<DiningPage />);
        const cavernButton = getByText('Cavern');
        fireEvent.press(cavernButton);
        const tree = screen.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

//MAIL PAGE TESTS ./Pages/Mail.js
describe('RenderMailboxCode', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<RenderMailboxCode currentStudent={studentInfoGroup[1]} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('RenderStudentAddress', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<RenderStudentAddress currentStudent={studentInfoGroup[1]} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('MailPage', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<MailPage />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

/*test('render MailPage Component Correctly', () => {
    const { getByText } = render(<MailPage />);
    const mailBoxCodeButton = getByText('Mail Box Code');
    fireEvent.press(mailBoxCodeButton);
});*/


//APP TESTS

describe('App', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

//LANDING PAGE TESTS

/*describe('LandingPage', () => {
    it('displays Dining Options page correctly on button press', () => {
        const { getByText, debug } = render(<App />);
        const diningOptionsButton = getByText('Dining Options');
        fireEvent.press(diningOptionsButton);
        const tree = screen.toJSON();
        expect(tree).toMatchSnapshot();
    });
});*/


