const { Pool } = require("pg");

module.exports = new Pool({
    user: "postgres",
    password: 202820,
    host: "localhost",
    port: 5432,
    database: "oquetuquer"
})

// const { Client };

// const client = new Client({

//     connectionString: process.env.DATABASE_URL,
//     ssl: {
//         rejectUnauthorized: false
//   }
// });

// client.connect();

// client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
//   if (err) throw err;
//   for (let row of res.rows) {
//     console.log(JSON.stringify(row));
//   }
//   client.end();
// });