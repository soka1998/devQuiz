// Importing Category component
import Category from './Category';

// Importing images ____________________________________
import backendImg from '../assets/backend.jpg';
import frontendImg from '../assets/frontend.jpg';
import fullstackImg from '../assets/fullstack.jpg';

// _____________________________________________________

// Importing styled-components library:
import styled from 'styled-components';

// _____________________________________________________

// WrappedCategory div:
const WrappedCategory = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    background-color: #7cc6fe;
    min-height: 100vh; 
`;

// _____________________________________________________

const StartQuiz = ()=> {

    // Categories object
    const categories = [
        {
            title: 'Fullstack',
            // description: 'Description for Fullstack category.',
            image: fullstackImg
        },
        {
            title: 'Frontend',
            // description: 'Description for Frontend category.',
            image: frontendImg

        },
        {
            title: 'Backend',
            // description: 'Description for Backend category.',
            image: backendImg

        }
    ];

    // _____________________________________________________

    return (
        <WrappedCategory>
            {categories.map((category, index) => (
                <Category key={index} category={category} />
            ))}
        </WrappedCategory>
    );
}

export default StartQuiz;
