exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.integer('VIN')
            .unique()
            .notNullable();
        tbl.string('make', 128).notNullable();
        tbl.string('model', 128).notNullable();
        tbl.integer('milage').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
