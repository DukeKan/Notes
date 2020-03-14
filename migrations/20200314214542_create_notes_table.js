exports.up = function(knex) {
    return knex.schema.createTable('notes', function(t) {
        t.increments('id').primary()
        t.string('name').notNullable()
        t.string('description').notNullable()
        t.timestamps(false, true)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('notes')
};