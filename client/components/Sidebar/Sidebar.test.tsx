import React from "react";
import { render } from "../../utils/test-utils";
import Sidebar from "./";

describe("Sidebar", () => {
  it("should render", () => {
    const { getByText } = render(<Sidebar> </Sidebar>);

    expect(getByText("Goals")).toBeInTheDocument();
  });
});
