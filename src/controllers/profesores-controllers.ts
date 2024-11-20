import { Request, Response } from "express";
import { Profesor } from "../models/profesores-models";

class ProfesorController {

    constructor() { };

    async consultar ( req : Request , res : Response ) {
        try {
            const registros = await Profesor.find();

            if ( !registros || registros.length == 0 )
                throw new Error(`No se encuntran profesores listados en el sistema`);
            
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

            const registro = await Profesor.findOneBy({ id : Number(id) });

            if ( !registro )
                throw new Error(`No se encontro el profesor con id ${ id }`);

            res.status(200).json( registro );

        } catch ( err ) {
            if ( err instanceof Error ) {
                res.status(400).json({ error : err.message });
            } else {
                res.status(500).json({ error : 'Error desconocido' });
            };
        };
    };

    async ingresar( req : Request , res : Response) {
        try {
            const registro = await Profesor.save( req.body );

            if ( !registro )
                throw new Error('Error al ingreasar un profesor');

            res.status(201).json( registro );
        
        } catch (err) {
            if ( err instanceof Error ) {
                res.status(400).json({ error : err.message });
            } else {
                res.status(500).json({ error : 'Error desconocido' });
            };
        };
    };

    async actualizar ( req : Request , res : Response ) {
        try {
            const { id } = req.params;
            
            const registro = await Profesor.findOneBy({ id : Number(id) });

            if ( !registro )
                throw new Error(`No se encontro el profesor con id ${ id }`);

            const registroActualizado = await Profesor.update({ id : Number( id )}, req.body );

            if ( !registroActualizado )
                throw new Error(`Error al actualizar profesor con id ${ id }`);

            res.status(200).json({ msg : 'Registro actualizado con exito!' });

        } catch ( err ) {
            if ( err instanceof Error ) {
                res.status(400).json({ error : err.message });
            } else {
                res.status(500).json({ error : 'Error desconocido'});
            };
        };
        
    };

    async eliminar ( req : Request , res : Response ) {
        try {
            const { id } = req.params;
            
            const registro = await Profesor.findOneBy({ id : Number(id) });

            if ( !registro )
                throw new Error(`No se encontro el profesor con id ${ id }`);

            const registroEliminado = await Profesor.delete({ id : Number( id )} );

            if ( !registroEliminado )
                throw new Error(`Error al eliminar profesor con id ${ id }`);

            res.status(200).json({ msg : 'Registro eliminado con exito!' });

        } catch ( err ) {
            if ( err instanceof Error ) {
                res.status(400).json({ error : err.message });
            } else {
                res.status(500).json({ error : 'Error desconocido'});
            };
        };

    };

}

export default new ProfesorController();