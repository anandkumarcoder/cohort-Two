const express = require("express");
const app = express();

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
      {
        healthy: false,
      },
    ],
  },
];

// john needs to know how many kidneys he has an dhow many are healthy and unhealthy
app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  console.log(numberOfKidneys);
  let numberOfHealthyKidneys = 0;

  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
        console.log(johnKidneys[i].healthy);
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
  }
console.log(numberOfHealthyKidneys);
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys

  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys
  })
});

app.listen(3000);
