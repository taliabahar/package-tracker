import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TestRenderer from "react-test-renderer";
// import { App } from "./App";
import { Package } from "./Package";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("the app should initialize with one empty package form", () => {
  const component = TestRenderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("the app should initialize with the add package button", () => {
  const component = TestRenderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

//TESTS:
// remove removes right one
// add packages button adds package
