import { LabelStyled, SelectStyled } from '../../styled/Form.styled';

const defaultCountry: Country = {
  name: 'United States',
  code: 'US'
};

type Props = {
  selected: string;
  countries: Country[];
  onFocus: () => void;
  onSelect: (countryCode: string) => void;
};

const SelectCountry = ({
  selected,
  countries,
  onFocus,
  onSelect
}: Props): JSX.Element => {
  const handleCountryFocus = () => {
    onFocus();
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const countryCode = e.target.value;
    onSelect(countryCode);
  };

  return (
    <div>
      <LabelStyled htmlFor="countries">Countries: </LabelStyled>
      <SelectStyled
        name="countries"
        id="countries"
        onChange={handleOnChange}
        onFocus={handleCountryFocus}
        value={selected}>
        {countries.length ? (
          countries.map((country) => (
            <option key={country.name} value={country.code}>
              {country.name}
            </option>
          ))
        ) : (
          <option value={defaultCountry.code}>{defaultCountry.name}</option>
        )}
      </SelectStyled>
    </div>
  );
};

export default SelectCountry;
