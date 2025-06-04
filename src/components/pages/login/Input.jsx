import styled from "styled-components";
import { theme } from "../../../theme";

function Input({ value, onChange, placeholder, required, Icon }) {
  return (
    <InputWrapper>
      {Icon}
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </InputWrapper>
  );
}

export default Input;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: "Open Sans", sans-serif;
  background-color: ${theme.colors.background_white};
  font-size: ${theme.fonts.P0};
  border-radius: ${theme.borderRadius.round};
  font-weight: ${theme.weights.regular};
  padding: 18px 24px;

  input {
    flex: 1;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: ${theme.fonts.P0};
    color: ${theme.colors.dark};
    //width:100%;
    //display: flex;
  }

  &::placeholder {
    color: ${theme.colors.greyLight};
  }
`;
