// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  err ? console.log(err) : console.log("render license badge", data.license)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // (!license) ? console.log("blank") : console.log("render license link ", license)
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
// this is where the tempplate literal will go
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## ${data.description}

  ## Table of Contents
  - [nstallation](#installation)
  - [Usage](#usage) 
  - [License](#license) 
  - [Contributing](#contributing) 
  - [Tests](#tests)
  - [Questions](#questions)


##Installation  
${data.install}



##Usage
${data.usage}

##License
${data.license}



##Contributing
${data.contribution}


## Tests
${data.test}

## Questions
[GitHub repository](https://github.com/${data.username})
email: ${data.email}
Instructions: ${data.qsInstructions};
`;
}

module.exports = generateMarkdown;
