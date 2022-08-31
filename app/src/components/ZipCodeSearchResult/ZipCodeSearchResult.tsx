import styled from 'styled-components';

const Containter = styled.div`
  margin: 15px;
  .title {
    font-weight: bold;
  }
  li {
    margin: 5px;
  }
`;

type Props = {
  zipCode: { city: string; state: string } | null | undefined;
  loading: boolean;
};

const ZipCodeSearchResult = ({
  zipCode,
  loading
}: Props): JSX.Element | null => {
  if (loading) return <div>Loading...</div>;
  if (zipCode === undefined) return null;
  if (zipCode === null) return <div>Not Found!</div>;

  return (
    <Containter>
      <span className="title">Result:</span>
      <ul>
        <li>City: {zipCode.city}</li>
        <li>State: {zipCode.state}</li>
      </ul>
    </Containter>
  );
};

export default ZipCodeSearchResult;
