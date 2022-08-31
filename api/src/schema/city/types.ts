export const CityTypes = `
  type City {
    name: String!
    state: String
    longitude: String
    latitude: String
  }
`;

export interface City {
  name: string;
  state: string | null;
  longitude: string | null;
  latitude: string | null;
}
