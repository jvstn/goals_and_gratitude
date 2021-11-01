import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import StateProvider from "../context";
import axios from "axios";

axios.defaults.baseURL = process.env.BASE_URL;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateProvider>
      <ChakraProvider >
        <Component {...pageProps} />
      </ChakraProvider>
    </StateProvider>
  );
}
export default MyApp;
