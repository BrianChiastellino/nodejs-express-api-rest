CREATE DATABASE nodejs_express_freeCodeCamp;

USE nodejs_express_freeCodeCamp;

CREATE TABLE estudiantes(
	id int auto_increment,
    dni varchar(64),
    nombre varchar(64),
    apellido varchar(64),
    email varchar(128),
    primary key (id)
);

CREATE TABLE profesores (
	id int auto_increment,
    dni varchar(64),
    nombre varchar(64),
    apellido varchar(64),
    email varchar(128),
    profesion varchar(128),
    telefono varchar(64),
    primary key (id)
);

CREATE TABLE cursos (
	id int auto_increment,
	nombre varchar(64),
    descripcion text,
    profesor_id int,
    primary key (id)
);

ALTER TABLE cursos
ADD CONSTRAINT CURSOS_PROFESORES_FK
FOREIGN KEY (profesor_id)
REFERENCES profesores(id);

CREATE TABLE CURSOS_ESTUDIANTES (
	curso_id int,
    estudiante_id int,
    primary key ( curso_id, estudiante_id )
);

ALTER TABLE cursos_estudiantes
ADD CONSTRAINT cursos_estudiantes_cursos_fk
FOREIGN KEY (curso_id) REFERENCES cursos(id);

ALTER TABLE cursos_estudiantes
ADD CONSTRAINT cursos_estudiantes_estudiantes_fk
FOREIGN KEY (estudiante_id) REFERENCES estudiantes(id);

