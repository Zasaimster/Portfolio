import styled from "styled-components";
import { theme } from "../../constants/theme";

export const Title = styled.h1`
  text-align: center;
  padding-top: 75px;

  background: ${({ lightText }) => (lightText ? theme.darkBg : theme.lightBg)};
  color: ${({ lightText }) =>
    lightText ? theme.lightTextColor : theme.darkTextColor};
`;
