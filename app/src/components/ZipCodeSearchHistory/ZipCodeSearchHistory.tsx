import { ButtonStyled } from '../styled/Form.styled';
import { ContainerTitle } from '../styled/Container.styled';

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
    <ContainerTitle>
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
    </ContainerTitle>
  );
};

export default ZipCodeSearchHistory;
