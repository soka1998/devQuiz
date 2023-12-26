import { useState, useEffect } from 'react';

// Importing styled-components library:
import styled from 'styled-components';
// _____________________________________________________

// WrappedTimer div:
const WrappedTimer = styled.div`
   padding: 8px;
   display: flex;
   justify-content: flex-end;
   align-items: center;
   background-color: #7cc6fe;
   min-height: 10vh;
`;
// _____________________________________________________
const StyledTimer = styled.span`
   margin-right: 15px;
   padding: 5px;
   color: #191919;
   border: 3px solid #191919;
   box-shadow: 5px 5px #191919;
   border-raduis: 5px;
   text-align: center;
   background-color: #F6F7C4;
   &:hover {
      background-color: #7cc6fe;
 }
`;
// _____________________________________________________

const Timer = () => {

  const initialTime = 10 * 60; // 10 minutes in seconds
  const [time, setTime] = useState(initialTime);

// _____________________________________________________

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(timer);
  }, []);

// _____________________________________________________

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

// _____________________________________________________

  return (
    <WrappedTimer>
      {/* <h4>You have 10 minutes to complete your test</h4> */}
      <StyledTimer>Time left: {formatTime(time)}</StyledTimer>
    </WrappedTimer>
  );
};

export default Timer;
