/* Los controladores tienen la lógica de negocio */

const createHome = (req, res) => {
  // Aquí yo debería crear mi home
  res.send({ message: 'Home created (FAKE)' })
}

module.exports = {
  createHome
}
