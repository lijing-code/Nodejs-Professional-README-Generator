// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  // A function to change the format of each user's answer, make a clearly bulletpoints in README.md
  const formatTheAnswer = (string) =>{
    let list = string.split(';');
    let bulletPoint = "";
    list.forEach((item)=> {bulletPoint+=`* ${item}\n`});
    return bulletPoint;
  }
  return `# ${data.projectTitle}
  ---
  ## Description
  ${data.description}
  ---
  ## Table of Contents 
  - Link of the repo: https://github.com/${data.username}/${data.projectTitle}
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  ---
  ## Installation
  ${formatTheAnswer(data.installation)}
  ## Usage
  ${data.usage}
  ![screenshot](${data.usageScreenshot})
  ## Credits
  ### People
  ${formatTheAnswer(data.creditsForCollaborators)}
  ### Resource
  ${formatTheAnswer(data.creditsForResources)}
  ## License
  ![${data.license}](https://img.shields.io/static/v1?label=license&message=${data.license}&color=brightgreen&style=plastic&logo=appveyor)
  ## Features
  ${formatTheAnswer(data.features)}
  ## How to Contribute
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
  ${formatTheAnswer(data.contributor)}
  ## Tests
  ${formatTheAnswer(data.test)}
  ## Questions
  - My GitHub is https://github.com/${data.username}, please feel free to ask me if you have any question about my project.
  - My email is ${data.email}.
`;
}

module.exports = generateMarkdown;
