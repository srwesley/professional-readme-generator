// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
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
        type: "checkbox",
        name: "license",
        message: "What license did you use: (Use the space bar to select one or more optons)",
        choices: [
            "MIT",
            "Mozilla",
            "Apache",
            "Zlib",
            "BSD2",
            "None"
        ],
    },
    {
        type: "input",
        name: "installation",
        message: "What was installed to generate this app?"
    },
    {
        type: "input",
        name: "usage",
        message: "How is the app used?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Were there any other constributors for this app? (Use GitHub usernames)"
    },
    {
        type: "input",
        name: "tests",
        message: "How do you test the app?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating professional README file!");
        writeToFile("./README.md", generateMarkdown({ ...responses }));
    });
}

// Function call to initialize app
init();
