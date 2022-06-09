const inquirer = require('inquirer');

const questions = ["what is the title of your project?"]


inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: "input",
            name: "title",
            message: questions[0]
        }])
    .then((answers) => {
        // Use user feedback for... whatever!!
        // answers.push[answers];
        console.log(answers);
        console.log(process)
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });