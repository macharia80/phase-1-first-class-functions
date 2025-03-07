// This function takes a callback (a task) and runs it
function receivesAFunction(callback) {
    callback(); // Executes the task you give it
}

// This function returns a named function (has a name tag)
function returnsANamedFunction() {
    function namedFunction() { // Named "namedFunction"
        console.log("I’m a named function, ready to help!");
    }
    return namedFunction; // Hands it back to you
}

// This function returns an anonymous function (no name tag)
function returnsAnAnonymousFunction() {
    return function() { // No name here, it’s anonymous
        console.log("I’m an anonymous function, quietly helping!");
    }; // Returns it directly
}

// Export all functions so the test file can use them
module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
};