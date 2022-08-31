import { ButtonStyled as Button } from '../styled/Form.styled';
import { Container, Title } from '../styled/Container.styled';

type Props = {
  history: ZipCode[];
  onClearHistory: () => void;
};

const ZipCodeSearchHistory = ({
  history,
  onClearHistory
}: Props): JSX.Element | null => {
  if (!history.length) return null;

  return (
    <Container>
      <div>
        <Title>Last searches:</Title>
        <ul>
          {history.map(({ postCode, country, state, city }, index) => (
            <li key={index}>
              PC {postCode}: {city} {state && `, ${state}`}{' '}
              {country && `, ${country.name}`}
            </li>
          ))}
        </ul>
      </div>
      <div className="bt">
        <Button onClick={onClearHistory}>Clear Search History</Button>
      </div>
    </Container>
  );
};

export default ZipCodeSearchHistory;
