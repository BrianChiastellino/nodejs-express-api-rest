import db from '../databases/conexion.js';

class EstudianteController {

    constructor() { };

    consultar ( req, res ) {
        try {
            db.query(`SELECT * FROM estudiantes`, ( err, data ) => {
                if ( err ) return res.status( 400 ).send( err );
                res.status(200).json(data);
            });

        } catch ( err ) {
            res.status(500).send(err.message);
        }
    };

    consultarDetalle ( req, res ) {
        try {

            const id = req.params.id;

            db.query(`SELECT * FROM estudiantes WHERE id = ?`, [ id ], ( err, data ) => {
                if ( err ) return res.status( 400 ).send( err );
                res.status(200).json(data[0]);
            });

        } catch ( err ) {
            res.status(500).send(err.message);
        }
    };

    ingresar(req, res) {
        try {

            const { dni, nombre, apellido, email } = req.body;

            db.query(
                `INSERT INTO estudiantes
                    ( id, dni, nombre, apellido, email )
                VALUES ( NULL, ?,?,?,? );`,
                
                [dni, nombre, apellido, email],
                
                ( err, data ) => {
                    if ( err ) return res.status( 400 ).send( err ); 
                    res.status(201).json( { id : data.insertId })
                });

        } catch (err) {


            res.status(500).send(err.message);
        };
    };

    actualizar ( req, res ) {
        try {
            const { dni, nombre, apellido, email } = req.body;
            const id = req.params.id;

            db.query(` 
                UPDATE estudiantes
                SET dni = ?, nombre = ?, apellido = ?, email = ?
                WHERE ID = ?;
                `, [ dni, nombre, apellido, email, id ], 
                ( err, data ) => {
                    if ( err ) return res.status( 400 ).send( err );
                    if ( data.affectedRows == 1 ) return res.status( 200 ).json({ respuesta : 'Registro actualizado con éxito'} );
                })

        } catch ( err ) {
            res.status(500).send(err.message);
        };
        
    };

    eliminar ( req, res ) {
        try {
            const id = req.params.id;

            db.query(` 
                DELETE FROM estudiantes
                WHERE ID = ?;
                `,[ id ], 
                ( err, data ) => {
                    if ( err ) return res.status( 400 ).send( err );
                    if ( data.affectedRows == 1 ) return res.status( 200 ).json({ respuesta : 'Registro eliminado con éxito'});
                });

        } catch ( err ) {
            res.status(500).send(err.message);
        };

    };

}

export default new EstudianteController();