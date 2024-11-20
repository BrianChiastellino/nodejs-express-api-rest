import { Request, Response } from "express";
import { Curso } from "../models/cursos-models";
import { Estudiante } from "../models/estudiantes-models";


class CursosController {

    constructor() { };

    async consultar ( req : Request , res : Response ) {
        try {
            const registros = await Curso.find();

            if ( !registros || registros.length == 0 )
                throw new Error(`No se encuentran cursos listados en el sistema`);
            
            res.status(200).json( registros );

        } catch ( err ) {
            if ( err instanceof Error ) {
                res.status(400).json({ error : err.message });
            } else {
                res.status(500).json({ error : 'Error desconocido' });
            };
        }
    };

    async consultarEstudinateEnCurso ( req : Request , res : Response ) {
        
    };

    async consultarDetalle ( req : Request , res : Response ) {
        try {
            const { id } = req.params;

            const registro = await Curso.findOneBy({ id : Number(id) });

            if ( !registro )
                throw new Error(`No se encontro el curso con id ${ id }`);

            res.status(200).json( registro );

                  
        } catch ( err ) {
            if ( err instanceof Error ) {
                res.status(400).json({ error : err.message });
            } else {
                res.status(500).json({ error : 'Error desconocido' });
            };
        }
    };

    async ingresar ( req : Request , res : Response ) {
        try {
            const registro = await Curso.save( req.body );
            
            if ( !registro )
                throw new Error(`Error al ingresar un curso`);

            res.status(200).json( registro );
            
        } catch ( err ) {
            if ( err instanceof Error ) {
                res.status(400).json({ error : err.message });
            } else {
                res.status(500).json({ error : 'Error desconocido' });
            };
        }
    };

    asociarEstudiante ( req : Request , res : Response ) {
        try {
          
        } catch ( err ) {
            if ( err instanceof Error ) {}
        }
    };

    async actualizar ( req : Request , res : Response ) {
        try {
            const { id } = req.params;
            
            const registro = await Curso.findOneBy({ id : Number(id) });

            if ( !registro )
                throw new Error(`No se encontro el curso con id ${ id }`);

            const registroActualizado = await Curso.update({ id : Number( id )}, req.body );

            if ( !registroActualizado )
                throw new Error(`Error al actualizar curso con id ${ id }`);

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
            
            const registro = await Curso.findOneBy({ id : Number(id) });

            if ( !registro )
                throw new Error(`No se encontro el curso con id ${ id }`);

            const registroEliminado = await Curso.delete({ id : Number( id )} );

            if ( !registroEliminado )
                throw new Error(`Error al eliminar curso con id ${ id }`);

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

export default new CursosController();