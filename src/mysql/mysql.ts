import mysql = require("mysql");
const env = process.env.NODE_ENV;


export default class MySQL {
    private static _intance: MySQL;
    cnn: mysql.Connection;
    conected: boolean = false;

    constructor() {
        console.log('db class init');
        // @ts-ignore
        const {host,user,password,port,database} = require("./mysql.config.json")[env];
        this.cnn = mysql.createConnection( {
            host,
            user,
            password,
            database,
            port
        });

        this.conectDB();
    }

    public static get instance() {
        return this._intance || ( this._intance = new this() );
    }

    static executeQuery( query: string, callback: Function  ) {

           return this.instance.cnn.query( query , (err, result, fields) => {
               if (err) { return callback(err) }
               callback(null,result);
        })
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
