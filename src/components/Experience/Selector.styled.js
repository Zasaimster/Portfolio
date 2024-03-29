import styled from "styled-components";
import { theme } from "../../constants/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0 30px 0;
  background-color: ${theme.lightBg};

  @media screen and (max-width: 450px) {
    padding: 20px 15px 0 15px;
  }
`;

export const Experience = styled.div`
  cursor: pointer;
  padding: 0 9px 6px 9px;

  transition: 200ms all ease-in-out;
  border-bottom: ${({ isSelected }) =>
    isSelected ? `2px solid ${theme.mainColor}` : `2px solid ${theme.lightBg}`};

  background-color: ${theme.lightBg};

  @media screen and (max-width: 450px) {
    font-size: 12px;
  }
`;
