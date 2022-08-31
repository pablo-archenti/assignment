import { ZipCodeResolvers } from './zipcode/resolvers';
import { gql } from 'apollo-server';
import { CountryTypes, CountryQuery } from './country';
import { ZipCodeTypes, ZipCodeQuery } from './zipcode';
import { CityTypes } from './city';

export const typeDefs = gql`
  type Query
  ${CountryTypes}
  ${CityTypes}
  ${ZipCodeTypes}
`;

export const resolvers = {
  Query: {
    ...CountryQuery,
    ...ZipCodeQuery
  },
  ZipCode: ZipCodeResolvers
};
