const badgeArr = [{
    licenseName: 'MIT',
    licenseBadge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
},
{
    licenseName: 'GPL',
    licenseBadge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
},
{
    licenseName: 'BSD',
    licenseBadge: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
},
{
    licenseName: 'ISC',
    licenseBadge: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
},
{
    licenseName: 'none',
    licenseBadge: 'none'
}
]

// mock data for testing
// const data = {
//     title: 'ReadMe generator',
//     description: 'Command-line application to create a README.md file',
//     install: 'npm i readme-generator',
//     usage: 'Use at your own risk',
//     contribution: 'If you can contribute some dollars that would be great!!',
//     test: 'Testing if for wimps and cowards',
//     license: 'GPL',
//     username: 'roo116',
//     email: 'hillkarl03@gmail.com',
//     qsInstructions: 'call my email and leave a text message'
// };

// var license = data.license;
function renderLicenseBadge(license) {
    console.log("In getBadge")
    if (license === "none") {
        console.log("no license")
        return ''
    }
    let result = badgeArr.find(n => n.licenseName === license);
    console.log(result)
    const { licenseName, licenseBadge } = result
    console.log(licenseBadge)
    return licenseBadge
    // const {licenseName, licenseBadge} = result;
};


function generateMarkdown(data) {
    console.log("getting ready to generate MarkDown")
    console.log(data.license)


    return `${renderLicenseBadge(data.license)}
  
  # Project Title - ${data.title}
  
  
  ## Project Description
      ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
      ${data.install}
  
  ## Usage
      ${data.usage}
  
  ## License
      Licensed under the ${data.license} license.
  
  ## Contributing
      ${data.contribution}
  
  ## Tests
      ${data.test}
  
  ## Questions
  [GitHub Repository](https//github.com/${data.username})
  Email: ${data.email}
  if you have questions, ${data.contact}
  
  `;
}

module.exports = generateMarkdown;