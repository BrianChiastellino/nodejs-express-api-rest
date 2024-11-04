import express from 'express';


import profesoresControllers from '../controllers/profesores-controllers.js';

const router = express.Router();

router.get('/', profesoresControllers.consultar );

router.post('/', profesoresControllers.ingresar );


router.route('/:id')
    .get( profesoresControllers.consultarDetalle )
    .put( profesoresControllers.actualizar )
    .delete( profesoresControllers.eliminar );
    

export default router;