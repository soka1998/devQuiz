import React from 'react'
// Styled components: __________________________________
// Importing styled-components library
import styled from 'styled-components';
// Label:
const CardLabel = styled.span`
   color: #191919;
   font-size: 22px;
   font-weight: normal;
   padding-left: 15px;
   align-self: center;
`;

// Title span:
const CardTitle = styled.span`
   color: #191919;
   font-size: 22px;
   font-weight: normal;
   align-self: center;
`;
// CardWrapper div:
const CardWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   padding: 15px;
   background-color: #F6F7C4;
   border-radius: 30px;
   width: 300px;
   height: 300px;
   transition: 200ms;
   &:hover {
      cursor: pointer;
      box-shadow: 2px 2px 10px #191919;
   }
`;
// _____________________________________________________

// Definition of the Card component: ___________________


const Card = ({ profile }) => {

   // Destructring:
   const { firstName, email, job } = profile;

   return (
      <CardWrapper>
         <CardTitle>
            {firstName}
         </CardTitle>
         <CardLabel>
            {job}
         </CardLabel>
         <CardLabel>
            {email}
         </CardLabel>
      </CardWrapper>
   )
}

export default Card