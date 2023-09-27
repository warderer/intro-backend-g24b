// #1 Llamar a la biblioteca de express (importarla)
const express = require('express');
const petsRouter = require('./api/v1/pets')
const cakeRouter = require('./api/v1/cakes')

// #2 Crear una instancia de express (crear una aplicación de express)
const app = express()
// #3 Configurar la app de express (app.use)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// #4 Crear una ruta (app.get)
app.get('/', (request, response) => {
  response.send('Hola munod y Devf 3')
})

// #6 importar rutas en otros archivos, con ayuda del router de express
app.use(petsRouter)
app.use(cakeRouter)
// #5 Inicializar el servidor (app.listen)
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000')
})