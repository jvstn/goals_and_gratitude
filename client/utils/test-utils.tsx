import React, { ReactElement, ReactNode } from "react";
import { render } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { JsxElement } from "typescript";

interface IChildren {
  children: ReactNode;
}

const AllTheProviders: any = ({ children }: IChildren) => {
  return (
    <ChakraProvider>
      {children}
    </ChakraProvider>
  );
};

const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
