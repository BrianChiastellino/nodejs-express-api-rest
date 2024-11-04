import express from 'express';
import cors from 'cors';

import estudiantesRoutes from './routes/estudiantes-routes.js';
import profesoresRoutes from './routes/profesores-routes.js';

const app = express();
const PORT = 6500;

app.use( express.json() );
app.use( cors() )

app.use( '/estudiantes', estudiantesRoutes );
app.use( '/profesores', profesoresRoutes );






app.listen( PORT, () => {
    console.log(`App is running on port ${ PORT }`);
});