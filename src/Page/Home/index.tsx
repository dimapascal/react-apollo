import { gql, useQuery } from "@apollo/client";
import { Box, Container } from "@chakra-ui/react";

const HELLO_QUERY = gql`
  {
    hello
  }
`;

function HomePage() {
  const { data } = useQuery(HELLO_QUERY);

  return (
    <Container maxW="xl">
      <Box>Home page</Box>
      <Box as="pre">{JSON.stringify(data, null, 2)}</Box>
    </Container>
  );
}

export default HomePage;
