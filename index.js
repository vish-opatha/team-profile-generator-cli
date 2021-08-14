// Linking required packages and classes
const inquirer = require("inquirer");
// const chalkPipe = require('chalk-pipe');
const Manager = require("./lib/Manager");
const Engineer = require ("./lib/Engineer");
const intern = require("./lib/Intern");
let team = [];

const questions = [
    {
      type: 'input',
      name: 'manager',
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
    },
  ];

  const engineerQuestions = [
    { type: 'input', name: 'engineer', message: "What's your engineer's name?", },
    { type: 'input', name: 'engId', message: "What's your engineer's Id?", },
    { type: 'input', name: 'engEmail', message: "What's your engineer's email?",},
    { type: 'input', name: 'gitHub', message: "What's your engineer's Github?",},
  ];

  const internQuestions = [
    { type: 'input', name: 'intern', message: "What's your intern's name?", },
    { type: 'input', name: 'intId', message: "What's your intern's Id?", },
    { type: 'input', name: 'intEmail', message: "What's your intern's email?",},
    { type: 'input', name: 'school', message: "What's your intern's school?",},
  ];

  inquirer.prompt(questions).then((answers) => {
      team.push(JSON.stringify(answers));
  }).then(()=>{
    buildTeam();
        // if(anwersTwo.typeOfTeamMember ==='Engineer')
        // {
        //     inquirer.prompt(engineerQuestions).then((answers) => {
        //         team.push(JSON.stringify(answers));
        //     }).then(()=>{
        //          buildTeam();
        //     }); 
        //     // buildTeam();  
        // }
    });
  

  

  
  function buildTeam(){
    inquirer.prompt(questionsTeam).then((answers) => {
        if(answers.typeOfTeamMember ==='Engineer')
        {
            inquirer.prompt(engineerQuestions).then((answers) => {
                team.push(JSON.stringify(answers));
                
            }).then(()=>{
                buildTeam();
            }); 
              
        }

        else if(answers.typeOfTeamMember === 'Intern'){
            inquirer.prompt(internQuestions).then((answers) => {
                team.push(JSON.stringify(answers));
            }).then(()=>{
                buildTeam();
            }); 
        }
        
        else{
            console.log(team);
        }
      });
  }

 
  


  

