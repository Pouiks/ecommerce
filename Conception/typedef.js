const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Query{
        getUser(mail: String!): User
        
    }

    type User{
        id: ID!
        name: String
        firstname: String
        role: String
        mail: String!
        adress: String!
        shippingAdress: String!
        facturationAdress: String!
        city: String!
        country: String!
        zipCode: String!
        dataConservation: Boolean
        validatedShippindCart: Int
    }
    type Product_item{
        id: ID!
        reference: String!
        name: String!
        category: String!
        type: String!
        quantity: Int
        image: String
        priceHT: Float!
        reduction: Int
        color: [Color]
        size: [Size]
        brand: String
        supplier: String
    }

    type Comment {
        content: String!
        notation: Int!
    }

    type Category{
        name: String!
        color: String
    }

    type Color{
        name: String!
        hex: String!
    }

    type Size{
        name: String!
    }

    type ShoppingCart{
        productList: [Product_item]
    }

    type Order{
        name:  String!
        orderList: [Product_item!]
        isCompleted: Boolean!
    }

    type OrderHistory{
        history: [Order!]
    }
`;


const resolvers = {
    Query: {
      
    },
  };

  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});