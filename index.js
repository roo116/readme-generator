// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");



// mock data for testing
const mockdata = {
    title: 'ReadMe generator',
    description: 'Command-line application to create a README.md file',
    install: 'npm i readme-generator',
    usage: 'Use at your own risk',
    contribution: 'If you can contribute some dollars that would be great!!',
    test: 'Testing if for wimps and cowards',
    license: 'ULC',
    username: 'roo116',
    email: 'hillkarl03@gmail.com',
    qsInstructions: 'call my email and leave a text message'
};

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
        defaul: "ULC",
        choices: ["MIT", "GPL", "BSD", "ULC"]
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
    {
        type: "input",
        name: "qsInstructions",
        message: "Please provide how users may contact you with questions. (Required)",
        validate: qsInput => {
            if (qsInput) {
                return true;
            } else {
                console.log('Please enter instructions on how users may contact you with questions');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, answers) { }
//first I am going to create a dist directory so this doesn't overwrite any existing README.md
fs.mkdirSync("./dist", { recursive: true }, (err) => {
    if (err) throw err
})

const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/README.md", fileContent, err => {
            //if error then reject
            if (err) {
                reject(err);
                return;
            }

            // if no error, hooray!!!!
            resolve({
                ok: true,
                message: "File Created",

            })

        })

    })
}






// TODO: Create a function to initialize app
// function init() {
// inquirer
//     .prompt(questions)
//     .then((answers) => {
//         // Use user feedback for... whatever!!
//         console.log(answers);

//         //use writeToFile function here
//     })
//     .catch((error) => {
//         if (error.isTtyError) {
//             // Prompt couldn't be rendered in the current environment
//         } else {
//             // Something else went wrong
//         }
//     });



// Function call to initialize app
// init();
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

promptUser()




// {
//     title: 'ReadMe generator',
//     description: 'Command-line application to create a README.md file',
//     install: 'npm i readme-generator',
//     usage: 'Testing if for wimps and cowards',
//     license: 'ULC',
//     username: 'roo116',
//     email: 'hillkarl03@gmail.com',
//     qsInstructions: 'call my email and leave a text message'
//   }



