import React from 'react'
// Styled components: ___________________________
// Importing styled-components library:
import styled from 'styled-components';
import { Link } from 'react-router-dom'
// ______________________________________________
// Importing Assets
import HomeIllustration from '../assets/home-illustration.svg';

// ______________________________________________
// HomeWrapper div:
const HomeWrapper = styled.div`
   display: flex;
   justify-content: center;
   background-color: #7cc6fe;
   margin: 0;
   min-height: 100vh;

`;

// HomeContainer div:
const HomeContainer = styled.div`
   background-color: #F6F7C4;
   margin: 45px 30px 30px 30px;
   padding: 60px 90px;
   display: flex;
   flex-direction: row;
   max-width: 1200px;
   max-height: 400px;
   border-radius: 15px;
   border: 3px solid #191919;
   box-shadow: 10px 10px #191919;

`;
// margin: 30px;

// LeftCol div:
const LeftCol = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   flex: 1;
`;

// StyledTitle h2:
const StyledTitle = styled.h2`
   padding-bottom: 30px;
   max-width: 280px;
   line-height: 50px;
   color: 000000;
`;

// Illustration img:
const Illustration = styled.img`
   flex: 1;
`;

// Link:
const StyledLink = styled(Link)`
   padding: 10px 15px;
   color: #191919;
   text-decoration: none;
   font-size: 18px;
   text-align: center;
   background-color: #7cc6fe;
   border-radius: 5px;
   border: 3px solid #191919;
   box-shadow: 10px 10px #191919;
   &:hover{
    background-color: #F6F7C4;
   }
`;
// ______________________________________________

const Home = () => {
    return (
        // div 
        <HomeWrapper> 
            {/* div  */}
            <HomeContainer>
                {/* div  */}
                <LeftCol>
                    <StyledTitle>
                        Assess your development skills with our technical quiz.
                    </StyledTitle>
                    <StyledLink to="/startquiz">
                        Pass the test
                    </StyledLink>
                </LeftCol>
                <Illustration src={HomeIllustration} alt='image dev recruit' />
            </HomeContainer>
        </HomeWrapper>
    )
}

export default Home