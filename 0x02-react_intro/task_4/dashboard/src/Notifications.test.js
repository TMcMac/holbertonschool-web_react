import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications />', () => {
  it('Successfully renders <Notifications /> component', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).exists();
  });
  it('Successfully renders 3 list items in <Notifications /> component', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications li')).toHaveLength(3);
  });
  it('Successfully renders <p> with string in <Notifications /> component', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications p')).toHaveLength(1);
    expect(wrapper.find('.Notifications p').text()).toEqual('Here is the list of notifications')
  });
});
