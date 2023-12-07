function jsonMethods(jsonString) {
  console.log("Original JSON String:", jsonString);

  // Parsing JSON string to JavaScript object
  let parsedObject = JSON.parse(jsonString);
  console.log("After JSON.parse():", parsedObject);

  // Stringifying JavaScript object to JSON string
  let jsonStringified = JSON.stringify(parsedObject);
  console.log("After JSON.stringify():", jsonStringified);
}

// Example Usage for JSON Methods
const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

//jsonMethods(sampleJSONString);

// example from the video

/* const users = '{"name": "annad", "age" : 25, "gender" : "male"}' // this how data is sent in string format . You dont send JS object data 

// console.log(users["name"]);

// JSON parse

const newUser = JSON.parse(users)
console.log(newUser["name"]); */

// JSON stringfy - converts object to string

const users = {
  name: "anand",
  age: 25,
  gender: "male",
};

const finalStirng = JSON.stringify(users);
console.log(finalStirng);
