const knex = require('knex')(require('./knexfile'))

module.exports = {
    createNote({ name, description }) {
        console.log(`Add note ${name} with description ${description}`)
        return knex('notes').insert({
            name,
            description
        })
    }
}