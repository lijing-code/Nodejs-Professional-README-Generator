// Create a function to generate markdown for README
function generateMarkdown(data) {
  // A function to change the format of each user's answer, make a clearly bulletpoints in README.md
  const formatTheAnswer = (string) =>{
    let list = string.split(';');
    let bulletPoint = "";
    list.forEach((item)=> {bulletPoint+=`* ${item}\n`});
    return bulletPoint;
  }
  // A function to set up the README Generator Framework
  return `# ${data.projectTitle}
  ![${data.license}](https://img.shields.io/static/v1?label=license&message=${data.license}&color=brightgreen&style=plastic&logo=appveyor)
  ---
  ## Description
  ${data.description}
  ---
  ## Table of Contents 
  - Link of the repo: https://github.com/${data.username}/${data.projectTitle}
  - [Description](#Description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#license)
  - [How to Contribute](#license)
  - [Tests](#license)
  - [Questions](#license)
  ---
  ## Installation
  ${formatTheAnswer(data.installation)}
  ## Usage
  ${formatTheAnser(data.usage)}
  ![screenshot](${data.usageScreenshot})
  ---
  ## Credits
  ---
  ${formatTheAnswer(data.creditsForCollaborators)}
  ---
  ${formatTheAnswer(data.creditsForResources)}
  ---
  ## License
  This project is using ${data.license} license:
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
