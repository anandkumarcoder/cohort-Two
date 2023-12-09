/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.task = [];
  }

  add(newTask) {
    this.task.push(newTask);
  }


  //  - remove(indexOfTodo): remove todo from list of todos - 
  /* Method 1- splice 
  method 2- loop */
  remove(indexToRemove){
    if( indexToRemove >= this.task.length){
      //console.log("invalid input") 
      return "invalid input"
    } else {
      this.task.splice(indexToRemove,1)
    }
  }

  // second method - loop

  /*  */
  // - update(index, updatedTodo): update todo at given index

  update(indexToUpdate , updateValue){
if(indexToUpdate >= this.task.length){
  console.log("invalid index number")
}
this.task[indexToUpdate] = updateValue

  }


}

//console.log(Todo);
 let taskConstructor = new Todo();
//  taskConstructor.add("tasknmber 2", "tasknumber 3"); // to pass multiple arugment you need to use spread operator

taskConstructor.add("task 1")
taskConstructor.add("task 2")
taskConstructor.add("task 3")
taskConstructor.add("task 4")
console.log("before remove fn " , taskConstructor);
taskConstructor.remove(5,1)
taskConstructor.update(3, "task 5")

console.log(taskConstructor);




//  - remove(indexOfTodo): remove todo from list of todos
/* For this question there are two methods one splice and other is using loop */
let array = [1, 2, 3, 4, 5];
array.splice(1, 2);
// console.log(array);

//module.exports = Todo;
