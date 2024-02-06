// Why we are using the constructor function/fucntion constructor? 

// Because we want to create multiple objects with same properties and methods 

function Data(name, dob){
    
    this.userName = name,
    this.userDob = dob,
    this.like = function(food){
        console.log(`Hello ${this.userName} and you are ${2024-this.userDob} years old and your favorite food is ${food}`)
    }

}

// how to call the constructor function/function constructor ? -- It's simple just use the new keyword before the function name

const alice = new Data('Alice', 1994)
const bob = new Data('Bob', 1996)
const john = new Data('John', 1991)

alice.like('Pizza')
bob.like('Burger')
john.like('Sandwich')

// Now we don't have to create multiple objects with same properties and methods.
// And we don't have to use call method, apply method and bind method to borrow the methods from one object to another object

// After ES6 we have a new way to create the objects with same properties and methods using the class keyword and constructor method 

// We will see in next file Javascript-concepts/Class.js