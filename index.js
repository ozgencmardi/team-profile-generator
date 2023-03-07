const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const Employee = require("./lib/Employee");


inquirer.prompt([
    {
      type: "input",
      message: "What is the employee's name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is the employee's ID?",
      name: "id"
    },
    {
      type: "input",
      message: "What is the employee's email address?",
      name: "email"
    },
    {
      type: "list",
      message: "What is the employee's role?",
      name: "role",
      choices: [
        "Manager",
        "Engineer",
        "Intern"
      ]
    }
  ]).then(answers => {
    // code to create the appropriate employee object based on the selected role
  });
  

const employees = [];
