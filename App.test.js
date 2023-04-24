import React from 'react';
import renderer from 'react-test-renderer';
import { DiningPage, RenderLocationMenu, handleLocationPress, RenderDiningLocationButton, RenderDay, RenderMeal, RenderMealItems, convertLocationToMenu } from './Resources/Menus';
import { freshensMenu, commonsMenu, cavernMenu, } from './Resources/Shared/diningData.js';
import { MailPage, RenderStudentAddress, RenderMailboxCode, studentInfoGroup } from './Resources/Pages/Mail.js';
import { AcademicInformationPage, GPA, Grades, StudentProgress } from './Resources/Pages/AcademicInformation.js';
import { BankingInformation, ContactFinancialAidOffice, FinancialAidCounselor, FinancialInformationPage, SAPDetails, SAPStatus, SatisfactoryAcademicProgress, StudentFinance, TaxInformation, FinancialAid } from './Resources/Pages/FinancialInformation';
import { data } from './Resources/Pages/Landing.js';
import { render, fireEvent, screen, debug } from '@testing-library/react-native';
import { App } from './App';
import NavBar from './Resources/NavBar';
import ShallowRenderer from 'react-shallow-renderer';




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

//ACADEMIC INFORMATION PAGE TESTS ./Pages/AcademicInformation.js

describe('StudentProgress', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<StudentProgress />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe('Grades', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<Grades />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe('GPA', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<GPA />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe('AcademicInformationPage', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<AcademicInformationPage />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});

//FINANCIAL INFORMATION PAGE TESTS ./Pages/AcademicInformation.js

describe('BankingInformation', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<BankingInformation />);
		expect(tree).toMatchSnapshot();
	})
})

describe('TaxInformation', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<TaxInformation />);
		expect(tree).toMatchSnapshot();
	})
})

describe('FinancialAidCounselor', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<FinancialAidCounselor />);
		expect(tree).toMatchSnapshot();
	})
})

describe('SAPDetails', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<SAPDetails />);
		expect(tree).toMatchSnapshot();
	})
})

describe('SAPStatus', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<SAPStatus />);
		expect(tree).toMatchSnapshot();
	})
})

describe('SatisfactoryAcademicProgress', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<SatisfactoryAcademicProgress />);
		expect(tree).toMatchSnapshot();
	})
})

describe('FinancialAid', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<FinancialAid />);
		expect(tree).toMatchSnapshot();
	})
})

describe('StudentFinance', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<StudentFinance />);
		expect(tree).toMatchSnapshot();
	})
})

describe('ContactFinancialAidOffice', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<ContactFinancialAidOffice />).toJSON();
		expect(tree).toMatchSnapshot();
	})
})

describe('FinancialInformationPage', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<FinancialInformationPage />).toJSON();
		expect(tree).toMatchSnapshot();
	})
})

//Testing starting at APP

describe('App', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<App />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe('App', () => {
	it('navigates to DiningPage then to Commons menu (two buttons pressed)', () => {
		const { getByText, debug } = render(<App />);
		const diningPageButton = getByText('Dining Options');
		fireEvent.press(diningPageButton);
		const commonsButton = getByText('Commons');
		fireEvent.press(commonsButton);
		const tree = screen.toJSON();
		expect(tree).toMatchSnapshot();
	});
});


//DirectoryLists TESTS ./Pages/Landing.js .
/*describe('Press Dining Options', () => {
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


