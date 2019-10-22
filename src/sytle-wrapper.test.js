import Enzyme, { shallow, render, mount } from "enzyme"
import React from "react"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({
  adapter: new Adapter()
})

import StyleWrapper from "./sytle-wrapper"

describe("<StyleWrapper/>", () => {
  it("should render without color prop", function() {
    const wrapper = mount(<StyleWrapper />)
    expect(wrapper).toHaveLength(1)
  })

  it("should change color", function() {
    const wrapper = mount(<StyleWrapper color='red' />)
    expect(wrapper).toHaveLength(1)
  })
})
