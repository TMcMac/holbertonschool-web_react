import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import CourseList from '../CourseList/CourseList';

describe('App', () => {
  it('renders an <App /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders a Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });

  it('renders a Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  it('renders a Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  it('renders a Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });

  it('checks that CourseList component is not displayed', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  it('checks absence of Login component and presence of Courselist component when isLoggedIn prop is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find('Login')).toHaveLength(0);
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });

  it('checks correct calling of logOut function and that function calls correct alert', () => {
    const events = {};
    window.addEventListener = jest.fn().mockImplementation((event, cb) => {
      events[event] = cb;
    });
    window.alert = jest.fn();

    const props = {
      isLoggedIn: true,
      logOut: jest.fn(),
    };

    const wrapper = mount(<App {...props} />);
    events.keydown({ ctrlKey: true, key: 'h' });
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
    expect(props.logOut).toHaveBeenCalled();
    window.alert.mockRestore();
  });
});