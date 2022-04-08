const axios = require('axios');
const express = require('express') ;
const app =express();
var PORT = process.env.PORT || 8080;
let url ='https://pokeapi.co/api/v2/';


const res =  axios.get(url);



app.use(express.json())

app.listen(
    PORT,
    () => console.log(`Estoy vivo http://localhost:${PORT}`)
)

app.get('/',(req,res) =>{
    res.send('Entro solo')
})

app.get('/pokemon/name',(req,res) =>{

    let nombre = req.body.name
    let ur = url + `pokemon/${nombre}`
    axios.get(ur, {
      })
      .then(function (response) {
        console.log(response.data);
        res.send(response.data.name)
      })
})


app.get('/pokemon/abilities',(req,res) =>{

    let nombre = req.body.name
    let ur = url + `pokemon/${nombre}`
    axios.get(ur, {
      })
      .then(function (response) {
        console.log(response.data);
        res.send(response.data.abilities)
      })
})

app.get('/pokemon/experience',(req,res) =>{

    let nombre = req.body.name
    let ur = url + `pokemon/${nombre}`
    axios.get(ur, {
      })
      .then(function (response) {
        console.log(response.data);
        res.sendStatus(response.data.base_experience)
      })
})

app.get('/pokemon/items',(req,res) =>{

    let nombre = req.body.name
    let ur = url + `pokemon/${nombre}`
    axios.get(ur, {
      })
      .then(function (response) {
        console.log(response.data);
        res.send(response.data.held_items)
      })
})

app.get('/pokemon/id',(req,res) =>{

    let nombre = req.body.name
    let ur = url + `pokemon/${nombre}`
    axios.get(ur, {
      })
      .then(function (response) {
        console.log(response.data.id);
        res.status(200).send(response.data.id.toString())
      })
})

app.get('/pokemon/location',(req,res) =>{

    let nombre = req.body.name
    let ur = url + `pokemon/${nombre}`
    axios.get(ur, {
      })
      .then(function (response) {
        console.log(response.data.id);
        res.status(200).send(response.data.location_area_encounters)
      })
})

