import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App />', () => {
  it('Successfully renders App-header in <App /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).matchesElement(<header className="App-header"><h1>School dashboard</h1></header>).to.equal(true);
  });
  it('Successfully renders App-body in <App /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).matchesElement(<div className="App-body"></div>).to.equal(true);
  });
  it('Successfully renders App-footer in <App /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).matchesElement(<footer className="App-footer"></footer>).to.equal(true);
  });
});
