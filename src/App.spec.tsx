import { shallow } from "enzyme";
import React from "react";

import App from "./App";

describe("the Actor component", () => {
    it("renders", () => {
        const wrapper = shallow(<App></App>);

        expect(wrapper).not.toBeNull();
        expect(wrapper).toMatchSnapshot();
    });
});
