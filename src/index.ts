
import Server from './server/server';

const port =  Number( process.env.NODE_PORT || process.env.PORT || 5000 );
const server = Server.init( port );
server.start( () => {
   console.log(`Server run in port ${port}`);
});