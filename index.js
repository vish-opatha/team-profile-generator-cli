// Linking required packages and classes
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require ("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateMarkupText = require('./generateMarkup.js');
let team = [];

// Questions to create Manager object
const mgrQuestions = [
    { type: 'input', name: 'mgrName', message: "What's the team manager's name?",
        validate(value) {
        const pass = value.match(/^[a-zA-Z]+$/);
        if (pass) {
          return true;
        }
        return `Please enter the manager's name`;
       },
    },
    { type: 'input', name: 'mgrId', message: "What's the team manager's Id?", },
    { type: 'input', name: 'mgrEmail', message: "What's the team manager's email?",
        validate(value) {
          const pass = value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
          if (pass) {
            return true;
          }
          return 'Please enter a valid email address';
        },
      },
    { type: 'input', name: 'phone', message: "What's your phone number?",
        validate(value) {
          const pass = value.match(
            /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
          );
          if (pass) {
            return true;
          }
          return 'Please enter a valid phone number! Enter 10 numbers.';
        },
      },
    ];

// Question to select the type of team member /^[a-z\u00C0-\u02AB'´`]+\.?\s([a-z\u00C0-\u02AB'´`]+\.?\s?)+$/
const questionsTeam = [
    { type: 'list', name: 'typeOfTeamMember', message: "What type of team member would you like to add?",
      choices: [`Engineer`, `Intern`, `I don't want to add anyone`],},];

// Questions to create an Engineer object
const engineerQuestions = [
    { type: 'input', name: 'eName', message: "What's your engineer's name?", 
      validate(value) {
        const pass = value.match(/^[a-zA-Z]+$/);
        if (pass) {
          return true;
        }
        return `Please enter the engineer's name`;
      },
    },
    { type: 'input', name: 'engId', message: "What's your engineer's Id?", },
    { type: 'input', name: 'engEmail', message: "What's your engineer's email?",
      validate(value) {
            const pass = value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
            if (pass) {
                return true;
            }
            return 'Please enter a valid email address';
        },
    }, 
    { type: 'input', name: 'gitHub', message: "What's your engineer's Github?",},];

// Questions to create an Intern object   
const internQuestions = [
    { type: 'input', name: 'iName', message: "What's your intern's name?",
      validate(value) {
        const pass = value.match(/^[a-zA-Z]+$/);
        if (pass) {
          return true;
        }
        return `Please enter the intern's name`;
      },
    },
    { type: 'input', name: 'intId', message: "What's your intern's Id?", },
    { type: 'input', name: 'intEmail', message: "What's your intern's email?",
      validate(value) {
        const pass = value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        if (pass) {
            return true;
        }

        return `Please enter a valid email address`;
        },
    },
    { type: 'input', name: 'school', message: "What's your intern's school?",
      validate(value) {
        const pass = value.match(/^[a-zA-Z]+$/);
        if (pass) {
          return true;
        }
        return `Please enter the school.`;
      },},
    ];

// Function to write team details to HTML
function writeToHtml(fileName, data) {
      const markUpText = generateMarkupText(data);
      fs.writeFile(fileName,markUpText,(err)=>
      err ? console.log(err) : console.log('You have successfully created your team!'));
};


// Function to create the other members except the manager
function buildTeam(){
    inquirer.prompt(questionsTeam).then((answers) => {
        // If the selected team member is an engineer
        if(answers.typeOfTeamMember ==='Engineer') {
            inquirer.prompt(engineerQuestions).then((answers) => {
                let engObj = new Engineer(answers.engId,answers.eName,answers.engEmail,answers.gitHub);
                team.push(JSON.stringify(engObj));
                // team.push(engObj);    
                }).then(() => { buildTeam(); }); 
        }

        // If the selected team member is an intern
        else if(answers.typeOfTeamMember === 'Intern') {
            inquirer.prompt(internQuestions).then((answers) => {
                let internObj = new Intern(answers.intId, answers.iName, answers.intEmail,answers.school);
                team.push(JSON.stringify(internObj));
                //team.push(internObj);
                }).then(() => { buildTeam(); }); 
        }
        
        // If the user selects No one to add to the team html file will be created.
        else {
            let filename = "index.html";
            console.log(team);
            // Function buildTeam is supposed to be called here.
            // writeToHtml(fileName, team)
        }
    });
}

// Initiallization function 
function init() {
    inquirer.prompt(mgrQuestions).then((answers) => {
        let mgrObj = new Manager(answers.mgrId,answers.mgrName,answers.mgrEmail,answers.phone);
        team.push(JSON.stringify(mgrObj));
        }).then(()=>{
            buildTeam();});      
};

// Function call to initialize the application
init(); 

  


  

