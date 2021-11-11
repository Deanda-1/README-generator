DROP DATABASE IF EXISTS employer_db;
CREATE DATABASE employer_db;

USE employer_db;

CREATE TABLE dept (
  id INT auto_increment primary KEY NOT NULL,
  name VARCHAR(30) NOT NULL
);
CREATE TABLE role (
   id INT auto_increment primary KEY NOT NULL,
  role_title VARCHAR(30) NOT NULL,
  salary decimal(10,2) NOT NULL,
  dept_id INT NOT NULL
);
CREATE TABLE employee (
   id INT auto_increment primary KEY NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id int null,
  manager_id int NULL
);

insert into dept (name) values ("Human Resources"), ("Research-Development");

insert into role (role_title, salary, dept_id) values ('HR employee', 80000, 1),
('HR manager', 100000, 1),
('RD manager', 150000, 2),
('RD employee',85000, 2);
insert into employee (first_name, last_name, role_id, manager_id) values 
('Fred', 'Forhead', 2, null),
('Mike', 'Goatnose', 3, null),
('Bob', 'Bigfeet',1,1),
('George', 'Badbreath',4,2);



