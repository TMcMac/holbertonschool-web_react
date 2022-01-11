import React from "react";
import { shallow } from "enzyme";
import App from "./App/App";


describe("App components", () => {
  it("renders the App without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
  })
})
