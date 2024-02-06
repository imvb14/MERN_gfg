class Data{

    constructor(name, dob){
        this.name = name,
        this.dob = dob,
        this.like = function(food){
            console.log(`Hello ${this.name} and you are ${2024-this.dob} years old and your favorite food is ${food}`)
        }
    }

}

const alice = new Data('Alice', 1994)
const bob = new Data('Bob', 1996)
const john = new Data('John', 1991)

alice.like('Pizza')
bob.like('Burger')
john.like('Sandwich')

// why we have to class ? -- It's simple we have to use class because we want to create multiple objects with same properties and methods 

// Eeventhough we have function constructor we can 