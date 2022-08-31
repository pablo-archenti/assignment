import styled from 'styled-components';
import { ButtonStyled } from '../styled/Form.styled';

const Container = styled.div`
  margin: 15px;
  .bt {
    text-align: right;
  }
`;

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
        <span className="title">Last searches:</span>
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
        <ButtonStyled onClick={onClearHistory}>
          Clear Search History
        </ButtonStyled>
      </div>
    </Container>
  );
};

export default ZipCodeSearchHistory;
