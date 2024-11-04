import express from 'express';


import estudiantesControllers from '../controllers/estudiantes-controllers.js';

const router = express.Router();

router.get('/', estudiantesControllers.consultar );

router.post('/', estudiantesControllers.ingresar );


router.route('/:id')
    .get( estudiantesControllers.consultarDetalle )
    .put( estudiantesControllers.actualizar )
    .delete( estudiantesControllers.eliminar );
    

export default router;