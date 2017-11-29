import { makeExecutableSchema } from "graphql-tools";

const users: any[] = [
  {
    id: 1,
    name: "John",
    email: "john@email.com"
  },
  {
    id: 2,
    name: "Dany",
    email: "damy@email.com"
  }
];

const typeDefs = `
    type User {
        id:ID!,
        name:string!,
        email:string!
    }

    type Query {
        allUsers:[User!]!
    }
`;

const resolvers = {
  Query: {
    allUsers: () => users
  }
};

export default makeExecutableSchema({ typeDefs, resolvers });