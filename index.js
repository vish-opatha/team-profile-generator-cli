// Linking required packages and classes
const inquirer = require("inquirer");
// const chalkPipe = require('chalk-pipe');
const Manager = require("./lib/Manager");
const Engineer = require ("./lib/Engineer");
const intern = require("./lib/Intern");

const questions = [
    {
      type: 'input',
      name: 'mgrName',
      message: "What's the team manager's name?",
    },
    {
      type: 'input',
      name: 'mgrId',
      message: "What's the team manager's Id?",
    //   default() {
    //     return 'Doe';
    //   },
    },
    {
      type: 'input',
      name: 'mgrEmail',
      message: "What's the team manager's email?",
    //   transformer(color, answers, flags) {
    //     const text = chalkPipe(color)(color);
    //     if (flags.isFinal) {
    //       return text + '!';
    //     }
  
    //     return text;
    //   },
    },
    {
      type: 'input',
      name: 'phone',
      message: "What's your phone number",
      validate(value) {
        const pass = value.match(
          /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
        );
        if (pass) {
          return true;
        }
  
        return 'Please enter a valid phone number! Avoid using spces or hyphens in between.';
      },
    },
  ];

  const questionsTeam = [
    {
        type: 'list',
        name: 'typeOfTeamMember',
        message: "What type of team member would you like to add?",
        choices: [`Engineer`, `Intern`, `I don't want to add anyone`],
        loop: true,
    },

  ]

//   inquirer.prompt(questions).then((answers) => {
//     console.log(JSON.stringify(answers, null, '  '));
//   });
  function buildTeam(){
    inquirer.prompt(questionsTeam).then((answers) => {
        if(answers.typeOfTeamMember ==='Engineer')
        {
            console.log('eng');
            buildTeam();
        }

        else if(answers.typeOfTeamMember === 'Intern'){
            console.log('Intern');
            buildTeam();
        }
        
        else{
            console.log('This will end');
        }
      });
  }

  buildTeam();
  


  

