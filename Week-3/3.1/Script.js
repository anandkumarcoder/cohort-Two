const express = require("express");
const app = express();

app.get("/health-checkup", (req, res) => {
  const kidneyID = req.query.kidneyID;
  const username = req.headers.username;
  const password = req.headers.password;

  if (!(username === "anand" && password === "pass")) {
    res.status(400).json({
      msg: "something is not right with authentication",
    });
  }

  if (kidneyID != 1 && kidneyID != 2) {
    res.status(400).json({
      msg: "something is not right with kidney",
    });
  }

  res.json({
    msg: "Your kidney is fine",
  });
});
app.listen(3000);
