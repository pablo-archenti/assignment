import {
  getZipCode,
  ZipCodeResponse as ZipCodeApiResponse
} from '../../lib/apiClient';
import { type ZipCode } from './types';

type ZipCodeArgs = {
  countryCode: string;
  postCode: string;
};

type ZipCodeResponse = ZipCode | null;

const zipCodeApiResponseAdapter = (
  zipCodeResponse: ZipCodeApiResponse
): ZipCodeResponse => {
  if (!zipCodeResponse) return null;
  return {
    postCode: zipCodeResponse['post code'],
    country: {
      name: zipCodeResponse.country,
      code: zipCodeResponse['country abbreviation']
    },
    cities: zipCodeResponse.places.map((place) => ({
      name: place['place name'],
      state: place.state || null,
      longitude: place.longitude || null,
      latitude: place.latitude || null
    }))
  };
};

export const ZipCodeQuery = {
  zipCode: async (
    _: undefined,
    args: ZipCodeArgs
  ): Promise<ZipCodeResponse> => {
    const apiResponse: ZipCodeApiResponse = await getZipCode(
      args.countryCode,
      args.postCode
    );
    return zipCodeApiResponseAdapter(apiResponse);
  }
};
