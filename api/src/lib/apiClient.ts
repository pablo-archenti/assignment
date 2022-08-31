import fetch, { Response } from 'node-fetch';

const BASE_URL = process.env.ZIPPOPOTAM_BASE_URL ?? 'https://api.zippopotam.us';

export class HttpError extends Error {
  status: number;

  constructor(message: string, status = 500) {
    super(message);
    Object.setPrototypeOf(this, HttpError.prototype);
    this.status = status;
  }
}

interface ZipCode {
  'post code': string;
  country: string;
  'country abbreviation': string;
  places: [
    {
      'place name': string;
      longitude: string;
      state: string;
      latitude: string;
    }
  ];
}

export type ZipCodeResponse = ZipCode | null;

const fetchData = async <T>(url: string): Promise<T> => {
  const response: Response = await fetch(url);
  if (!response.ok) {
    throw new HttpError(response.statusText, response.status);
  }
  return response.json() as Promise<T>;
};

export const getZipCode = async (
  countryCode: string,
  zipCode: string
): Promise<ZipCodeResponse> => {
  try {
    return await fetchData<ZipCode>(`${BASE_URL}/${countryCode}/${zipCode}`);
  } catch (error) {
    if (error instanceof HttpError && error.status === 404) return null;
    throw error;
  }
};
