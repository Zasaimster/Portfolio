import styled from "styled-components";
import { theme } from "../../constants/theme";

export const Button = styled.a`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? theme.mainColor : theme.darkBg)};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? theme.darkBg : "#fff")};

  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : theme.mainColor)};
  }
`;
