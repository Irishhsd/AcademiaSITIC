IF NOT EXISTS (SELECT 1 FROM sys.schemas WHERE name = 'Students')
BEGIN
	EXEC('CREATE SCHEMA Students')
END

IF NOT EXISTS (SELECT 1 FROM sys.schemas WHERE name = 'Courses')
BEGIN	-- begin end se puede omitir por ser una sola instruccion como csharp {}
	EXEC('CREATE SCHEMA Courses')
END	
	
	IF NOT EXISTS (SELECT 1 FROM sys.schemas WHERE name = 'Enrollments')
BEGIN
	EXEC('CREATE SCHEMA Enrollments')
END