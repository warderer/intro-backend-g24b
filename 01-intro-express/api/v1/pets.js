const express = require('express');
// Router es un objeto que nos va a permitir crear rutas
const router = express.Router()
const petList = require('../../petsData')

// Query
// Query paramas: Url/api/v1/pets?age=3&type=dog
// Son similares a los params, pero se suelen envar en la url para enviar uno o mas datos
//Las querys son abiertas, no definimos cuantas variables nos tienen que mandar, ni como se llaman, Nuestra responsabilidad es SOLO tomar en cuenta aquellos que nos interesan
router.get('/api/v1/pets', (request, response) => {
  console.log('Query de pets',request.query)
  const { age, type } = request.query
  if(!age && !type){
    response.status(200).send(petList)
    return
  }
  const filteredPets = petList.pets.filter(pet => {
    return pet.age == age || pet.type == type
  })
  response.status(200).send(filteredPets)
  return
})

/* PARAMS */
// Obtener parámetros de rutas dinámicas.
// Params 'URL/api/v1/pets/1'
// Los : en la ruta indican que es un valor dinámico (params)
router.get('/api/v1/pets/:id', (request, response) =>{
  console.log('Params de onePet',request.params)

  const onePet = petList.pets.find(pet => pet.id == request.params.id)
  
  onePet ? response.status(200).send(onePet) : response.status(404).send({
    message: 'Pet not found'
  })
})


module.exports = router