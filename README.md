Online Quiz - Technical Skills Assessment

## Description

This project is a web application for conducting online tests to assess the technical proficiency of candidates or developers. The results can be shared with companies for a more in-depth evaluation.

## Features

- Online test-taking
- Automatic assessment of responses
- Storage of results
- User-friendly interface

## Prerequisites

Make sure you have the following installed on your local machine:

- Node.js
- npm (Node.js package manager)
- json-server (for simulating an API server with data)

## Dependencies
This project relies on the following dependencies:

react-router-dom - For navigating within the application.
react-bootstrap - For using Bootstrap components in React.
styled-components - For styling React components.
json-server - For simulating an API server with data.

## Installation

1. **Clone this repository to your local machine.**

```bash
git clone https://github.com/soka1998/devQuiz.git
cd devQuiz
 ```

2. **Install project dependencies.**
```bash
npm install
 ```

3. **Install JSON Server**
```bash
npm install -g json-server
 ```

4. **Create a db.json file**


5. **Add server to scripts in package.json**
```bash
"scripts": {
    ...
    "server": "json-server --watch db.json --port 5000"}
 ```

6. **Start the server**
 ```bash
npm run server
 ```

7. **Launch the React application.**
```bash
npm start
 ```

**The application will be accessible at http://localhost:3000/.**


## Author
 [AIT M'BAREK Youness](https://github.com/YNS-JNS).
 [Soukain HARIFI](https://github.com/soka1998).

 ## Learn More

- React.js Documentation: [https://react.dev/](https://react.dev/)

## Contribution

If you find issues or want to contribute, follow these steps:

1. Fork the project.
2. Create a branch for your feature: `git checkout -b feature/NewFeature`.
3. Commit your changes: `git commit -m "Add New Feature"`.
4. Push to the branch: `git push origin feature/NewFeature`.
5. Open a pull request.
