import React from 'react'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://gateway.thegraph.com/api/[api-key]/subgraphs/id/0x7859821024e633c5dc8a4fcf86fc52e7720ce525-0',
  cache: new InMemoryCache()
});


client
  .query({
    query: gql`
      {
  accounts(first: 5) {
    id
    asERC721 {
      id
    }
    ERC721tokens {
      id
    }
    ERC721operatorOwner {
      id
    }
  }
  erc721Contracts(first: 5) {
    id
    asAccount {
      id
    }
    supportsMetadata
    name
  }
}

    `
  })
  .then(result => console.log(result));












const Home = () => {
    return (
        <div>
            
        </div>
    )
}

export default Home
