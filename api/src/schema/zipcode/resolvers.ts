import { type City } from '../city/types';
import { type ZipCode } from './types';

export const ZipCodeResolvers = {
  cities: async (
    zipCode: ZipCode,
    { limit }: { limit: number | undefined }
  ): Promise<City[]> => {
    return zipCode.cities.slice(0, limit);
  }
};
