import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
// Styled components: ___________________________
// Importing styled-components library:
import styled from 'styled-components';

// ______________________________________________
// HomeWrapper div:
const IntroWrapper = styled.div`
   display: flex;
   justify-content: center;
   background-color: #7cc6fe;
   margin: 0;
   min-height: 100vh;
   font-family: "Verdana", cursive, sans-serif;
    color: #191919;

`;

const FormWrapper = styled.div`
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

const styleInput = {
        width: '100%',
        padding: '12px 20px',
        margin: '8px 0',
        display: 'inlineBlock',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'borderBox',
        fontFamily: "Verdana",
        color: '#191919'
}
// ______________________________________________

const IntroPage = () => {

    const navigate = useNavigate();

    // State to manage form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        job: '',
    });

    // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Store data in localStorage
        localStorage.setItem('formData', JSON.stringify(formData));

        // Clear form data
        setFormData({
            firstName: '',
            lastName: '',
            job: '',
        });

        // Navigate to the quiz page
    navigate('/home');
    };

    return (
        <IntroWrapper>
            <FormWrapper>
                <form onSubmit={handleSubmit}>
                    <label>
                        First Name:
                        <input
                            style={styleInput}
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        Last Name:
                        <input
                            style={styleInput}
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        Job:
                        <input
                            style={styleInput}
                            type="text"
                            name="job"
                            value={formData.job}
                            onChange={handleInputChange}
                        />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </FormWrapper>
        </IntroWrapper>

    );
};

export default IntroPage;
