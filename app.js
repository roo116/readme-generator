// WHEN I enter my project title THEN this is displayed as the title of the README
const inquirer = require("inquirer");
// const CheckboxPrompt = require('inquirer/lib/prompts/checkbox');
// const generateMarkdown = require("./utils/generateMarkdown")

// data
// generateMarkdown({...data})

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
/* Pass your questions in here */
var questions = [
{
    type: "input",
    name: "title",
    message: "What is the title of you project?"
},
{
    type: "input",
    name: "description",
    message: "Provide a description of your project (Required)"
},
{
    type: "input",
    name: "install",
    message: "Provide installation insstructions (Required)"
},
{
    type: "input",
    name: "usage",
    message: "Any usage restrictions? (Required)"
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
    name: "contributors",
    message: "Please list contributors"
    //probably needs to be pushed into an array
},
{
    type: "input",
    name: "test",
    message: "please enter test command(s)"
}
];

// const promptUser = () => {
//   return inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "title",
//         message: "What is the title of you project?",
//       },
//       {
//         type: "input",
//         name: "description",
//         message: "Provide a description of your project (Required)",
//       },
//       {
//         type: "input",
//         name: "install",
//         message: "Provide installation insstructions (Required)",
//       },
//       {
//         type: "input",
//         name: "usage",
//         message: "Any usage restrictions? (Required)",
//       },
//       {
//         type: "list",
//         name: "license",
//         message: "Provide licensse info",
//         defaul: "ULC",
//         choices: ["MIT", "GPL", "BSD", "ULC"],
//       },
//       {
//         type: "input",
//         name: "contributors",
//         message: "Please list contributors",
//         //probably needs to be pushed into an array
//       },
//       {
//         type: "input",
//         name: "test",
//         message: "please enter test command(s)",
//       },
//     ])
//     .then((answers) => {
//       // Use user feedback for... whatever!!
//       console.log(answers);

//       //use writeToFile function here
//     })
//     .catch((error) => {
//       if (error.isTtyError) {
//         // Prompt couldn't be rendered in the current environment
//       } else {
//         // Something else went wrong
//       }
//     });
// };

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//   // build fs action
// }

// TODO: Create a function to initialize app
function init() {
   inquirer
    .prompt(questions)
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers);

      //use writeToFile function here
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init();
// promptUser();
