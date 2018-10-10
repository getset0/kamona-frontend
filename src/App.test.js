import React from "react";
import App from "./App";
import { mount } from "enzyme";

it("renders App without crashing", () => {
  mount(<App />);
});
