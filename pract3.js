
let todoList = [];
todoList.push("Study Node.js");
todoList.push("Prepare MCA Practical");

console.log("Todo List:");
todoList.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
});