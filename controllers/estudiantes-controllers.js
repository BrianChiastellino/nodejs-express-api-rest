import db from '../databases/conexion.js';

class EstudianteController {

    constructor() { };

    consultar ( req, res ) {
        try {
            db.query(`SELECT * FROM estudiantes`, ( err, rows ) => {
                if ( err ) res.status( 400 ).send( err );
                res.status(200).json(rows);
            });

        } catch ( err ) {
            res.status(500).send(err.message);
        }
    };

    consultarDetalle ( req, res ) {
        try {

            const id = req.params.id;

            db.query(`SELECT * FROM estudiantes WHERE id = ?`, [ id ], ( err, rows ) => {
                if ( err ) res.status( 400 ).send( err );
                res.status(200).json(rows[0]);
            });

        } catch ( err ) {
            res.status(500).send(err.message);
        }
    };

    ingresar(req, res) {
        try {

            const { dni, nombre, apellido, email } = req.body;

            db.query(`
                INSERT INTO estudiantes
                    ( id, dni, nombre, apellido, email )
                VALUES ( NULL, ?,?,?,? );
                `, [dni, nombre, apellido, email], ( err, rows ) => {
                    if ( err ) {
                        res.status( 400 ).send( err ); 
                    };

                    res.status(201).json( { id : rows.insertId })
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
                ( err, rows ) => {
                    if ( err ) res.status( 400 ).send( err );
                    if ( rows.affectedRows == 1 ) res.status( 200 ).json({ respuesta : 'Registro actualizado con éxito'} );
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
                ( err, rows ) => {
                    if ( err ) res.status( 400 ).send( err );
                    if ( rows.affectedRows == 1 ) res.status( 200 ).json({ respuesta : 'Registro eliminado con éxito'});
                });

        } catch ( err ) {
            res.status(500).send(err.message);
        };

    };

}

export default new EstudianteController();