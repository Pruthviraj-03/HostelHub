const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");

const HostelType = new GraphQLObjectType({
  name: "HostelType",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    image: { type: GraphQLString },
  }),
});

module.exports = HostelType;
