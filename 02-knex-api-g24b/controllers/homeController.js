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

const findAllHomes = (req, res) => {
  ModelHomes.findAll()
    .then((result) => {
      res.status(200).send(result)
    })
    .catch((error) => {
      res.status(400).send({ message: 'Error listing houses', error })
    })
}

const findOneHome = (req, res) => {
  ModelHomes.findOne(req.params.houseId)
    .then((result) => {
      res.status(200).send(result)
    })
    .catch((error) => {
      res.status(400).send({ message: 'Error listing house', error })
    })
}

module.exports = {
  createHome,
  findAllHomes,
  findOneHome
}
