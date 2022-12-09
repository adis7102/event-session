import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "../index";

import { mount } from "enzyme";

it("should render Navbar correctly", () => {
  const wrapper = mount(
    <Router>
      <Navbar />
    </Router>
  );

  expect(wrapper).toMatchSnapshot();
});
