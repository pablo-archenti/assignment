import { type Country } from './types';
import { countriesList } from './data';

export const CountryQuery = {
  countries: (): Country[] => countriesList
};
