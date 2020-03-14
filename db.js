const knex = require('knex')(require('./knexfile'))

module.exports = {
    createNote({ name, description }) {
        return knex('notes').insert({
            name,
            description
        })
    },

    getNotes() {
        return knex('notes').select('name', 'description').from('notes').orderBy('id');
    }
}