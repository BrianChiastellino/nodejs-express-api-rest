import { DataSource } from 'typeorm';
import { Curso } from '../models/cursos-models';
import { Profesor } from '../models/profesores-models';
import { Estudiante } from '../models/estudiantes-models';

export const AppDataSource = new DataSource({
    type        : 'mysql',
    host        : process.env.DB_HOST,
    port        : Number(process.env.DB_PORT),
    username    : process.env.DB_USER,
    password    : process.env.DB_PASSWORD,
    database    : process.env.DB_DATABASE,
    logging     : true,
    entities    : [Estudiante, Profesor, Curso],
    synchronize :   false,
});


