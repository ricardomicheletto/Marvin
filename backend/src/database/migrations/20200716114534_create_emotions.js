
exports.up = function(knex) {
  return knex.schema.createTable('emotions', function(table) {
      table.increments('idEmotions').primary();
      table.string('emocao').notNullable();
      table.string('descricao').notNullable();
      table.string('srcIcone').notNullable();
      table.string('altIcone').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('emotions');
};
