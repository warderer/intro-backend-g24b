/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

/* EXPORTS UP */
// Aqui colocaremos toda la lógica de creación de tablas, columnas, cambios de nombres, etc.
exports.up = function (knex) {
  return knex.schema.hasTable('homes').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('homes', function (table) {
        table.increments('house_id').primary() // en knex usamos increments en vez de serial (pg)
        table.string('title').notNullable() // que no puede quedar nulo (not null)
        table.text('description')
        table.integer('guests')
        table.text('address')
        table.decimal('rental_price', 12, 2)
        table.boolean('active').defaultTo(true) // defaulTo especifico un valor por defecto
        table.timestamp('created_at').defaultTo(knex.fn.now()) // knex.fn.now() me devuelve la fecha/hora actual
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

/* EXPORTS DOWN */
// Aqui colocaremos toda la lógica que nos va a permitir deshacer los cambios de arriba (exports.up)
exports.down = function (knex) {
  return knex.schema.hasTable('homes').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('homes')
    }
  })
}

/* GUÍA DE USO RÁPIDO DE KNEX */

// ** CREAR UNA MIGRACIÓN **
// knex migrate:make nombre_de_la_migracion

// ** EJECUTAR LAS MIGRACIONES SOBRE EXPORTS.UP() **
// Al ejecutar una migración sobre export.up estamos creando o modificando la tabla de la base de datos.
// Ejecutar la última migración (up): knex migrate:latest
// Ejecutar todas las migraciones (up): knex migrate:up
// Ejecutar una migración especifica (up): knex migrate:up nombre_de_la_migracion.js

// ** EJECUTAR LAS MIGRACIONES SOBRE EXPORTS.DOWN() **
// Al ejecutar una migración sobre export.down estamos eliminando o modificando la tabl de la base de datos al que le hicimos cambios en exports.up
// Deshacer la última migración (down): knex migrate:rollback latest
// Deshacer todas las migraciones (down): knex migrate:rollback
// Deshacer una migración especifica (down): knex migrate:down nombre_de_la_migracion.js
