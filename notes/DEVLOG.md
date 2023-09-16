# Dev Logs 

This are notes about how daily documentations

## 9.16.2023

### Database Design 

This is a proposal for the database design, this application uses SQL (PostgreSQL as DBMS)

**Important Note:**

This database has intentionally not undergone full normalization, as it is part of the primary Minimum Viable Product (MVP) phase. According to our current business logic and requirements, normalization has been omitted for the original database extracts.

Decisions made here can we change in the future. 


### Tables | Objects | Collections

Label: "Usuarios"  
Name: User

Represents an application user for this time only all users can be admins, theres' no role or profile settings yet.

- first_Name
- last_Name
- email
- password 
- created_date
- modified_date
- isActive

Label: "Cursos Matriculados por Estudiantes"  
Name: course_x_student
-	Periodo
-	Id
-	Tipo_doc
-	No_doc
-	Nombre
-	Apellido
-	Tipo_est
-	Situacion_academica
-	Programa
-	Email
-	Correo_utb
-	Countnrcperperiodo
-	Sumcreditosperperiodo
-	Nrc
-	Materia
-	Curso
-	Seccion
-	Nombre Asig
-	Cupo_max
-	Creditos
-	Creditos_sfaregs
-	Cred_matri_periodo
-	Tipo
-	Campo
-	Fecha_hora
-	Fecha_agregacion
-	Codigo_docente
-	Nombre_docente





## 9.14.2023
