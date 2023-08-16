// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your app?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the app used for?"
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install the app?"
    },
    {
        type: "input",
        name: "usage",
        message: "How is the app used?"
    },
    {
        type: "list",
        name: "license",
        message: "What license did you use:",
        choices: [
            "MIT",
            "Mozilla",
            "Apache",
            "Zlib",
        ]
    },
    {
        type: "input",
        name: "contributions",
        message: "How can the user make contributions to the app?"
    },
    {
        type: "input",
        name: "tests",
        message: "How do you test the app?"
    },
    {
        type: "input",
        name: "questions",
        message: "Where can the user email any questions or concerns?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
