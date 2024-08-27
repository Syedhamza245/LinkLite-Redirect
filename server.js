const express = require('express')
const app = express()
const port = 5000
const urlRoute = require('./routes/url.route') 
const {connectToMongoDB} = require('./connection')
const URL = require('./models/url.models')

// MongoDB Connection
connectToMongoDB('Your-URL')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())  


app.use('/url', urlRoute )

app.use('/:id', async(req,res) => {
  const id = req.params.id
  const entity = await URL.findOneAndUpdate({ shortURL: id }, {
    $push : {
      visitHistory : {
        timestamp : Date.now(),
      }
    }
  })
  res.redirect(entity.redirectURL)
  console.log(entity.visitHistory);
})



app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
})
