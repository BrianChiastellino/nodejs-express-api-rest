import db from '../databases/conexion.js';

class CursosController {

    constructor() { };

    consultar ( req, res ) {
        try {
            db.query(` SELECT * FROM cursos `, ( err, data ) => {
                if ( err ) return res.status(400).send( err );
                res.status(200).json( data );
            })
        } catch ( err ) {
            res.status(500).send( err.message );
        }
    };

    consultarEstudinateEnCurso ( req, res ) {
        try {
            db.query(` SELECT * FROM cursos_estudiantes; `, ( err, data ) => {
                if ( err ) return res.status(400).send( err );
                res.status(200).json( data );
            })
        } catch ( err ) {
            res.status(500).send( err.message );
        }
    };

    consultarDetalle ( req, res ) {
        try {
            const id = req.params.id;

            db.query(` SELECT * FROM cursos WHERE ID = ?`,
                [ id ], ( err, data ) => {
                    if ( err ) return res.stauts(400).send( err );
                    res.status(200).json( data[0] );
                })

        } catch ( err ) {
            res.status(500).send( err.message );
        }
    };

    ingresar (req, res) {
        try {
            const { nombre, descripcion, profesor_id } = req.body;
            
            db.query(
                `INSERT INTO cursos 
                ( id, nombre, descripcion, profesor_id )
                VALUES( NULL, ?, ?, ? )`,

                [ nombre, descripcion, profesor_id ],

                ( err, data ) => {
                    if ( err ) return res.status(400).send( err );
                    res.status(201).json({ id : data.insertId });
                });
        } catch ( err ) {
            res.stauts(500).send( err.message );
        }
    };

    asociarEstudiante (req, res) {
        try {
            const { curso_id, estudiante_id} = req.body;
            
            db.query(
                `INSERT INTO cursos_estudiantes 
                ( curso_id, estudiante_id )
                VALUES( ? , ? )`,

                [ curso_id, estudiante_id ],

                ( err, data ) => {
                    if ( err ) return res.status(400).send( err );
                    res.status(201).json({ msg : 'Estudiante ingresado al curso con éxito' });
                });
        } catch ( err ) {
            res.stauts(500).send( err.message );
        }
    };

    actualizar ( req, res ) {
        try {
            const { nombre, descripcion, profesor_id } = req.body;
            const id = req.params.id;

            db.query(
                `UPDATE cursos
                SET nombre = ?, descripcion = ?, profesor_id = ?
                WHERE id = ?`,

                [ nombre, descripcion, profesor_id, id ],
                
                ( err , data ) => {
                    if ( err ) return res.status(400).send( err );
                    if ( data.affectedRows == 1 ) return res.status( 200 ).json({ msg: 'Curso actualizado con éxito'});
                });

        } catch ( err ) {
            res.status(500).send( err.message ); 
        }
        
    };

    eliminar ( req, res ) {
        try {
            const id = req.params.id;

            db.query(
                `DELETE FROM cursos
                 WHERE ID = ?`,
                
                [ id ],

                (err, data ) => {
                    if ( err ) return res.status(400).send( err );
                    if ( data.affectedRows == 1 ) return res.status( 200 ).json({ msg: 'Curso eliminado con éxito'});
                });
                
        } catch ( err ) {
            res.status(500).send( err.message );
        }

    };

}

export default new CursosController();