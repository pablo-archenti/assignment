import { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';

import { GET_ZIPCODE } from '../api/queries';
import { type ZipCodeQuery, type ZipCodeVars } from '../api/types';

const transformResponse = ({ zipCode }: ZipCodeQuery): ZipCode | null => {
  if (!zipCode) return null;
  return {
    postCode: zipCode.postCode,
    country: zipCode.country,
    city: zipCode.cities[0].name,
    state: zipCode.cities[0].state
  };
};

const useSearchZipCode = (historyLength = 5) => {
  const [zipCode, setZipCode] = useState<ZipCode | null | undefined>(undefined);
  const [history, setHistory] = useState<ZipCode[]>([]);
  const [getZipCode, { loading, data }] = useLazyQuery<
    ZipCodeQuery,
    ZipCodeVars
  >(GET_ZIPCODE);

  const clearHistory = () => {
    setHistory([]);
  };

  useEffect(() => {
    if (data) {
      setZipCode(transformResponse(data));
    }
  }, [data]);

  useEffect(() => {
    if (zipCode) {
      setHistory((history) => [zipCode, ...history].slice(0, historyLength));
    }
  }, [historyLength, zipCode]);

  return [getZipCode, { zipCode, loading, history, clearHistory }] as const;
};

export default useSearchZipCode;
