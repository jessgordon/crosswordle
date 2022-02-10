import setupTests from "./setupTests";
import React from "react";
import { shallow } from "enzyme";
import LetterBucket from "../LetterBucket";

describe("LetterBucket", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LetterBucket answer={'FIRMSIDIOMLASSOCHEEKHORSY'}/>);
  });

  test("returns letter components in a randomised order", () => {
    expect(wrapper.find('.letterBucket').html()).not.toBe("<div class=\"letterBucket\"><div class=\"randomLetter\" id=\"letter-0\">F</div><div class=\"randomLetter\" id=\"letter-1\">I</div><div class=\"randomLetter\" id=\"letter-2\">R</div><div class=\"randomLetter\" id=\"letter-3\">M</div><div class=\"randomLetter\" id=\"letter-4\">S</div><div class=\"randomLetter\" id=\"letter-5\">I</div><div class=\"randomLetter\" id=\"letter-6\">D</div><div class=\"randomLetter\" id=\"letter-7\">I</div><div class=\"randomLetter\" id=\"letter-8\">O</div><div class=\"randomLetter\" id=\"letter-9\">M</div><div class=\"randomLetter\" id=\"letter-10\">L</div><div class=\"randomLetter\" id=\"letter-11\">A</div><div class=\"randomLetter\" id=\"letter-12\">S</div><div class=\"randomLetter\" id=\"letter-13\">S</div><div class=\"randomLetter\" id=\"letter-14\">O</div><div class=\"randomLetter\" id=\"letter-15\">C</div><div class=\"randomLetter\" id=\"letter-16\">H</div><div class=\"randomLetter\" id=\"letter-17\">E</div><div class=\"randomLetter\" id=\"letter-18\">E</div><div class=\"randomLetter\" id=\"letter-19\">K</div><div class=\"randomLetter\" id=\"letter-20\">H</div><div class=\"randomLetter\" id=\"letter-21\">O</div><div class=\"randomLetter\" id=\"letter-22\">R</div><div class=\"randomLetter\" id=\"letter-23\">S</div><div class=\"randomLetter\" id=\"letter-24\">Y</div></div>")
  });
});

 