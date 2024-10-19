DECLARE @StudentId INT,
		@CourseId INT,
		@EnrollmentId INT,
		@EnrollmentDate DATE = GETDATE()

--EXEC [Students].[Insert] 'María Villaseñor 2', '19960602', 'maría@sitic.com', @StudentId OUTPUT
--EXEC [Courses].[Insert] 'Mate', 100, @CourseId OUTPUT
--EXEC [Enrollments].[Insert] @StudentId, @CourseId, @EnrollmentDate, @EnrollmentId OUTPUT

EXEC [Students].[Update] 1, 'Alberto', '19960602', 'alberto@sitic.com'
EXEC [Courses].[Update] 2, 'AcademiaSITIC', 100
EXEC [Enrollments].[Update] @StudentId = 2, @CourseId, @EnrollmentDate, @EnrollmentId OUTPUT

SELECT * FROM Students
SELECT * FROM Courses
SELECT * FROM Enrollments


