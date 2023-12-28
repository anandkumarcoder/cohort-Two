const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number()); // describing to zod the accepted format

app.use(express.json()); // this done so that we can access body

app.post("/health-checkup", (req, res) => {
  // accepted format -> kidneys = [1,2]
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys); // input validation

  if (!response.success) {
    res.status(411).json({
      msg: "input is invalid",
    });
  } else {
    res.send({
      response,
    });
  }
});

app.listen(3001);
