import React from "react";
import * as Styled from "./Sidebar.styled";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <Styled.SidebarContainer isOpen={isOpen}>
      <Styled.Icon onClick={toggle}>
        <Styled.CloseIcon />
      </Styled.Icon>
      <Styled.SidebarWrapper>
        <Styled.SidebarMenu>
          <Styled.SidebarLink to='about' onClick={toggle}>
            About
          </Styled.SidebarLink>
          <Styled.SidebarLink to='experience' onClick={toggle}>
            Experience
          </Styled.SidebarLink>
          <Styled.SidebarLink to='projects' onClick={toggle}>
            Projects
          </Styled.SidebarLink>
        </Styled.SidebarMenu>
        <Styled.SideBtnWrap>
          <Styled.SidebarRoute to='/resume' onClick={toggle}>
            Resume
          </Styled.SidebarRoute>
        </Styled.SideBtnWrap>
      </Styled.SidebarWrapper>
    </Styled.SidebarContainer>
  );
};

export default Sidebar;
