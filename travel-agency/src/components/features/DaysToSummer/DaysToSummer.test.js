import React from 'react';
import DaysToSummer from './DaysToSummer';
import { shallow } from 'enzyme';

const select = {
  title: '.title',
};

const mockProps = {
  title: 'days to summer',
};

describe('Component DaysToSummer', () => {
  it('should be render correctly', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });

  it('should render heading correctly', () => {
    const component = shallow(<DaysToSummer />);
    expect(component.exists(select.title)).toEqual(true);
  });
});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if (args.length) {
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now() {
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtDate = (date, expectedDescription) => {
  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(`${date}T00:00:00.000Z`);

    const component = shallow(<DaysToSummer {...mockProps}/>);
    const renderedDays = component.find(select.title).text();
    expect(renderedDays).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mocked Date', () => {
  checkDescriptionAtDate('2020-09-30', '264 days to summer');
  checkDescriptionAtDate('2020-11-21', '212 days to summer');
  checkDescriptionAtDate('2021-02-11', '130 days to summer');
});
