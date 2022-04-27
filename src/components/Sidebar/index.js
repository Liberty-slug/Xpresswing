import React from 'react'
import { SidebarContainer, Icon,  CloseIcon, SidebarWrapper,SidebarBtnWrap, SidebarLink, SidebarRoute, SidebarMenu} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>
              About
            </SidebarLink>
            <SidebarLink to="services" onClick={toggle}>
              Services
            </SidebarLink>
            <SidebarLink to="team" onClick={toggle}>
              Our Tean
            </SidebarLink>
            <SidebarLink to="/signin">
              Signin
            </SidebarLink>
          </SidebarMenu>
          <SidebarBtnWrap>
            <SidebarRoute to="/signup">SignUp</SidebarRoute>
          </SidebarBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar