DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;
USE employees

CREATE TABLE departments (
    id INTEGER(11) AUTO_INCREMENT NOT NULL, 
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INTEGER(11) AUTO_INCREMENT NOT NULL, 
    title VARCHAR(50) NOT NULL, 
    salary DECIMAL NOT NULL, 
    department_id INTEGER,
    PRIMARY KEY (id), 
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL
);

CREATE TABLE employees (
    id INTEGER(11) AUTO_INCREMENT NOT NULL, 
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL, 
    role_id INTEGER, 
    manager_id INTEGER,
    PRIMARY KEY (id), 
    CONSTRAINT fk_roles FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL, 
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employees_id ON DELETE SET NULL
);