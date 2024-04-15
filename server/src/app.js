const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

const knex = require('knex')(require('../knexfile.js')["development"])

app.use(cors());

app.get('/', (request, response) => {
    response.send('Application is running.')
});

app.listen(port, () => {
    console.log('Knex and Express is running succesfully.');
});

app.get('/movies', (request, response) => {
    knex('movies')
        .select('*')
        .then(data => {
            const movieList = data.map(movies => movies.title)
            response.json(movieList)
        })
})