// import { useContext } from 'react';
// import { ThemeContext } from '../../utils/context';
import styled from 'styled-components';

const FooterContainer = styled.footer`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   padding-top: 60px;
   padding-bottom: 60px;
   background-color: #F6F7C4;
   box-shadow: 10px 10px #191919;
   border-top: 3px solid #191919;
`;

const NightModeButton = styled.button`
   background-color: transparent;
   border: none;
   cursor: pointer;
   color: #191919;
   width: 190px;
   text-align: center;
   &:hover {
    background-color: #7cc6fe;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <NightModeButton>
               Toggle Mode ☀️ : 🌙
            </NightModeButton>
        </FooterContainer>
    );
};

export default Footer;
