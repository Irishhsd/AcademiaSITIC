CREATE DATABASE Exercises;

USE Exercises;

CREATE TABLE [User]
(
UserId INT PRIMARY KEY IDENTITY(1,1),
UserName VARCHAR(50) NOT NULL,
Password VARCHAR(50) NOT NULL
);

IF NOT EXISTS (SELECT 1 
               FROM dbo.sysobjects 
               WHERE id = OBJECT_ID(N'[dbo].[Students]') 
               AND OBJECTPROPERTY(id, N'IsUserTable') = 1)
BEGIN

-- Create Students Table
CREATE TABLE [dbo].[Students]
(
    StudentId      INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    Name           VARCHAR(150) NOT NULL,
    DateOfBirth    DATE NOT NULL,
    Email          VARCHAR(100)
);

-- Create Courses Table
CREATE TABLE [dbo].[Courses]
(
    CourseId       INT PRIMARY KEY IDENTITY(1,1),
    Name           VARCHAR(150) NOT NULL,
    Credits        INT
);

-- Create Enrollments Table
CREATE TABLE [dbo].[Enrollments]
(
    EnrollmentId     INT PRIMARY KEY IDENTITY(1,1),  -- Corrected column name
    StudentId        INT,
    CourseId         INT,
    EnrollmentDate   DATE NOT NULL,
    FOREIGN KEY (StudentId) REFERENCES Students(StudentId),
    FOREIGN KEY (CourseId) REFERENCES Courses(CourseId)
);

-- Retrieve Data from Tables
SELECT * FROM Students;
SELECT * FROM Courses;
SELECT * FROM Enrollments;