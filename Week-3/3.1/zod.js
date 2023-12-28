const express = require("express");
const app = express();

const zod = require("zod");

// this done so that we can access body

const schema = zod.array(zod.number());



app.use(express.json()); // describing to zod the accepted format

app.post("/health-checkup", (req, res) => {
  // accepted format -> kidneys = [1,2]
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys); // input validation
 
  if (!response.success) {
    // res.status(411).json({
    //   msg: "input is invalid",
    // } ) // for personalised message for error 

     res.send(response) // default error message
    ;
  } else {
    res.send({
      response,
    });
  }
});
app.listen(3001);
