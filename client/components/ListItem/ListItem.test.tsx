import { List } from "@chakra-ui/layout";
import React from "react";
import { render } from "../../utils/test-utils";
import ListItem from "./";

describe("ListItem", () => {
  it("it should have gratitude placeholder", () => {
    const { getByPlaceholderText } = render(
      <List>
        <ListItem type="grats" />
      </List>
    );

    expect(getByPlaceholderText("I am thankful for...")).toBeInTheDocument();
  });

  it("it should have goal placeholder", () => {
    const { getByPlaceholderText } = render(
      <List>
        <ListItem type="goals" />
      </List>
    );

    expect(getByPlaceholderText("I am focused on...")).toBeInTheDocument();
  });

  it('should display goal data when passed to it', () => {
    const { getByText } = render(
      <List>
        <ListItem type="goals" data={{ text: "Becoming my best self." }} />
      </List>
    );

    expect(getByText("I am focused on becoming my best self.")).toBeInTheDocument();
  });

  it('should display gratitude data when passed to it', () => {
    const { getByText } = render(
      <List>
        <ListItem type="grats" data={{ text: "working at a place I love." }} />
      </List>
    );

    expect(getByText("I am thankful for working at a place I love.")).toBeInTheDocument();
  });
  
});
