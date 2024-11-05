import express from 'express';
import cors from 'cors';

import estudiantesRoutes from './routes/estudiantes-routes.js';
import profesoresRoutes from './routes/profesores-routes.js';
import cursosRoutes from './routes/cursos-routes.js'

const app = express();
const PORT = process.env.PORT;

app.use( express.json() );
app.use( cors() );

app.use('/cursos', cursosRoutes );
app.use( '/estudiantes', estudiantesRoutes );
app.use( '/profesores', profesoresRoutes );


app.listen( PORT, () => {
    console.log(`App is running on port ${ PORT }`);
});