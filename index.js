// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of you project?",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the title of your project.');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of your project (Required)",
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('Please enter a description of your project.');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "install",
        message: "Provide installation instructions (Required)",
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter the installation instructions.');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Any usage information? (Required)",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the title of your project.');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contribution",
        message: "Please enter contribution guidelines"
    },
    {
        type: "input",
        name: "test",
        message: "Please enter any test instructions"
    },
    {
        type: "list",
        name: "license",
        message: "Provide licensse info",
        choices: ["MIT", "GPL", "BSD", "ISC", "none"],
        default: "none"
    },
    {
        type: "input",
        name: "username",
        message: "Please provide GitHub username (Required)",
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter your github username');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please provide email address (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, answers) { }
//first I am going to create a dist directory so this doesn't overwrite any existing README.md

const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/README.md", fileContent, err => {
            //if error then reject
            if (err) {
                reject(err);
                console.log("something went wrong")
                return;
            }

            // if no error, hooray!!!!
            resolve({
                ok: true,
                message: "File Created",
            });

        });

    });
};

promptUser = () => {
    inquirer
        .prompt(questions)
        .then((answers) => {
            // Use user feedback for... whatever!!
            console.log(answers);

            return generateMarkdown(answers)

            //         //use writeToFile function here



        }).then(fileContent => {
            writeToFile(fileContent);
        })
        .catch((error) => {
            if (error.isTtyError) {
                //             // Prompt couldn't be rendered in the current environment
            } else {
                //             // Something else went wrong
            }
        });
}

function init() {
    // make a dist directory
    fs.mkdirSync("./dist", { recursive: true }, (err) => {
        if (err) throw err
    })
    // remove README if it's there    
    fs.unlinkSync('./dist/README.md', function (err) {
        if (err) throw err
        console.log("README cleared")
    })
}
init()
promptUser()

