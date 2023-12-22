import React from 'react';
// import { Link } from 'react-router-dom';
import Category from './Category';
// import '../styles/StartQuiz.css'

// Importing images
import backendImg from '../assets/backend.jpg';
import frontendImg from '../assets/frontend.jpg';
import fullstackImg from '../assets/fullstack.jpg';

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

// export default function StartQuiz({ onStartQuiz }) {
export default function StartQuiz() {

    // Example data
    // const categories = ['Fullstack', 'Frontend', 'Backend'];
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
