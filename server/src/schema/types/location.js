const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} = require("graphql");

const LocationType = new GraphQLObjectType({
  name: "LocationType",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    image: { type: GraphQLString },
    hostels: { type: new GraphQLList(GraphQLID) },
  }),
});

module.exports = LocationType;
