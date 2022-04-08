
const express = require('express') ;
const app =express();
const PORT = 8080;
let url = 'https://pokeapi.co/api/v2/pokemon/dito'




app.use(express.json())

app.listen(
    PORT,
    () => console.log(`Estoy vivo http://localhost:${PORT}`)
)

app.get('/',(req,res) =>{
    res.send('Entro solo')
})

//creo ruta pokemon/1
app.get('/pokemon/1',(req,res) =>{
    res.send('Entro a pokemon 1')
})


app.get('/tshirt', (req,res) =>{
    res.status(200).send({
        tshirt:'🙉',
        size:'medium'
    });
});

app.get('/as', (req,res) =>{
    console.log(req);
    const bulbasaur ={
        id:"1",
        nombre:"Bulbasair",
        tipo: "planta"
    };
    res.send(bulbasaur)
});






app.post('/tshirt/:id',(req,res) =>{

    const{id} = req.params;
    const{logo} = req.body;

    if(!logo){
        res.status(418).send({ message: 'We need a logo!'})
    }
    res.send({
        tshirt:`🙉 with your ${logo} and ID ${id} `,
    });
});