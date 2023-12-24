const express = require("express");
const app = express();

app.use(express.json());

//simple logic
/* function sum(n){
    let ans =0
    for (let i = 0; i <= n; i++) {
        
        ans = ans + i    
        }

        return ans
}
 */

//taking  input from user
/* app.get("/", function(req,res){

    const n = req.query.n
    const ans = sum(n)
    res.send("Hello your answer is " + ans) 
}) */

//dummy DB

const users = [
  {
    name: "john",
    kidneys: [
      {
        healthy: false,
      },
      //   {
      //     healthy: false,
      //   },
    ],
  },
];

// john needs to know how many kidneys he has an dhow many are healthy and unhealthy- use of query parameter
app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  //   console.log(numberOfKidneys);
  let numberOfHealthyKidneys = 0;

  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      // console.log(johnKidneys[i].healthy);
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
  }
  // console.log(numberOfHealthyKidneys);
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

// use of post request

app.post("/", function (req, res) {
  // console.log(req.body) // returns undefined
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });

  res.json({
    msg: "done",
  });
});

// put handler - update all kidney of the user to be healthy

app.put("/", function (req, res) {
  console.log("from here " + users[0].kidneys.length);
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }

  res.json({});
});

// delete method -- remove all the unhealthy kidneys

app.delete("/", function (req, res) {
  // case 1 -> removing the unhealthykidney
//   const newKidneyArray = [];

  /* for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy) {
      newKidneyArray.push({
        healthy: true,
      });
    }
  }
  console.log(newKidneyArray);
  users[0].kidneys = newKidneyArray;

  res.json({ msg: "done" }); */

  //  case 2 :return 401 if there is no unhealthy kidneys and there is input to delete the unhealthy kidney

   if (checkAnyUnhealthyKidney) {
        const newKidneyArray = []
        for (let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
              newKidneyArray.push({
                healthy: true,
              });
            }
          }
          console.log(newKidneyArray);
          users[0].kidneys = newKidneyArray;
        
          res.json({ msg: "done" });
    } else {
        res.status(411).json({
            msg : "you have no unhealthy kidney"
        })
    }

});

function checkAnyUnhealthyKidney() {
  let unhealthyKidney = false;

  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      unhealthyKidney = true;
    }
  }

  return unhealthyKidney;
}

app.listen(3000);
