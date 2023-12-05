// array and object

// Print all the even number

const ages =[22,23,24,25,26,27]

for (let i = 0; i < ages.length; i++) {

    if (ages[i] % 2 == 0) {
        // console.log(ages);
        //console.log(ages[i]);
    }
    // const element = ages[i];
    
}

// Write a programm that prints all the male people's name given a complex object


/* const personArray = ["rahul", "tina", "anand"]
const genderArray = ["male", "female", "male"]

for (let i = 0; i < personArray.length; i++) {
   console.log(personArray.length);
    if (genderArray[i] == "male") {
        console.log(personArray[i]);
    }
    
} */

const user1 = {
    firstName : "anand",
    gender : "male"
}

//console.log(user1["firstName"]);
// user1["firstName"] is same as user1.firstName


const allUsers = [{
    firstName : "anand",
    gender : "male",
    metaData : {
        age: 21,
        address : "abc"
    }
},
{
    firstName : "tina",
    gender : "female",
    metaData : {
        age: 23,
        address : "abc"
    }

    
},
{
    firstName : "rahul",
    gender : "male",
    metaData : {
        age: 26,
        address : "abc"
    }
}

]


/* for (let i = 0; i < allUsers.length; i++) {
   
    if (allUsers[i]["gender"] == "male") {
        console.log(allUsers[i]["firstName"]);
    }
    
} */

for (let i = 0; i < allUsers.length; i++) {
   
    if (allUsers[i]["metaData"]["age"] < 25) {
        console.log(allUsers[i]["firstName"]);
    }
    
}