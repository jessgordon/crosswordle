import setupTests from "./setupTests";
import React from "react";
import { shallow } from "enzyme";
import Letter from "../Letter";

describe("Letter", () => {
  test("returns a letter in a div", () => {
    let wrapper = shallow(<Letter key={"letter-0"} letter={"F"} index={0} />);
    expect(wrapper.find("#letter-0").text()).toBe("F")
  });
});
