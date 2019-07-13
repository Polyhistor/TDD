import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
import Root from "Root";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and two buttons", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});

describe("the text area", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: { value: "new comment" }
    });
  });
  it("has a text area that users can type in", () => {
    // forcing the component to update itself since the react render function is asynchronous, thanks to Enzyme
    wrapped.update();
    // extracting out the prop value against what we've tricked JSdom to simulate
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("when form submitted, text area gets emptied", () => {
    wrapped.update();
    wrapped.find("form").simulate("submit");
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
