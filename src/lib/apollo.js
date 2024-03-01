import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://wp.holidaysinmalta.eu/graphql",
  cache: new InMemoryCache(),
});

export default client;
