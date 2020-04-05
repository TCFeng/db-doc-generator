const { Client } = require('pg');

class DbService {

    constructor() {
        this.client = null;
    }

    // constructor(params) {
    //     this.host = params.host
    //     this.port = params.port
    //     this.dbName = params.dbName
    //     this.user = params.user
    //     this.password = params.password
    // }

    async connect(params) {
        const self = this;
        self.client = new Client({
            user: params.user,
            host: params.host,
            database: params.dbName,
            password: params.password,
            port: params.port,
        });
        await self.client.connect()
    }

    async query(sql) {
        const self = this;
        return await self.client.query(sql);
    }

    async close() {
        const self = this;
        self.client.end();
    }
}

module.exports = DbService;