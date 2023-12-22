const questions = [
    // Fullstack JavaScript
    {
      questionText: "What term is used to describe server-side JavaScript?",
      answerOptions: [
        { answerText: "Node.js", isCorrect: true },
        { answerText: "Express", isCorrect: false },
        { answerText: "Flask", isCorrect: false },
        { answerText: "Django", isCorrect: false },
      ],
    },
    {
      questionText: "Among the following frameworks, which is often used for fullstack JS development?",
      answerOptions: [
        { answerText: "Express", isCorrect: true },
        { answerText: "Django", isCorrect: false },
        { answerText: "Flask", isCorrect: false },
        { answerText: "Rails", isCorrect: false },
      ],
    },
    // ... more questions for Fullstack JavaScript
  
    // Backend
    {
      questionText: "What is the main difference between SQL and NoSQL databases?",
      answerOptions: [
        { answerText: "Data structure", isCorrect: false },
        { answerText: "Query language", isCorrect: false },
        { answerText: "Schema", isCorrect: false },
        { answerText: "All of the above", isCorrect: true },
      ],
    },
    {
      questionText: "Explain the concept of middleware in the context of backend development.",
      answerOptions: [
        { answerText: "Software that acts as a bridge between an operating system and user applications.", isCorrect: false },
        { answerText: "Code that runs after the request is received but before the route handler is invoked.", isCorrect: true },
        { answerText: "The main logic of a backend application.", isCorrect: false },
        { answerText: "A database management system.", isCorrect: false },
      ],
    },
    // ... more questions for Backend
  
    // Frontend
    {
      questionText: "What is the difference between HTML and XHTML?",
      answerOptions: [
        { answerText: "HTML is a markup language, while XHTML is a programming language.", isCorrect: false },
        { answerText: "HTML is case-insensitive, while XHTML is case-sensitive.", isCorrect: true },
        { answerText: "There is no difference.", isCorrect: false },
        { answerText: "XHTML is obsolete.", isCorrect: false },
      ],
    },
    {
      questionText: "How do Promises work in JavaScript?",
      answerOptions: [
        { answerText: "They are callbacks.", isCorrect: false },
        { answerText: "They represent a value that might be available now, or in the future, or never.", isCorrect: true },
        { answerText: "They are synchronous.", isCorrect: false },
        { answerText: "They are deprecated.", isCorrect: false },
      ],
    },
    // ... more questions for Frontend
  ];
  
  export default questions;
  