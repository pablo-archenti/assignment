export const CountryTypes = `
  type Country {
    name: String!
    code: String!
  }

  extend type Query {
    countries: [Country!]!
  }
`;

export interface Country {
  name: string;
  code: string;
}