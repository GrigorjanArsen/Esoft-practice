/**
 * @param {import('knex')} knex
 */
exports.up = async function (knex) {
  return knex.schema
    .createTable('ads', function (table) {
      table.increments('id').primary();
      table.text('title').notNullable();
      table.text('type').notNullable();
      table.text('city').notNullable();
      table.decimal('price', 12, 2).notNullable();
      table.text('description');
      table.text('status').defaultTo('Активно');
      table.date('published_at').defaultTo(knex.fn.now());
    });
};
/**
 * @param {import('knex')} knex
 */
exports.down = async function (knex) {
  return knex.schema
    .dropTableIfExists('ads');
};
