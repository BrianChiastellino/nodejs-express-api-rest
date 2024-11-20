import express, { Request , Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';

import estudianteRoutes from './routes/estudiantes-routes';
import profesoresRoutes from './routes/profesores-routes';
import cursosRotues from './routes/cursos-routes';

const app = express();

app.use( cors() );
app.use( morgan('dev') );
app.use( express.json() );

app.get('/', ( req : Request, res : Response ) => {
    res.send('hola mundo');
});

app.use('/estudiantes', estudianteRoutes );
app.use('/profesores', profesoresRoutes );
app.use('/cursos', cursosRotues );

export default app;


