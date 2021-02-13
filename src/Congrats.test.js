import React from "react";
import { shallow } from "enzyme";
import Congrats from "./Congrats";
import { findByTestAttr, checkProps } from "./test/testutils";


const defaultProps = { success: false };

const setUp = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test("check if congrats component renders without errors", () => {
  const wrapper = setUp({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("renders no text when success is false", () => {
  const wrapper = setUp({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test("renders non-empty congrats message", () => {
  const wrapper = setUp({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message");
  expect(message.text().length).not.toBe("");
});

test("does not throw warning with expected props", () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
