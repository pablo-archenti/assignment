import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      name
      code
    }
  }
`;

export const GET_ZIPCODE = gql`
  query GetZipCode($countryCode: String!, $postCode: String!, $limit: Int = 1) {
    zipCode(countryCode: $countryCode, postCode: $postCode) {
      postCode
      country {
        code
        name
      }
      cities(limit: $limit) {
        name
        state
      }
    }
  }
`;
