import { useState } from 'react';
// Using useNavigate for redirect to another page
import { useNavigate } from 'react-router-dom' 
// Styled components: _________________________________
// Importing styled-components library:
import styled, { keyframes } from 'styled-components';

// _____________________________________________________

// HomeWrapper div:
const IntroWrapper = styled.div`
    display: flex;
    justify-content: center;
    background-color: #7cc6fe;
    margin: 0;
    min-height: 100vh;
    font-family: Verdana, cursive, sans-serif;
    color: #191919;

`;

const FormWrapper = styled.div`
    background-color: #F6F7C4;
    margin: 60px 30px 30px 30px;
    padding: 60px 90px;
    display: flex;
    flex-direction: row;
    max-width: 500px;
    max-height: 400px;
    border-radius: 15px;
    border: 3px solid #191919;
    box-shadow: 10px 10px #191919;

`;

const LabelTitle = styled.label`
    color: #191919;
    font-weight: 300;   
`;

const Input = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 3px solid #191919;
    border-radius: 4px;
    box-sizing: border-box;
    font-family: Verdana;
    color: #191919;
`;

const Button = styled.button`
    width: 50%;
    padding: 10px 15px;
    margin-top: 25px;
    color: #191919;
    border: 3px solid #191919;
    box-shadow: 5px 5px #191919;
    border-radius: 5px;  // Fix the typo here
    font-size: 18px;
    text-align: center;
    background-color: #7cc6fe;
    display: flex;  /* Added flex container */
    align-items: center;  /* Center items vertically */
    justify-content: center;  /* Center items horizontally */
    &:hover {
        background-color: #F6F7C4;
    }
`;

// _____________________________________________________  
// Create the keyframes:
const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
`;

// _____________________________________________________

const FormQuiz = () => {

    const navigate = useNavigate(); // Using useNavigate for redirect to another page

    // _____________________________________________________  
    // State to manage form data
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        job: '',
    });
    // _____________________________________________________
    // Function to handle input changes
    const handleInputChange = (e) => {
        // Extracting 'name' and 'value' from the input event
        const { name, value } = e.target;
        // Updating the form data using the spread operator
        setFormData({
            ...formData,    // Copy the existing form data
            [name]: value,  // Update the property with the new value
        });
    };
    // _____________________________________________________
    // Function to handle form submission and store user
    const handleSubmit = async (e) => {

        e.preventDefault();
        // Validation but i have to upgrade it
        if (formData.firstName === "" || formData.email === "" || formData.job === "") {
            alert("Please, enter your informations!")
            return;
        }

        // Store data in localStorage
        localStorage.setItem('formData', JSON.stringify(formData));

        // ---------------------------------------------
        // POST request to json-server to add a new user
        const response = await fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            console.log('User added successfully!')
        } else {
            console.error('Failed to add user');
        }

        // ---------------------------------------------

        // Clear form data
        setFormData({
            firstName: '',
            email: '',
            job: '',
        });

        // ---------------------------------------------
        // Navigate to the home page
        navigate('/form/startquiz');
    };

    return (
        <IntroWrapper>
            <FormWrapper>
                <form onSubmit={handleSubmit}>
                    <LabelTitle>
                        Your Name:
                        <Input
                            // style={styleInput}
                            type="text"
                            name="firstName"
                            placeholder='Enter your first name'
                            value={formData.firstName}
                            onChange={handleInputChange}
                        />
                    </LabelTitle>

                    <LabelTitle>
                        Email:
                        <Input
                            // style={styleInput}
                            type="email"
                            name="email"
                            placeholder='your.name@example.com'
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </LabelTitle>

                    <LabelTitle>
                        Job:
                        <Input
                            // style={styleInput}
                            type="text"
                            name="job"
                            placeholder='Enter your job'
                            value={formData.job}
                            onChange={handleInputChange}
                        />
                    </LabelTitle>
                    <center>
                        <Button type="submit">Submit</Button>
                        <br />
                        <Rotate>&lt; 💅🏾 &gt;</Rotate>
                    </center>

                </form>
            </FormWrapper>
        </IntroWrapper>

    );
};

export default FormQuiz;
