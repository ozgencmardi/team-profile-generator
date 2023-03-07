// TODO: Write Code to gather information about the development team members, and render the HTML file.

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const employees = [];

function promptForManager() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the manager's name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is the manager's ID?",
      name: "id"
    },
    {
      type: "input",
      message: "What is the manager's email address?",
      name: "email"
    },
    {
      type: "input",
      message: "What is the manager's office number?",
      name: "officeNumber"
    }
  ]).then(answers => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    employees.push(manager);
    promptForEmployee();
  });
}

function promptForEmployee() {
  inquirer.prompt([
    {
      type: "list",
      message: "What is the employee's role?",
      name: "role",
      choices: [
        "Engineer",
        "Intern",
        "I don't want to add any more employees"
      ]
    }
  ]).then(answer => {
    switch (answer.role) {
      case "Engineer":
        promptForEngineer();
        break;
      case "Intern":
        promptForIntern();
        break;
      default:
        generateHtml();
    }
  });
}

function promptForEngineer() {
    inquirer.prompt([
        {
          type: "input",
          message: "What is the engineer's name?",
          name: "name"
        },
        {
          type: "input",
          message: "What is the engineer's ID?",
          name: "id"
        },
        {
          type: "input",
          message: "What is the engineer's email address?",
          name: "email"
        },
        {
          type: "input",
          message: "What is the engineer's GitHub username?",
          name: "github"
        }
      ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        employees.push(engineer);
        
      });
      
  
}

function promptForIntern() {
    inquirer.prompt([
        {
          type: "input",
          message: "What is the intern's name?",
          name: "name"
        },
        {
          type: "input",
          message: "What is the intern's ID?",
          name: "id"
        },
        {
          type: "input",
          message: "What is the intern's email address?",
          name: "email"
        },
        {
          type: "input",
          message: "What is the intern's school?",
          name: "school"
        }
      ]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        employees.push(intern);

      });
      
}

function generateHtml() {
  const html = render(employees);
  fs.writeFile(outputPath, html, err => {
    if (err) throw err;
    console.log("Team HTML generated successfully!");
  });
}

promptForManager();
