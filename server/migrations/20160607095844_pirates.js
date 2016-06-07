exports.up = function(knex, Promise) {
  return knex.schema.createTable('pirates', function(table) {
    table.increments().primary();
    table.text('name').notNullable();
    table.text('poison').notNullable();
    table.text('accessory').notNullable();
    table.text('image_url');
  })  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pirates');
};
