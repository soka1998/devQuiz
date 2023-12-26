// Importing styled-components for styling
import styled from 'styled-components';
import CardProfile from './CardProfile';

// Defining styled components:
// CardsContainer div:
const CardsContainer = styled.div`
   display: grid;
   gap: 24px;
   grid-template-rows: 350px 350px;
   grid-template-columns: repeat(2, 1fr);
   align-items: center;
   justify-items: center;
`;

// PageTitle h1:
const PageTitle = styled.h1`
   font-size: 30px;
   color: black;
   text-align: center;
   padding-bottom: 30px;
   color: #191919;
`;
// PageSubtitle h2:
const PageSubtitle = styled.h2`
   font-size: 20px;
   color: #191919;
   font-weight: 300;
   text-align: center;
   padding-bottom: 30px;
`;

// const LoaderWrapper = styled.div`
//    display: flex;
//    justify-content: center;
// `;
// _______________________________________

const Profile = ({ profiles }) => {

   // if (profiles) {
   //    console.log(profiles)
   // }

   return (
      <div>
         <PageTitle>Profiles:</PageTitle>
         <PageSubtitle>
            Find out more about our competitors' scores
         </PageSubtitle>
         <CardsContainer>
            {
               profiles && profiles.map((profile, index) => (
                  <CardProfile key={index} profile={profile} />
               ))
            }
         </CardsContainer>
      </div>
   );
};

export default Profile;