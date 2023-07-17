const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);

function start() {
  inquirer.prompt({
    name: 'action',
    type: 'list',
    message: 'What would you like to do?',
    choices: [
      'View all departments',
      'View all roles',
      'View all employees',
      'Add a department',
      'Add a role',
      'Add an employee',
      'Update an employee role',
      'Exit'
    ],
  }).then(function (answer) {
    switch (answer.action) {
      case 'View all departments':
        viewAllDepartments();
        break;
      case 'View all roles':
        viewAllRoles();
        break;
      case 'View all employees':
        viewAllEmployees();
        break;
      case 'Add a department':
        addDepartment();
        break;
      case 'Add a role':
        addRole();
        break;
      case 'Add an employee':
        addEmployee();
        break;
      case 'Update an employee role':
        updateEmployeeRole();
        break;
      case 'Exit':
        db.end();
        break;
    }
  });
}

function viewAllDepartments() {
    const query = 'SELECT * FROM department';
    db.query(query, function(err, res) {
      if (err) throw err;
      console.table(res);
      start();
    });
  }
  
  function viewAllRoles() {
    const query = 'SELECT role.*, department.name AS department FROM role LEFT JOIN department ON role.department_id=department.id';
    db.query(query, function(err, res) {
      if (err) throw err;
      console.table(res);
      start();
    });
  }
  
  function viewAllEmployees() {
    const query = 'SELECT employee.*, role.title, role.salary, department.name AS department FROM employee LEFT JOIN role ON employee.role_id=role.id LEFT JOIN department ON role.department_id=department.id';
    db.query(query, function(err, res) {
      if (err) throw err;
      console.table(res);
      start();
    });
  }
  
  function addDepartment() {
    inquirer.prompt({
      name: 'name',
      type: 'input',
      message: 'Enter the name of the department:'
    }).then(function(res) {
      const query = 'INSERT INTO department SET ?';
      db.query(query, { name: res.name }, function(err) {
        if (err) throw err;
        console.log('Department added successfully!');
        start();
      });
    });
  }
  
  function addRole() {
    inquirer.prompt([
      {
        name: 'title',
        type: 'input',
        message: 'Enter the title of the role:'
      },
      {
        name: 'salary',
        type: 'input',
        message: 'Enter the salary for the role:'
      },
      {
        name: 'department_id',
        type: 'input',
        message: 'Enter the id of the department for this role:'
      }
    ]).then(function(res) {
      const query = 'INSERT INTO role SET ?';
      db.query(query, { title: res.title, salary: res.salary, department_id: res.department_id }, function(err) {
        if (err) throw err;
        console.log('Role added successfully!');
        start();
      });
    });
  }
  
  function addEmployee() {
    inquirer.prompt([
      {
        name: 'first_name',
        type: 'input',
        message: 'Enter the first name of the employee:'
      },
      {
        name: 'last_name',
        type: 'input',
        message: 'Enter the last name of the employee:'
      },
      {
        name: 'role_id',
        type: 'input',
        message: 'Enter the role id of the employee:'
      },
      {
        name: 'manager_id',
        type: 'input',
        message: 'Enter the manager id of the employee (or leave blank if none):'
      }
    ]).then(function(res) {
      const query = 'INSERT INTO employee SET ?';
      db.query(query, { first_name: res.first_name, last_name: res.last_name, role_id: res.role_id, manager_id: res.manager_id || null }, function(err) {
        if (err) throw err;
        console.log('Employee added successfully!');
        start();
      });
    });
  }
  
  function updateEmployeeRole() {
    inquirer.prompt([
      {
        name: 'employee_id',
        type: 'input',
        message: 'Enter the id of the employee you want to update:'
      },
      {
        name: 'role_id',
        type: 'input',
        message: 'Enter the new role id for the employee:'
      }
    ]).then(function(res) {
      const query = 'UPDATE employee SET role_id = ? WHERE id = ?';
      db.query(query, [res.role_id, res.employee_id], function(err) {
        if (err) throw err;
        console.log('Employee role updated !');
        start();
      });
    });
  }
  
start();
