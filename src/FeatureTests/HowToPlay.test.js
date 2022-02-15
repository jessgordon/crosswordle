import setupTests from "./setupTests";
import React from "react";
import { shallow } from "enzyme";
import HowToPlay from "../components/HowToPlay";

describe("HowToPlay", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<HowToPlay key={"howToPlay"} />);
  });

  test("opens instructions in a modal when how to play button is clicked", () => {
    expect(wrapper.find(".modal").exists()).toEqual(false);
    wrapper.find("#how-to-play-btn").simulate("click");
    expect(wrapper.find(".modal").exists()).toEqual(true);
  });
});
