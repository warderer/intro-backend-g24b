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

const updateOneHome = (req, res) => {
  ModelHomes.update(req.params.houseId, req.body)
    .then((result) => {
      res.status(200).send(result)
    })
    .catch((error) => {
      res.status(400).send({ message: 'Error updating house', error })
    })
}

const destroyOneHome = (req, res) => {
  ModelHomes.destroy(req.params.houseId)
    .then((result) => {
      res.status(204).send()
    })
    .catch((error) => {
      res.status(400).send({ message: 'Error destroying house', error })
    })
}

const softDeleteOneHome = (req, res) => {
  ModelHomes.softDelete(req.params.houseId)
    .then((result) => {
      res.status(204).send()
    })
    .catch((error) => {
      res.status(400).send({ message: 'Error destroying house', error })
    })
}

module.exports = {
  createHome,
  findAllHomes,
  findOneHome,
  updateOneHome,
  destroyOneHome,
  softDeleteOneHome
}
