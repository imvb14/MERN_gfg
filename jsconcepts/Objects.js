function gobal(food){
    console.log(`Hello ${this.name} and you are ${2024-this.dob} years old and your favorite food is ${food}`)
}

const obj1 ={

    name: 'John',
    dob: 1994,
    // like: function(food){
    //     console.log(`Hello ${this.name} and you are ${2024-this.dob} years old and your favorite food is ${food}`)
    // }
   
}
const obj2 ={

    name: 'Alice',
    dob: 1994,
    // like: function(food){
    //     console.log(`Hello ${this.name} and you are ${2024-this.dob} years old and your favorite food is ${food}`)
    // }
}

const obj3 ={

    name: 'Bob',
    dob: 1994,
    // like: function(food){
    //     console.log(`Hello ${this.name} and you are ${2024-this.dob} years old and your favorite food is ${food}`)
    // }
}

// This is repatative code we are using same function for all the objects and missed the DRY concept
// obj1.like('Pizza')
// obj2.like('Burger')
// obj3.like('Sandwich')
// So we have to use the concept of method/fucntion browworing to solve this problem

// There are three methods to borrow a method/function from one object to another object
// 1. Call method
// 2. Apply method
// 3. Bind method


// Call method
// Syntax: functionName.call(objectName, parameters)
gobal.call(obj2, 'Pizza')
gobal.call(obj3, 'Burger')
gobal.call(obj1, 'Sandwich')

// Apply method
// Syntax: functionName.apply(objectName, [parameters])
gobal.apply(obj2, ['Pizza'])
gobal.apply(obj3, ['Burger'])
gobal.apply(obj1, ['Sandwich'])
// The only difference is that we have to pass the parameters in the form of array insted of values in apply method compate to call method

// Bind method
// Syntax: functionName.bind(objectName, parameters)
const obj1Like = gobal.bind(obj1)
obj1Like('Pizza')
const obj2Like = gobal.bind(obj2)
obj2Like('Burger')
const obj3Like = gobal.bind(obj3)
obj3Like('Sandwich')
// The only difference is that we have to store the binded function in a variable and then call that variable with the parameters because bind method returns a function and it's not directly call the function like call and apply method do


//Okay now we make the code DRY but still object is key are repatative so we have to use the concept of constructor function to solve this problem

//we will see in next file.

// Path: Javascript-concepts/ConstructorFunction.js
