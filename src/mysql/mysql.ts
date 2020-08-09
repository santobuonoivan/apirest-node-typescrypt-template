
import mysql = require("mysql");


export default class MySQL {
    private static _intance: MySQL;

    cnn: mysql.Connection;
    conected: boolean = false;

    constructor() {
        console.log('db class init');
        this.cnn = mysql.createConnection( {
          host: 'localhost',
          user: 'root',
          password: '',
          database: 'node_test',
        });

        this.conectDB();
    }

    public static get instance() {
        return this._intance || ( this._intance = new this() );
    }

    static executeQuery( query: string ) {
        try {
           return this.instance.cnn.query( query)
        } catch (e) {
          throw e
        }
    }

    private conectDB() {
        try {
            this.cnn.connect();
            this.conected = true;
            console.log('DB online');
        }catch (e) {
                console.log(e.message);
                return;
        }
    }
}
