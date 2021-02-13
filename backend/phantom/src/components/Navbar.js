import React from 'react';
import styled, {css} from 'styled-components/macro';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { SubButton } from './SubButton';
import Drop from '../images/drop.svg';
import Logo1 from '../images/logo1.png';
import { FaToggleOff } from 'react-icons/fa';

const Nav = styled.nav`
height: 60px;
display: flex;
justify-content: space-between;
padding: 1rem  2.5rem;
z-index: 100;
position: fixed;
width: 100%;
background: #2EAAD6;
top: 0;
`;

const NavLink =css`
color: #fff;
display:flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;
text-decoration : none;
`;


const AppLogo = styled.img`
  ${NavLink}
  margin-top:-40px;
  height: 150px;
  width:200px;
  vertical-align: center;
  `;
  

// const Logo =styled(Link)`
// ${NavLink}
// font-style: italic;

//`;

// const myLogo = styled.i`
// background-image: url(${Logo1});
// `;


const MenuBars = styled.i`
display: none;

@media screen and (max-width: 768px){
    display: block;
    background-image:url(${Drop});
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top:0;
    right: 0;
    transform: translate(-50% , 25%);
}
`; 

const NavMenu = styled.div`
display:flex;
align-items:center;
margin-right:-48px;

@media screen and (max-width: 768px){
    display:none;
}
`;

const NavMenuLinks = styled(Link)`
${NavLink}
`;

const NavBtn = styled.div`
display: flex;
align-items: center;
margin-right:24px;


@media screen and (max-width: 768px){
    display:none;
}
`;


const Navbar = ({toggle}) => {
    return (
        
            <Nav>
                
                <AppLogo to = '/' src={Logo1} alt="logo" ></AppLogo>
                <MenuBars onClick={toggle}/>
                <NavMenu>
                    {menuData.map((item , index) => (
                        <Router>
                            <Route>
                            <NavMenuLinks to= {item.link} key={index}>
                           {item.title} 
                        </NavMenuLinks>
                            </Route>
                        </Router>
                    ))}
                </NavMenu> 
                <NavBtn>
                    <Router>
                    <Route>
                    <SubButton to='/contact' primary= 'true' >Contact us
                    </SubButton>
                    </Route>
                    </Router>
                    </NavBtn> 
        </Nav>
    );
};

export default Navbar;
