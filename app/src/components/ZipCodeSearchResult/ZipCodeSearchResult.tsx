import { Container, Title, List } from '../styled/Container.styled';

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
    <Container>
      <Title>Result:</Title>
      <List>
        <li>City: {zipCode.city}</li>
        <li>State: {zipCode.state}</li>
      </List>
    </Container>
  );
};

export default ZipCodeSearchResult;
