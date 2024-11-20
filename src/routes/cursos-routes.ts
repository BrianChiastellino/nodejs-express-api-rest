import express from 'express';

import cursosControllers from '../controllers/cursos-controllers';

const router = express.Router();

router.get('/', cursosControllers.consultar );

router.get('/consultarEstudiante', cursosControllers.consultarEstudinateEnCurso );
router.post('/registraEstudiante', cursosControllers.asociarEstudiante );

router.route('/:id')
    .get( cursosControllers.consultarDetalle )
    .put( cursosControllers.actualizar )
    .delete( cursosControllers.eliminar );

export default router;
