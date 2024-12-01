require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1 style="text center">Wellcome to influcraft</h1>');
});
app.get('/about', (req, res) => {
    res.send('influcraft is a tech soluation which make collaboration between brands and creator easy');
  });
  app.get('/contact', (req, res) => {
    res.send('for brand -: contact@influcraft.com');
  });
  app.get("/creator",(req,res)=>{
    res.send("top creaor from every lanaguage using influcraft for collaborating withs brands")
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.port}`)
})