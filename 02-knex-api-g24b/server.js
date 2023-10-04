require('dotenv').config()
const express = require('express')
const homeRoutes = require('./routes/homeRoutes')

const app = express()

/* Middleware */
app.use(express.urlencoded({ extended: true })) // permite recibir datos especiales (como arrays) en el body
app.use(express.json()) // middleware para trabajar con JSON

/* Routes */
app.use('/api/v1', homeRoutes)

/* Levantar el servidor */
app.listen(3000, () => console.log('Server ON: 3000'))
