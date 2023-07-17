USE employee_db;

INSERT INTO department (name)
VALUES ("Sales"), ("Engineering"), ("HR");

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 80000, 1), ("Engineer", 70000, 2), ("HR", 60000, 3),
       ("Sales Representative", 60000, 1), ("Senior Engineer", 90000, 2), ("HR Assistant", 50000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, NULL), ("Jane", "Doe", 2, 1), ("Jim", "Brown", 3, 1),
       ("Jack", "Black", 4, 1), ("Jake", "White", 5, 2), ("Jill", "Green", 6, 3),
       ("Joe", "Red", 2, 1), ("June", "Pink", 3, 1), ("Jerry", "Purple", 5, 2),
       ("Jenny", "Yellow", 6, 3), ("Jeff", "Blue", 4, 1), ("Jade", "Grey", 5, 2);
