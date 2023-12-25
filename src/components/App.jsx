import React, { useEffect, useState } from 'react'
// _____________________________________________
// Importing packages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// _____________________________________________
// Importing Components:
import Header from './Header';
import Home from './Home';
import IntroPage from './IntroPage';
import StartQuiz from './StartQuiz';
import Quiz from './Quiz';
import NotFound from './NotFound';
import Footer from './Footer';
import Profile from './Profile';

const App = () => {
    // _____________________________________________________

    // const data = localStorage.getItem("formData")
    // if (data) {
    //         console.log(data)
    // }
    // _____________________________________________________  
    // To store profiles
    const [profiles, setProfiles] = useState([]);
    // Todod => Fetch all profiles from (json-server) db.json file
    const fetchProfiles = () => {
        fetch('http://localhost:5000/users')
            .then(response => response.json())
            .then(data => {
                setProfiles(data)
                console.log('Data from json-server', data)
            })
            .catch(error => console.error('Error: Something went wrong!'));
    }

    useEffect(() => {

        fetchProfiles();
    }, [])

    console.log('Data from useState', profiles)

    // _____________________________________________________ 

    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/intro" element={<IntroPage />} />
                    <Route path="/profile" element={<Profile profiles={profiles} />} />
                    <Route path="/intro/startquiz" element={<StartQuiz />} />
                    <Route path="/startquiz/quiz/:selectedCategory" element={<Quiz />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}

export default App