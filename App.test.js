import React from 'react';
import renderer from 'react-test-renderer';
import { DiningPage, RenderLocationMenu, handleLocationPress, RenderDiningLocationButton, RenderDay, RenderMeal, RenderMealItems, convertLocationToMenu } from './Resources/Menus';
import { freshensMenu, commonsMenu, cavernMenu, } from './Resources/Shared/diningData.js';
import { MailPage, RenderStudentAddress, RenderMailboxCode, studentInfoGroup } from './Resources/Pages/Mail.js';
import { AcademicInformationPage, GPA, Grades, StudentProgress, CumulativeGPA, MajorGPA, TotalSchoolUnits, TotalUnits } from './Resources/Pages/AcademicInformation.js';
import { BankingInformation, ContactFinancialAidOffice, FinancialAidCounselor, FinancialInformationPage, SAPDetails, SAPStatus, SatisfactoryAcademicProgress, StudentFinance, TaxInformation, FinancialAid} from './Resources/Pages/FinancialInformation';
import { data } from './Resources/Pages/Landing.js';
import { render, fireEvent, screen, debug } from '@testing-library/react-native';
//import { DirectoryListItem } from './Resources/Shared/DirectoryList.js';




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

describe('TotalSchoolUnits', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<TotalSchoolUnits />).toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('displays student school units on button press', () => {
		const { getByText, debug } = render(<TotalSchoolUnits />);
		const RoundedRectButton = getByText('Total Units from this School');
		fireEvent.press(RoundedRectButton);
		const tree = screen.toJSON();
		expect(tree).toMatchSnapshot();
	 });	
});

describe('TotalUnits', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<TotalUnits />).toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('displays student total units on button press', () => {
		const { getByText, debug } = render(<TotalUnits />);
		const RoundedRectButton = getByText('Total Units');
		fireEvent.press(RoundedRectButton);
		const tree = screen.toJSON();
		expect(tree).toMatchSnapshot();
	 });	
});

describe('StudentProgress', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<StudentProgress />).toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('displays student progress on button press', () => {
		const { getByText, debug } = render(<StudentProgress />);
		const RoundedRectButton = getByText('My Progress');
		fireEvent.press(RoundedRectButton);
		const tree = screen.toJSON();
		expect(tree).toMatchSnapshot();
	 });	
});

describe('Grades', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<Grades />).toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('displays grades on button press', () => {
		const { getByText, debug } = render(<Grades />);
		const RoundedRectButton = getByText('Grades');
		fireEvent.press(RoundedRectButton);
		const tree = screen.toJSON();
		expect(tree).toMatchSnapshot();
	 });	
});

describe('MajorGPA', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<MajorGPA />).toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('displays gpa information on button press', () => {
		const { getByText, debug } = render(<MajorGPA />);
		const RoundedRectButton = getByText('Major GPA');
		fireEvent.press(RoundedRectButton);
		const tree = screen.toJSON();
		expect(tree).toMatchSnapshot();
	 });	
});

describe('CumulativeGPA', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<CumulativeGPA />).toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('displays gpa information on button press', () => {
		const { getByText, debug } = render(<CumulativeGPA />);
		const RoundedRectButton = getByText('Cumulative GPA');
		fireEvent.press(RoundedRectButton);
		const tree = screen.toJSON();
		expect(tree).toMatchSnapshot();
	 });	
});

describe('GPA', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<GPA />).toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('displays gpa information on button press', () => {
		const { getByText, debug } = render(<GPA />);
		const RoundedRectButton = getByText('GPA');
		fireEvent.press(RoundedRectButton);
		const tree = screen.toJSON();
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
	});
	it('displays banking information on button press', () => {
		const { getByText, debug } = render(<BankingInformation />);
		const RoundedRectButton = getByText('Banking Information');
		fireEvent.press(RoundedRectButton);
		const tree = screen.toJSON();
		expect(tree).toMatchSnapshot();
	 });	
})

describe('TaxInformation', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<TaxInformation />);
		expect(tree).toMatchSnapshot();
	});
	it('displays tax information on button press', () => {
		const { getByText, debug } = render(<TaxInformation />);
		const RoundedRectButton = getByText('Tax Information');
		fireEvent.press(RoundedRectButton);
		const tree = screen.toJSON();
		expect(tree).toMatchSnapshot();
	 });
})

describe('FinancialAidCounselor', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<FinancialAidCounselor />);
		expect(tree).toMatchSnapshot();
	});
	it('displays financial aid counselor details on button press', () => {
		const { getByText, debug } = render(<FinancialAidCounselor />);
		const RoundedRectButton = getByText('Financial Aid Counselor');
		fireEvent.press(RoundedRectButton);
		const tree = screen.toJSON();
		expect(tree).toMatchSnapshot();
	 });
})

describe('SAPDetails', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<SAPDetails />);
		expect(tree).toMatchSnapshot();
	});
	it('displays satisfactory academic progress details on button press', () => {
		const { getByText, debug } = render(<SAPDetails />);
		const RoundedRectButton = getByText('SAP Details');
		fireEvent.press(RoundedRectButton);
		const tree = screen.toJSON();
		expect(tree).toMatchSnapshot();
	 });
})

describe('SAPStatus', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<SAPStatus />);
		expect(tree).toMatchSnapshot();
	});
	it('displays satisfactory academic progress status on button press', () => {
		const { getByText, debug } = render(<SAPStatus />);
		const RoundedRectButton = getByText('SAP Status');
		fireEvent.press(RoundedRectButton);
		const tree = screen.toJSON();
		expect(tree).toMatchSnapshot();
	 });
})

describe('SatisfactoryAcademicProgress', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<SatisfactoryAcademicProgress />);
		expect(tree).toMatchSnapshot();
	});
	it('displays satisfactory academic progress on button press', () => {
		const { getByText, debug } = render(<SatisfactoryAcademicProgress />);
		const RoundedRectButton = getByText('Satisfactory Academic Progress');
		fireEvent.press(RoundedRectButton);
		const tree = screen.toJSON();
		expect(tree).toMatchSnapshot();
	 });
})

describe('FinancialAid', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<FinancialAid />);
		expect(tree).toMatchSnapshot();
	});
	it('displays financial aid info on button press', () => {
		const { getByText, debug } = render(<FinancialAid />);
		const RoundedRectButton = getByText('Financial Aid');
		fireEvent.press(RoundedRectButton);
		const tree = screen.toJSON();
		expect(tree).toMatchSnapshot();
	 });
})

describe('StudentFinance', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<StudentFinance />);
		expect(tree).toMatchSnapshot();
	});
	it('displays account overview on button press', () => {
		const { getByText, debug } = render(<StudentFinance />);
		const RoundedRectButton = getByText('Account Overview');
		fireEvent.press(RoundedRectButton);
		const tree = screen.toJSON();
		expect(tree).toMatchSnapshot();
	 });
})

describe('ContactFinancialAidOffice', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<ContactFinancialAidOffice />).toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('displays contact info for Financial Aid Office on button press', () => {
		const { getByText, debug } = render(<ContactFinancialAidOffice />);
		const RoundedRectButton = getByText('Contact Financial Aid Office');
		fireEvent.press(RoundedRectButton);
		const tree = screen.toJSON();
		expect(tree).toMatchSnapshot();
	 });
})

describe('FinancialInformationPage', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<FinancialInformationPage />).toJSON();
		expect(tree).toMatchSnapshot();
	});
})

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


