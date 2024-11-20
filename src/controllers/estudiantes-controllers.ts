import { Request, Response } from "express";
import { Estudiante } from "../models/estudiantes-models";

class EstudianteController {

    constructor() { };

    async consultar ( req : Request , res : Response ) {
        try {
            const registros = await Estudiante.find();

            if ( !registros || registros.length == 0 )
                throw new Error('No se encontaron estudiantes listados en el sistema');

            res.status(200).json( registros ); 
        } catch ( err ) {
            if ( err instanceof Error ) {
                res.status(400).json({ error : err.message });
            } else {
                res.status(500).json({ error : 'Error desconocido' });
            };
        };
    };

    async consultarDetalle ( req : Request , res : Response ) {
        try {
            const { id } = req.params;
            const registro = await Estudiante.findOneBy({ id : Number(id) });

            if ( !registro )
                throw new Error(`No se encontro el estudiante con id ${ id }`);

            res.status(200).json( registro );

        } catch ( err ) {
            if (err instanceof Error) {
                res.status(400).json({ error: err.message });
            } else {
                res.status(500).json({ error: 'Error desconocido' }); 
            }
        }
    };

    async ingresar( req : Request , res : Response) {
        try {
  
            const registro = await Estudiante.save( req.body );
            
            if ( !registro ) 
                throw new Error('Error al ingresar un estudiante');

            res.status(201).json( registro );
            
        } catch (err) {
            if ( err instanceof Error ) {}
        };
    };

    async actualizar ( req : Request , res : Response ) {
        try {
            const { id } = req.params;
            const registro = await Estudiante.findOneBy({ id : Number(id )});
            
            if ( !registro )
                throw new Error(`No se encontro estudiante con id ${ id }`);

            const regitroActualizado = await Estudiante.update( { id : Number(id) }, req.body );

            if ( !regitroActualizado )
                throw new Error('Error al actualizar el estudiante');

            res.status(200).json({ msg : 'Registro actualizado con exito!' });
            

        } catch ( err ) {
            if (err instanceof Error) {
                res.status(400).json({ error: err.message });
            } else {
                res.status(500).json({ error: 'Error desconocido' }); 
            }
        };
        
    };

    async eliminar ( req : Request , res : Response ) {
        try {
            const { id } = req.params;
            const registro = await Estudiante.findOneBy({ id : Number( id )});
            
            if ( !registro )
                throw new Error(`No se encontro estudiante con id ${ id }`);

            const registroEliminado = await Estudiante.delete({ id : Number( id )});

            if ( !registroEliminado )
                throw new Error('Error al eliminar al estudiante');

            res.status(200).json({ msg: 'Registro eliminado con exito!'});

        } catch ( err ) {
            if (err instanceof Error) {
                res.status(400).json({ error: err.message });
            } else {
                res.status(500).json({ error: 'Error desconocido' }); 
            }
        };

    };

}

export default new EstudianteController();