const { log } = require("console");
const express = require("express");
const app = express();

/* app.get("/health-checkup", (req, res) => {
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
}); */

// calculating the number of times request has been sent

let numberOfRequest = 0

function calculateNumber(req,res,next){
    numberOfRequest ++
    console.log(numberOfRequest);
    next()
}

// app.use(express.json())
app.use(calculateNumber)


// better way to do the above using middleware

function authenticationValidator(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  if (!(username === "anand" && password === "pass")) {
    res.status(403).json({
      msg: "something is not right with authentication",
    });
  }

  next();
}

function kidneyValidator(req, res, next) {
  const kidneyID = req.query.kidneyID;

  if (kidneyID != 1 && kidneyID != 2) {
    res.status(403).json({
      msg: "something is not right with kidney",
    });
  }

  next()
}

app.get(
  "/health-checkup",
  authenticationValidator,
  kidneyValidator,
  (req, res) => {
    res.send("Everything is fine");
  }
);

app.listen(3000);
