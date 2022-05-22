// TODO: Include packages needed for this application
const inq = require('inquirer');
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
    }


]

// TODO: Create a function to write README file
function createReadme(answers) {
    fs.writeFileSync('./README.md', `# ${answers.title}`)
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
