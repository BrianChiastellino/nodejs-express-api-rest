import { AppDataSource } from "./db/conexion";
import app from "./app";

async function  main  () {
    try{
        const PORT = process.env.PORT ?? 8080;

        await AppDataSource.initialize();
        console.log('Database contected');
    
        app.listen( PORT, () => {
            console.log(`App is running on PORT ${PORT}`);
        });

    } catch ( err ) {
        if ( err  instanceof Error ) 
            console.log( err.message );
    }
}

main();

