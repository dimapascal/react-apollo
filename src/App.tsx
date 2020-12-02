import React from "react";
import { DefaultRouter } from "./Router";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import { ApolloProvider } from "@apollo/client";
import { client } from "./Services/apolloClient";

function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <DefaultRouter />
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
