// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
    {
        type:'input',
        message:'What is your project title?',
        name:'projectTitle',
    },
    {
        type:'input',
        message:'What is your description of this project?',
        name:'description',
    },
    {
        type:'input',
        message:'What are the steps required to install your project? \n Use ";" to seperate each steps.',
        name:'installation',
    },
    {
        type:'input',
        message:'Provide instructions and examples for use.',
        name:'usage',
    },
    {
        type:'input',
        message:'Please enter the url for the screenshot for the project: ',
        name:'usageScreenshot',
    },
    {
        type:'input',
        message:'List your collaborators, if any, with links to their GitHub profiles. \n Use ";" to seperate each person.(name: githublink;)',
        name:'creditsForCollaborators',
    },
    {
        type:'input',
        message:'If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.\n Use ";" to seperate each recources.(Resource name: resource link;)',
        name:'creditsForResources',
    },
    {
        type:'input',
        message:'Guideline for users to test this project: \n Use ";" to seperate each steps.',
        name:'test',
    },
    {
        type:'checkbox',
        message:'License:',
        name:'license',
        choices: ['MIT', 'GPLv3', 'Apache', 'ISC']
    },
    {
        type:'input',
        message:'If your project has a lot of features, list them here.\n Use ";" to seperate each features.',
        name:'features',
    },
    {
        type:'input',
        message:"If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.\n The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.",
        name:'contributor',
    },
    {
        type:'input',
        message:'What is your Github username?',
        name:'username',
    },
    {
        type:'input',
        message:'What is your email',
        name:'email',
    },
];

// Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.md',`${generateMarkdown(data)}`, (err) =>
      err ? console.error(err) : console.log('Success!'))
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data)=>writeToFile(data));
}

// Function call to initialize app
init();
