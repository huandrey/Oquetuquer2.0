const db = require('../../config/db');
//const { Client } = require('pg');

module.exports = {
    create(data) {
        const query = `
            INSERT INTO ads (
                category_id,
                user_id,
                pagament,
                state,
                city,
                cpf, 
                description,
                status
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING id
        `
        const values = [
            data.category_id,
            data.user_id || 1,
            data.pagament,
            data.state,
            data.city,
            data.cpf,
            data.description,
            data.status || 1,
        ]

        return db.query(query, values);
    },
    find(id) {
        return db.query('SELECT * FROM ads WHERE id=$1', [id])
    },
    update(data) {
        const query = `
            UPDATE ads SET 
                category_id=($1),
                user_id=($2),
                pagament=($3),
                state=($4),
                city=($5),
                cpf=($6), 
                description=($7),
                status=($8)
            WHERE id = $9
        `

        const values = [
            data.category_id,
            data.user_id,
            data.pagament,
            data.state,
            data.city,
            data.cpf,
            data.description,
            data.status,
            data.id
        ]

        return db.query(query, values)
    },
    delete(id) {
        return db.query('DELETE FROM ads WHERE id = $1', [id]);
    }
}