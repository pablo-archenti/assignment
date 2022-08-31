export {};

declare global {
  export interface Country {
    name: string;
    code: string;
  }

  export interface ZipCode {
    postCode: string;
    country: Country;
    state: string;
    city: string;
  }
}
