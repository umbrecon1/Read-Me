// TODO: Include packages needed for this application
const inq = require('inquirer');
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project about?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
    },
    {
        type: 'input',
        name: 'deployedLink',
        message: 'What is the link to your deployed project?',
    },
   

]

// TODO: Create a function to write README file
function createReadme(answers) {
    fs.writeFileSync('./README.md', `
    # ${answers.title}
    ## Description
    ${answers.description}
    ## Installation Instructions
    ${answers.installation}
    ## Deployed Link
    [deployed link](${answers.deployedLink})
    `)
}

inq
.prompt(questions)
.then((answers) => {
    createReadme(answers)
})
.catch((error) => {
    if (error.isTtyError) {
        console.error('Prompts could not be rendered in current environment')
    } else {
        console.error(`Something went wrong!`, error)
    }
})

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();

createReadme('a')
