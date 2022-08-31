export interface CountryType {
  name: string;
  code: string;
}

interface ZipCodeType {
  postCode: string;
  country: CountryType;
  cities: {
    name: string;
    state: string;
  }[];
}

export interface CountriesQuery {
  countries: CountryType[];
}

export interface ZipCodeVars {
  countryCode: string;
  postCode: string;
  limit?: number;
}

export type ZipCodeQuery = {
  zipCode: ZipCodeType | null;
};
