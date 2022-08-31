import { useLazyQuery } from '@apollo/client';
import styled from 'styled-components';
import GlobalStyle from './globalStyle';

import { GET_COUNTRIES } from './api/queries';
import { type CountriesQuery } from './api/types';
import useSearchZipCode from './hooks/useSearchZipCode';

import ZipCodeSearchForm from './components/ZipCodeSearchForm';
import ZipCodeSearchResult from './components/ZipCodeSearchResult';
import ZipCodeSearchHistory from './components/ZipCodeSearchHistory';

const AppContainer = styled.div`
  display: flex;
  margin: 10px;
`;

function App() {
  const [getZipCode, { zipCode, loading: searching, history, clearHistory }] =
    useSearchZipCode();
  const [getCountries, { data: { countries = [] } = {} }] =
    useLazyQuery<CountriesQuery>(GET_COUNTRIES);

  const handleSearch = (countryCode: string, postCode: string) => {
    getZipCode({ variables: { countryCode, postCode } });
  };

  const handleClearHistory = () => {
    clearHistory();
  };

  const loadCountries = () => {
    getCountries();
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <div>
          <ZipCodeSearchForm
            countries={countries}
            onSearch={handleSearch}
            onCountriesSelect={loadCountries}
          />
          <ZipCodeSearchResult zipCode={zipCode} loading={searching} />
        </div>
        <div>
          <ZipCodeSearchHistory
            history={history}
            onClearHistory={handleClearHistory}
          />
        </div>
      </AppContainer>
    </>
  );
}

export default App;
