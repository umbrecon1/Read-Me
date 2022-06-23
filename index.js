const inquirer = require('inquirer');
const fs = require('fs');
const { windowCount } = require('rxjs');

const questions = [
	{
		type: 'input',
		name: 'project',
		message: 'What is your project name?',
	},
	{
		type: 'input',
		message: 'Describe your application?',
		name: 'description',
	},
	{
		type: 'input',
		message: 'Link to preview Video/Picture URL?',
		name: 'preview',
	},
	{
		type: 'input',
		message: 'How do I install your application?',
		name: 'install',
	},
	{
		type: 'input',
		message: 'What is your application used for?',
		name: 'usage',
	},
	{
		type: 'checkbox',
		message: 'What kind of license is used?',
		name: 'license',
		choices: ['BSD', 'MIT', 'GPL'],
	},
	{
		type: 'input',
		message: 'What are the guidelines to contributing?',
		name: 'contribute',
	},
	{
		type: 'input',
		message: 'How do I test your application?',
		name: 'test',
	},
	{
		type: 'input',
		message: 'What is your Github Username?',
		name: 'github',
	},
	{
		type: 'input',
		message: 'Please enter in your email',
		name: 'email',
	},
];

const createReadme = (data) => {
	var license = '';
	var licenseTXT = '';
	switch (data.license[0]) {
		case 'BSD':
			license =
				'[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
			licenseTXT = `[BSD License](https://opensource.org/licenses/BSD-3-Clause)`;
			break;
		case 'MIT':
			license =
				'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
			licenseTXT = `[MIT License](https://opensource.org/licenses/MIT)`;
			break;
		case 'GPL':
			license =
				'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
			licenseTXT = `[GPL License](https://www.gnu.org/licenses/gpl-3.0)`;

			break;
		default:
			license = 'No License Chosen';
			licenseTXT = ``;

			break;
	}
	fs.writeFileSync(
		'./readme.md',
		`# ${data.project}
${license}
## Table of Contents 
- [Description](#description) 
- [Application Preview](#application-preview)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test Instructions](#test-instructions)
- [Questions](#questions)
- [License](#license)

## Description
- ${data.description}

## Application Preview
<img alt="README Gen Demo 1" src="${data.preview}">node 

## Installation
- ${data.install}

## Usage
- ${data.usage}

## Contributing
- ${data.contribute}

## Test Instructions
- ${data.test}

## Contact Me:
- Github Username: ${data.github}<br/>
- Github Link: https://github.com/${data.github}<br/> 
- Email: ${data.email}<br/>

## License
- Copyright 2022 Connor Mitchener
- Licensed under the: ${licenseTXT} 
`
	);
};

// CLI Prompts
inquirer.prompt(questions).then((data) => {
	createReadme(data);
	const filename = `${data.project.toLowerCase().split(' ').join('')}.json`;

	fs.writeFileSync(filename, JSON.stringify(data, null, '\t'), (err) =>
		err ? console.log(err) : console.log('Success!')
	);
});
