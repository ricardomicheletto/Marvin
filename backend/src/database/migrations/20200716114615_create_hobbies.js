
exports.up = function(knex) {
  return knex.schema.createTable('hobbies', function(table) {
      table.increments('idHobbies').primary();
      table.string('').notBullable();
      table.string('').notBullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('hobbies');
};
