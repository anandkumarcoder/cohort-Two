const express = require('express')

const bodyParser = require("body-parser")
const app = express()
const port = 3000



app.get('/', (req, res) => {
//   res.send('Hello World!')
  res.send('Hello World2')

  /* res.json({
    name : "Anand"
  }) */

})


app.use(bodyParser.json())

app.post('/tryouts', (req, res) => {
    //   res.send('Hello World!')
      res.send('Hello World2 tryouts')
      console.log(req.headers);
      console.log(req.body);
    
      /* res.json({
        name : "Anand"
      }) */
    
    })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})