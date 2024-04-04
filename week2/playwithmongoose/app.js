const db = require('./database/setup'); // Do not edit/remove this line


// Create todo with name and priority (done = false by default)
function createTodo(name, priority) {
    const task1 = new db({
        name: name,
        priority: priority,
        done: false,
    });

    task1.save()

}

//createTodo("shopping", 1)


// Complete one todo by name (update property done = true)
function completeTodo(name) {
    db.updateOne(
        {name: name},
        {done: true},
    )
    .then()
}
//completeTodo("Buy milk")
//hhhhh

// Delete one todo by name
function deleteTodo(name) {
    db.deleteOne({
        name: name,
    })
    .then()
}
//deleteTodo("shopping")


module.exports = { createTodo, completeTodo, deleteTodo }; // Do not edit/remove this line
