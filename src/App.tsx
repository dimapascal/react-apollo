import React from "react";
import { DefaultRouter } from "./Router";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <DefaultRouter />
    </ChakraProvider>
  );
}

export default App;
