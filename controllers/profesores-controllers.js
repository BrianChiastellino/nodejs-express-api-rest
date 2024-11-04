import db from '../databases/conexion.js';


class ProfesorController {

    constructor() { };

    consultar ( req, res ) {
        try {
            db.query(` SELECT * FROM profesores `, ( err, data ) => {
                if ( err) res.status(400).send( err );
                res.status(200).json(data);
            });
        } catch ( err ) {
            res.status(500).send( err.message );
        };

    };

    consultarDetalle ( req, res ) {
        try {

            const id = req.params.id;

            db.query(`SELECT * FROM profesores WHERE id = ?`,
                [ id ],
                ( err , data ) => {
                    if ( err ) res.status(400).send( err );
                    res.status(200).json( data[0] );
                });
        } catch ( err ) {
            res.status(500).send( err.message );
        }
    };

    ingresar( req, res ) {
        try {
            const { dni, nombre, apellido, email, profesion, telefono } = req.body;
            db.query(
                `INSERT INTO profesores (id, dni, nombre, apellido, email, profesion, telefono)
                VALUES (NULL, ?,?,?,?,?,? );
                `, [ dni, nombre, apellido, email, profesion, telefono],
            ( err, data ) => {
                if ( err ) res.status(400).send( err );
                res.status(200).json({ id : data.insertId });
            });
        } catch ( err ) {
            res.status(500).send( err.message );
        }

    };

    actualizar ( req, res ) {
        try {
            const { dni, nombre, apellido, email, profesion, telefono } = req.body;
            const id = req.params.id;
            
            db.query(`UPDATE profesores
                SET dni = ?, nombre = ?, apellido = ?, email = ?, profesion = ?, telefono = ?
                WHERE ID = ?`,
                [ dni, nombre, apellido, email, profesion, telefono, id ],
         ( err, data ) => {
            if ( err ) res.status(400).send( err );
            if ( data.affectedRows == 1)  res.status(200).json({ message: 'Profesor acutalizado con éxito!'});
        });

        } catch ( err ) {
            res.status(500).send( err.message );
        };
    };

    eliminar( req, res ) {
        try {
            const id = req.params.id;

            db.query(`DELETE FROM profesores
                WHERE ID = ?`, [id],
                ( err, data ) => {
                    if (err) res.status(400).send(err);
                    if (data.affectedRows == 1) res.status(200).json({ message: 'Profesor acutalizado con éito!' });
                });

        } catch ( err ) {
            res.status(600).send(err.message);
        };
    };



}

export default new ProfesorController();