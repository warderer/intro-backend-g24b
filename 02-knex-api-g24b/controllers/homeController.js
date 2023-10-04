/* Los controladores tienen la lógica de negocio */
const ModelHomes = require('../models/Homes')

const createHome = (req, res) => {
  // Aquí yo debería crear mi home
  // res.send({ message: 'Home created (FAKE)' })
  ModelHomes.create(req.body)
    .then((result) => {
      res.status(201).send({ message: 'Home created', data: result })
    })
    .catch((error) => {
      res.status(400).send({ message: 'Error creating home', error })
    })
}

module.exports = {
  createHome
}
