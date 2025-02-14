CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY, -- 'id' is a primary key column with integer type that auto-increments with each new record, uniquely identifying each record.
    studentId VARCHAR(50) NOT NULL UNIQUE, -- 'studentId' stores a unique identifier for each student, cannot be NULL, and must be unique across all records.
    name VARCHAR(100) NOT NULL, -- 'name' stores the student's name, cannot be NULL, and can accept up to 100 characters.
    email VARCHAR(100) NOT NULL UNIQUE, -- 'email' stores the student's email, must be unique and not NULL, can accept up to 100 characters.
    password VARCHAR(100) NOT NULL -- 'password' stores the student's password, cannot be NULL, can accept up to 100 characters.
);
