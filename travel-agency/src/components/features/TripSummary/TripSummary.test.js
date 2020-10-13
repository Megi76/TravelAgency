import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe ('Component TripSummary', () => {
  // OK
  it ('generates correct link', () => {
    const expectedLink = '/trip/abc';

    const component = shallow(
      <TripSummary
        id='abc' image='' name='' cost='' days={1} tags={['tag1', 'tag2']} />);
    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  // OK
  it('has correct src and alt', () => {
    const expectedImg = 'image.jpg';
    const expectedAlt = 'alt';

    const component =shallow (
      <TripSummary id='' image={expectedImg} name={expectedAlt} cost='' days={1} tags={['tag1', 'tag2']} />);

    const renderedImg = component.find('img');
    expect(renderedImg.prop('src')).toEqual(expectedImg);
  });

  // OK
  it('render correct cost, days and name', () => {
    const expectedDays = 1;
    const expectedCost = '1000';
    const expectedName = 'name';

    const component = shallow(
      <TripSummary
        name={expectedName}
        cost={expectedCost}
        days={expectedDays}
      />
    );

    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details span').text()).toEqual(`${expectedDays} days`);
    expect(component.find('.details span').text()).toEqual(`from ${expectedDays}`);  });

  // OK
  it('throw error without required props', ()=> {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  // OK
  it('renders correct order for tags', ()=> {
    const expectedTags = ['tag1', 'tag2', 'tag3'];
    const component = shallow(
      <TripSummary
        tags={expectedTags}
      />
    );
    expect(component.find('.tags span').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedTags[2]);
  });

  // OK
  it('should not render tags div if props tags is false', ()=> {
    const expectedTags = [];

    const component = shallow(<TripSummary tags={expectedTags} id='' image='' name='' cost='' days={1}/>);

    expect(component.find('div tags').exists(expectedTags)).toBe(false);

  });
});
