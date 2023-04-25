exports.up = function (knex) {
  return knex.schema.createTable("reservations", (table) => {
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("mobile_number").notNullable();
    table.date("reservation_date").notNullable();
    table.time("reservation_time").notNullable();
    table.integer("people").notNullable().unsigned().defaultTo(1);
    table.increments("reservation_id").primary();
    table.timestamps(true, true);
    table.string("status").notNullable().defaultTo("booked");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("reservations");
};
