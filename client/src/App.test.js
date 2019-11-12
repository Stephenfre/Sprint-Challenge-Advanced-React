import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import Navigation from "./components/Navigation";

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);

// test("renders without crashing", () => {
//   render(<App />);
// });

// it("it displays text ", () => {
//   const DomTest = rtl.render(<App />);
//   // console.log(container.getByText("Soccer Players"));
//   const h1 = DomTest.queryByText(/Soccer Players/);
//   console.log(h1);
// });

describe("App", () => {
  it("has a element with the text Soccer Player,", () => {
    const DomTest = rtl.render(<App />);
    const SprintTest = DomTest.getByText(/Soccer Player/i);
    expect(SprintTest).toBeInTheDocument();
    console.log(SprintTest);
  });
});

describe("App", () => {
  it("has a element with the text Soccer Player,", () => {
    const DomTest = rtl.render(<App />);
    const SprintTest2 = DomTest.getByText(/Stephen/i);
    expect(SprintTest2).toBeInTheDocument();
    console.log(SprintTest2);
  });
});
