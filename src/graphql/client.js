import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://favorite-music-player.herokuapp.com/v1/graphql",
});

export default client;
