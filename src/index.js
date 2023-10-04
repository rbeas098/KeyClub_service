const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => { 
  console.log("Running root GET request")

  var json_message = {
    message: 'Hellooooooooooooooo Wooooooooooorld!'
  }

  console.log("Sending response")
  res.send(json_message)
})
app.post('/postRequest', (req,res) => {
 res.send("hello this is my first post")
});