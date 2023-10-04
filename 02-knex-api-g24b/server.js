const express = require('express')

const app = express()

/* Middleware */
app.use(express.urlencoded({ extended: true })) // permite recibir datos especiales (como arrays) en el body
app.use(express.json()) // middleware para trabajar con JSON

/* Routes */

/* Levantar el servidor */
app.listen(3000, () => console.log('Server ON: 3000'))
