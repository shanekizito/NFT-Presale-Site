 


import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";
  
  const client = new ApolloClient({
    uri: 'https://api.thegraph.com/subgraphs/name/amxx/eip721-subgraph',
    cache: new InMemoryCache()
  });


const ID=0xd387a6e4e84a6c86bd90c158c6028a58cc8ac459;
const no=ID.toString();
console.log(ID);



const allNFTS = gql`
      query Accounts{
        account(id:${"ID"}){
    id
    tokens{
      id
    }
  }
      }

`


  
const demo= client
  .query({
    query:allNFTS
  })
  .then
  ( result =>{try{
    console.log(result)
  }

  catch(e){console.log(e)}})
  
  



                  
  var timestamp =1547493309;
  var date = new Date(timestamp * 1000);
  console.log(date)




  