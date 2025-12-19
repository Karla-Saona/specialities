const express = require('express')
const getContent = require('./template.js')
const usersData= require('./data.js')
const app = express()
const PORT = 3000


app.get('/',(req, res)=> {
    res.send('Bienvenido a mi página')
})

const specialtyFilter = (specialty) => usersData.filter(user => user.specialty === specialty)

//RUTAS :

app.get('/developers',(req, res)=> {
    const specialty = "developers"
    const users = specialtyFilter(specialty)
    
    res.send(getContent(specialty,users))
})

app.get('/marketing',(req, res)=> {
    const specialty = "marketing"
    const users = specialtyFilter(specialty)
    
    res.send(getContent(specialty,users))
})

app.get('/ventas',(req, res)=> {
    const specialty = "ventas"
    const users = specialtyFilter(specialty)
    
    res.send(getContent(specialty,users))
})

app.get('/qas',(req, res)=> {
    const specialty = "QAs"
    const users = specialtyFilter(specialty)
    
    res.send(getContent(specialty,users))
})

//404 PÁGINA NO ENCONTRADA
app.use((req, res)=> {
    res.status(404).send("página no encontrada -404")
})

app.listen(PORT, ()=> {
    console.log(`El servidor express está escuchando en la URL http://localhost:${PORT}`)
})
