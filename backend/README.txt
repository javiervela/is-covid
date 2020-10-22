para inicializar mongodb en un docker o en una uri que no sea localhost, se debe crear un fichero llamado .env, en el tienes que inicializar la variable DB, ejemplo:

DB=mongodb+srv://andoniSalcedo:<password>@cluster0.mcecu.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority

en un futuro para migrar la base de datos a mongodb atlas, solo abra que añadir la linea de codigo anteriormente escrita.

Para cambiar el puerto de despliegue abria que escribir en el mismo fichero pero esta vez inicializando la variable PORT, ejemplo:

PORT=8000

como ejecutar el servidor en modo development:

"npm run dev"

Pruebas con POSTMAN:

uris que estan implementadas:

las variables que cambian según el sistema llevan $ delante

GET:

http://localhost:$PORT/public/datos-region/$nombre_region

http://localhost:$PORTpublic/datos-community/$nombre_comunidad

http://localhost:$PORT/public/datos-poblation/$nombre_ciudad

ejemplo

http://localhost:8080/public/datos-community/navarra

actualmente la BD está vacia así que no devolverá nada :(