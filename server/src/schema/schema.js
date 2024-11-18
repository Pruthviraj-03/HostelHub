const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = require("graphql");
const LocationType = require("./types/location");
const HostelType = require("./types/hostel");
const Locations = require("../models/Location");
const Hostels = require("../models/Hostel");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    locations: {
      type: new GraphQLList(LocationType),
      resolve: async () => {
        return await Locations.find();
      },
    },
    locationWiseHostel: {
      type: new GraphQLList(HostelType),
      args: { locationId: { type: GraphQLID } },
      resolve: async (_, { locationId }) => {
        if (!locationId) {
          throw new Error("Invalid locationId format");
        }
        try {
          const location = await Locations.findById(locationId).populate(
            "hostels"
          );
          if (!location) {
            throw new Error("Location not found");
          }
          return location.hostels;
        } catch (error) {
          throw new Error("Error fetching location or hostels");
        }
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
