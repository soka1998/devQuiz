import React from 'react';
import Category from './Category';

// Importing images ____________________________________
import backendImg from '../assets/backend.jpg';
import frontendImg from '../assets/frontend.jpg';
import fullstackImg from '../assets/fullstack.jpg';

// _____________________________________________________

// Importing styled-components library:
import styled from 'styled-components';

// _____________________________________________________

// NavContainer nav:
const WrappedCat = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    background-color: #7cc6fe;
    min-height: 100vh; 
`;

// _____________________________________________________

const StartQuiz = ()=> {

    // Categories
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
        <WrappedCat>
            {categories.map((category, index) => (
                <Category key={index} category={category} />
            ))}
            {/* <p>Selected Category: {selectedCategory}</p> */}

            {/* <Link to={`/startquiz/quiz/${selectedCategory}`} >
                <button>Start Quiz</button>
            </Link> */}
        </WrappedCat>
    );
}

export default StartQuiz;
