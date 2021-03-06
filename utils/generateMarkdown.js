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

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// gets licences info from array and addes license and associated links to the badge
function getBadge(license) {
    if (license === "none") {
        return ''
    }
    let result = badgeArr.find(n => n.licenseName === license);
    const { licenseBadge } = result
    return licenseBadge
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// sets up license section
function licenseSection(license) {
    if (license === 'none') {
        let section = ``
        return section
    }

    let result = badgeArr.find(n => n.licenseName === license);
    const { licenseName } = result
    let section = `This is licensed under the ${licenseName} license. See the badge for the link to the license information.`
    return section
};

// generates README markdown
function generateMarkdown(data) {

    return `${getBadge(data.license)}
  
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
${licenseSection(data.license)}
  
## Contributing
${data.contribution}
  
## Tests
${data.test}
  
## Questions
If you have questions, reach out via email or GitHub  
Gitub:  [GitHub Repository](https//github.com/${data.username})  
Email:  ${data.email}  
  `;
}

module.exports = generateMarkdown;