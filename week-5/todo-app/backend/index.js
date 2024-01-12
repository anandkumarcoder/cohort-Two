const express = require("express");
const { createTodo, updateTodo } = require("./type");
const app = express();
const port = 3000;

app.post("/todo", (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "you have sent the wrong inputs",
    });
    return;
  }
});

app.get("/todo", (req, res) => {
  res.send("Hello World!");
});

app.put("/completed", (req, res) => {
  updatePayload = req.body;
  parsedPayload = updateTodo.safeParse({updatePayload})

  if(!parsedPayload.success){
    res.send(411).json({
        msg : "you have sent the wrong input update"
    })
    return ;
  }

 
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
