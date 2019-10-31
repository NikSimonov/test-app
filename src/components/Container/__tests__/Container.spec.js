import React from "react";
import { mount } from "enzyme";
import Container from "../Container";

jest.useFakeTimers();

describe("<Container />", () => {
  it("renders", () => {
    mount(<Container />);
  });

  it("has proper row count", () => {
    const wrapper = mount(<Container />);

    expect(wrapper.find("div.row")).toHaveLength(50);
  });

  it("ticks", () => {
    const wrapper = mount(<Container />);

    expect(setInterval).toHaveBeenCalled();
  });
});
