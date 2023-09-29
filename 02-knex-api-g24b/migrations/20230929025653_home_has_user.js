exports.up = function (knex) {
  return knex.schema.hasTable('homes').then(function (exists) {
    if (exists) {
      return knex.schema.table('homes', function (table) {
        table.integer('fk_user')
          .unsigned()
          .references('users.user_id') // llave foranea
      })
    };
  })
}

exports.down = function (knex) {
  return knex.schema.hasTable('homes').then(function (exists) {
    if (exists) {
      return knex.schema.table('homes', function (table) {
        table.dropColumn('fk_user') // borro la columna fk_user
      })
    };
  })
}
