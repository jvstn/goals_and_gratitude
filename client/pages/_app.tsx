import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import StateProvider from "../context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </StateProvider>
  );
}
export default MyApp;
