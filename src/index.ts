import './config';
import Server from './server/server';
import router from "./components/users/router";
/*import MySQL from "./mysql/mysql";*/

const port =  Number( process.env.NODE_PORT || process.env.PORT || 5010 );
const server = Server.init( port );
server.app.use( router);

/*const mysql = new MySQL();*/



server.start( () => {
   console.log(`Server run in port ${port}`);
});