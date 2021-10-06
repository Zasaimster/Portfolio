import styled from "styled-components";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

export const FooterContainer = styled.div`
  text-align: center;
  background: #010606;
  padding-bottom: 12px;
`;

export const LinkContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
`;

export const FooterLinkedIn = styled(AiFillLinkedin)`
  color: #01bf71;
  width: 32px;
  height: 32px;
`;

export const FooterGithub = styled(AiFillGithub)`
  color: #01bf71;
  width: 32px;
  height: 32px;
`;

export const FooterEmail = styled(AiOutlineMail)`
  color: #01bf71;
  width: 32px;
  height: 32px;
`;

export const FooterText = styled.p`
  text-align: center;
  color: #f9f9f9;
`;
