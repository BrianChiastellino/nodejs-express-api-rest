# API REST - Gestión de Estudiantes, Profesores y Cursos

Este repositorio contiene una API REST desarrollada con **Node.js**, **Express** y **MySQL**, que permite realizar operaciones CRUD para gestionar estudiantes, profesores y cursos, además de manejar relaciones complejas entre estas entidades.

### Tabla de contenidos
- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Características](#características)

## Descripción
Esta API REST permite gestionar una base de datos de estudiantes, profesores y cursos. Incluye operaciones CRUD completas y relaciones **muchos a muchos** entre estudiantes y cursos, modeladas mediante una tabla relacional `estudiantes_cursos`. El proyecto está diseñado para familiarizarme con la estructura y funcionamiento de una API RESTful en el backend, utilizando un stack moderno y robusto.

## Tecnologías
- **Node.js** - Entorno de ejecución para JavaScript en el servidor.
- **Express** - Framework para gestionar las rutas y controladores de la API.
- **MySQL** - Base de datos relacional para almacenar los datos de estudiantes, profesores y cursos.

## Características
- CRUD completo para **estudiantes**, **profesores** y **cursos**.
- Relación **muchos a muchos** entre estudiantes y cursos mediante la tabla `estudiantes_cursos`.
- Rutas organizadas y estructuradas siguiendo buenas prácticas.
- Código modular para facilitar la escalabilidad.
- Manejo de **CORS** para permitir acceso seguro desde diferentes orígenes.
- Patrones de diseño Singleton y MVC
