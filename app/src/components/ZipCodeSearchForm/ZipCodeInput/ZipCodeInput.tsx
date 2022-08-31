import { LabelStyled, InputStyled } from '../../styled/Form.styled';

type Props = {
  postCode: string;
  onChange: (value: string) => void;
};

const ZipCodeInput = ({ postCode, onChange }: Props): JSX.Element => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <LabelStyled htmlFor="postcode">Post Code: </LabelStyled>
      <InputStyled
        type="text"
        name="postcode"
        id="postcode"
        value={postCode}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default ZipCodeInput;
