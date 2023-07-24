const express = require('express')
const cors = require('cors');

const app = express()
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello World"); 
})

app.get('/posts', (req, res) => {
    res.send({
        name: "Leonardo",
        surname: "Faife",
        age: "21",
        title: "SWE"

    })
  })



app.listen (port, () => {
    console.log("Listening for port 3000")
})


