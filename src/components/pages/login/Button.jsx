import styled from "styled-components";
import { theme } from "../../../theme";

function Button({ label, Icon }) {
  return (
    <ButtonWrapper>
      {label}
      {Icon}
    </ButtonWrapper>
  );
}

export default Button;

const ButtonWrapper = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primary};
  border-radius: ${theme.borderRadius.round};
  font-weight: ${theme.weights.bold};
  font-size: ${theme.fonts.P0};
  color: ${theme.colors.white};
  padding: 18px 24px;
  margin-top: 18px;
  gap: 8px;

  &:hover:not(:disabled) {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    transition: all 200ms ease-out;
  }

  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
