const express = require('express');
const router = express.Router();

// Las APIs pueden consumir otras APIs
const BASE_URL = 'https://pokeapi.co/api/v2'

// http://localhost:3000/api/v1/pokemons?count=10
router.get('/api/v1/pokemons', (request, response) => {
    const { count } = request.query;
    try {
        fetch(`${BASE_URL}/pokemon?limit=${count}`)
        .then(response => response.json())
        .then(data => {
            response.send(data);
        });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;