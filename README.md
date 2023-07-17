# EmployeeTracker


## Video Demo

https://drive.google.com/file/d/1vtA76tQkscCtQ21B6KOyLY26EJfxU3DB/view

## Screenshots Of App

![image](https://github.com/RMosley912/EmployeeTracker/assets/122495055/5a280ccb-40bd-46d6-881a-69ccc2d70fea)


![image](https://github.com/RMosley912/EmployeeTracker/assets/122495055/5dc3addd-02e1-400f-93a8-921efcabe57a)

# Employee Tracker

## Description
Employee Tracker is a command-line application that provides an easy-to-use interface for non-developers to view and interact with information stored in a MySQL database. The application is built using Node.js and is powered by Inquirer.js for prompts and MySQL for data storage and retrieval. It allows users to view and manage the departments, roles, and employees in their company.

## Features
- View all departments
- View all roles
- View all employees
- Add a department
- Add a role
- Update an employee role

## Installation
Ensure you have [Node.js](https://nodejs.org/en/download/) and [MySQL](https://dev.mysql.com/downloads/mysql/) installed on your machine.

Clone my repo and navigate to the directory via command line, then run the following command:

```
npm install
```

This will install the necessary packages, Inquirer and MySQL, for the application to run.

Next, navigate to the `index.js` file, open it in your preferred text editor and enter your MySQL username and password.

```javascript
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: '<Your MySQL username here>',
  password: '<Your MySQL password here>',
  database: 'employeeTrackerDB',
});
```

Now, check it to make sure that MySQL server is running.

## Usage
To run the application, use the following command:

```
node index.js
```

Follow the prompts to view departments, roles, employees, or add/update information.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
MIT

## Contact Information
If you have any questions, concerns, or would like to make a contribution, please feel free to reach out by opening an issue on GitHub or by sending an email at [youremail@domain.com](mailto:youremail@domain.com).

## Disclaimer
Remember to always create a backup of your data before running any tool that modifies your databases.

