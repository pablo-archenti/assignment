import React, { useState } from 'react';
import styled from 'styled-components';

import { ButtonStyled as Button } from '../styled/Form.styled';
import SelectCountry from './SelectCountry';
import ZipCodeInput from './ZipCodeInput';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px;
  min-height: 140px;
  .bt {
    text-align: right;
  }
`;

type Props = {
  countries: Country[];
  onSearch: (countryCode: string, postCode: string) => void;
  onCountriesSelect?: () => void;
};

const ZipCodeSearchForm = ({
  countries,
  onSearch,
  onCountriesSelect = () => {}
}: Props) => {
  const [countryCode, setCountryCode] = useState<string>('US');
  const [postCode, setPostCode] = useState<string>('');
  const [searchedPostCode, setSearchedPostCode] = useState<string>('');

  const handleCountrySelect = (countryCode: string) => {
    setCountryCode(countryCode);
  };

  const handlePostCodeChange = (postCode: string) => {
    setPostCode(postCode);
  };

  const handleCountryFocus = () => {
    onCountriesSelect();
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(countryCode, postCode);
    setSearchedPostCode(postCode);
  };

  return (
    <form onSubmit={handleSearch}>
      <Container>
        <SelectCountry
          selected={countryCode}
          countries={countries}
          onFocus={handleCountryFocus}
          onSelect={handleCountrySelect}
        />
        <ZipCodeInput postCode={postCode} onChange={handlePostCodeChange} />
        <div className="bt">
          <Button
            type="submit"
            disabled={!postCode || postCode === searchedPostCode}>
            Search
          </Button>
        </div>
      </Container>
    </form>
  );
};

export default ZipCodeSearchForm;
