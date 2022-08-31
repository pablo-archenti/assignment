import { type Country } from '../country/types';
import { type City } from '../city/types';

export const ZipCodeTypes = `
  type ZipCode {
    postCode: String!
    country: Country!
    cities(limit: Int): [City!]!
  }

  extend type Query {
    zipCode(countryCode: String!, postCode: String!): ZipCode
  }
`;

export interface ZipCode {
  postCode: string;
  country: Country;
  cities: City[];
}
