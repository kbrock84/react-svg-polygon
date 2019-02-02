import "jest-dom/extend-expect";
import Poly from "./Poly";
import React from "react";

const originalConsoleError = console.error;

console.error = message => {
  if (/(Failed prop type.*`sides`)/.test(message)) {
    console.log(message);
    throw new Error("missing sides prop");
  }

  if (/(Failed prop type.*`r`)/.test(message)) {
    console.log(message);
    throw new Error("missing r prop");
  }

  originalConsoleError(message);
};

test("Should console.error when missing sides prop", () => {
  expect(() => <Poly r={10} />).toThrow("missing sides prop");
});

test("Should console.error for missing props", () => {
  expect(() => <Poly sides={10} />).toThrow("missing r prop");
});
