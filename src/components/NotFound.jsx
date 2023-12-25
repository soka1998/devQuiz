import styled from "styled-components";
import notFoundImg from '../assets/errorNotFound.jpg';

// __________________________________________________
// ErrorWrapper div:
const ErrorWrapper = styled.div`
    margin: 30px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
// ErrorTitle h1:
const ErrorTitle = styled.h1`
    color: #191919;
    font-weight: 300;
`;
// ErrorSubTitle h2:
const ErrorSubTitle = styled.h2`
    color: #191919;
    font-weight: 300;
`;
// ErrorImage img:
const ErrorImage = styled.img`
    max-width: 800px;
`;
// __________________________________________________

const NotFound = () => {
  return (
    <ErrorWrapper>
        <ErrorTitle>Ooups...</ErrorTitle>
        <ErrorImage src={notFoundImg} alt="not found" />
        <ErrorSubTitle>Doesn't exist!!</ErrorSubTitle>
    </ErrorWrapper>
  )
}

export default NotFound