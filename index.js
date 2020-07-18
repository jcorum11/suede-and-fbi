const inquirer = require("inquirer");
const cTable = require("console.table");
const {
    getDepartments,
    postDepartments
} = require("./utils/departments");
const {
    getRoles,
    postRoles
} = require("./utils/roles");
const {
    getEmployees,
    postEmployees,
    putEmployees
} = require("./utils/employees");

const choices = [
    "view all departments",
    "view all roles",
    "view all employees",
    "add a department",
    "add a role",
    "add an employee",
    "update an employee role"
];

const startProgram = () => {
    inquirer.prompt([{
                type: "list",
                name: "choices",
                message: "What would you like to do?",
                choices: choices
            },
            {
                type: "input",
                name: "addDepartment",
                message: "What is the name of the new department?",
                when: answers => answers.choices === "add a department"
            },
            {
                type: "input",
                name: "addRole",
                message: "What is the name of the role?",
                when: answers => answers.choices === "add a role"
            },
            {
                type: "input",
                name: "arSalary",
                message: "What will be the salary of that role?",
                when: answers => answers.addRole
            },
            {
                type: "input",
                name: "arDepartmentId",
                message: "What will be the department id?",
                when: answers => answers.arSalary
            },
            {
                type: "input",
                name: "uerWhichEmployee",
                message: "What is the ID number of the employee would you like to update?",
                when: answers => answers.choices === "update an employee role"
            },
            {
                type: "input", 
                name: "uerNewRole", 
                message: "What is their new role ID?", 
                when: answers => answers.uerWhichEmployee
            },
            {
                type: "input",
                name: "aeFirst",
                message: "First name?",
                when: answers => answers.choices === "add an employee"
            },
            {
                type: "input",
                name: "aeLast",
                message: "Last name?",
                when: answers => answers.aeFirst
            },
            {
                type: "input",
                name: "aeRoleId",
                message: "Role ID?",
                when: answers => answers.aeLast
            },
            {
                type: "input",
                name: "aeManagerId",
                message: "Manager ID?",
                when: answers => answers.aeRoleId
            },
        ])
        .then(response => {
            switch (response.choices) {
                case "view all departments":
                    getDepartments();
                    startProgram();
                    break;

                case "view all roles":
                    getRoles();
                    startProgram();
                    break;

                case "view all employees":
                    getEmployees()
                    startProgram();
                    break;

                case "add a department":
                    var body = {
                        name: response.addDepartment
                    }
                    postDepartments(body);
                    startProgram();
                    break;

                case "add a role":
                    body = {
                        title: response.addRole, 
                        salary: response.arSalary, 
                        departmentId: response.arDepartmentId
                    };
                    postRoles(body);
                    startProgram();
                    break;

                case "add an employee":
                    body = {
                        firstName: response.aeFirst, 
                        lastName: response.aeLast, 
                        roleId: response.aeRoleId, 
                        managerId: response.aeManagerId
                    }
                    postEmployees(body);
                    startProgram();
                    break;

                case "update an employee role":
                    body = {
                        employeeId: response.uerWhichEmployee, 
                        roleId: response.uerNewRole
                    };
                    putEmployees(body);
                    startProgram();
                    break;
                
                default:
                    
                startProgram();
            }
        })
}
startProgram();