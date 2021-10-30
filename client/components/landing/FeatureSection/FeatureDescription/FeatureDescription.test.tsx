import Icon from "@chakra-ui/icon";
import React from "react";
import { FcAssistant } from "react-icons/fc";
import { render } from "../../../../utils/test-utils";
import FeatureDescription from "./";

describe("FeatureDescription", () => {
  it("should render", () => {
    const { getByText } = render(
      <FeatureDescription
        icon={<Icon as={FcAssistant} w={10} h={10} />}
        title={"Track Gratitude"}
        text={
          "Track the things you're grateful to keep yourself focused on the positive"
        }
      />
    );

    expect(getByText("Track Gratitude")).toBeInTheDocument();
  });
});
