import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);

// test("renders without crashing", () => {
//   render(<App />);
// });

it("it displays text ", () => {
  const simulatedDom = rtl.render(<App />);
  // console.log(container.getByText("Soccer Players"));
  const h1 = simulatedDom.queryByText(/Soccer Players/);
  console.log(h1);
});
