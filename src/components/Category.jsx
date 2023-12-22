import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

// Importing styled-components library:
import styled from 'styled-components';
// _____________________________________________________

// NavContainer nav:
const WrappedCatItem = styled.div`
    background-color: #F6F7C4;
    height: 350px; 
    min-width: 290px;
    margin: 15px;
    border-radius: 5px;
    border: 3px solid #F6F7C4;
    box-shadow: 10px 10px #191919;
    &:hover{
        border: 3px solid #191919;
    }
`;
// transition: width 2s; 
// min-width: 300px;
// padding: 10px;

const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    display: 'block',
    // marginLeft: 'auto',
    // marginRight: 'auto',
};

const titleStyle = {
    paddingLeft: '10px',
    paddingTop: '10px',
    fontSize: '24px',
    textAlign: 'center'
    
}

// const descStyle = {
//     paddingLeft: '10px',
    
// }
// _____________________________________________________

const Category = ({ category }) => {

    const { title, image } = category;

    return (
        <WrappedCatItem>
            <Card style={{ width: '18rem' }}>
                <Link to={`/startquiz/quiz/${title}`}>
                    <Card.Img variant="top" src={image} style={imageStyle} />
                    <Card.Body>
                        <Card.Title style={titleStyle} >{title}</Card.Title>
                    </Card.Body>
                </Link>
            </Card>
        </WrappedCatItem>

    )
}

export default Category