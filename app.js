/*document.write('hello world')
alert('hello people')
console.log('hello world')*/

/*let name = "Gerald P. Gillespie";
let address, zip, state;
address = "302 fly creek ave apt 1201";
state = "AL";
zip = "36532"
name = 'Everette'
console.log(address, state, zip);
console.log(name);*/

// const name = 'John';
// const lastName = 'Shakeandbake';
// let fullName = name + ' ' + lastName;
// console.log('Hello there your full name is: ' + name + ' ' + lastName);
// console.log('Hello there your full name is: ' + fullName);

// const website = 'google';
// const url = 'https://www.' + website + '.com';
// console.log(url);

// const number = 34;
// const number2 = 2.456;
// // console.log(number);
// // console.log(number2);
// const add = number + number2;
// const sub = number - number2;
// const mult = number * number2;
// const div = number / number2

// console.log(add);
// console.log(sub);
// console.log(mult);
// console.log(div);

// const text = 'some text';
// const number = 45;
// let value1 = true;
// let value2 = false;
// const result = null;

// console.log(typeof text);
// console.log(typeof number);
// console.log(typeof value1);
// console.log(typeof value2);
// console.log(typeof null);

// const friends = ['john','peter','bob','susy',45,undefined,null];

// console.log(friends[0]);

// function hello(){
// console.log('hello there bob'); 
// console.log('hello there anna'); 
// console.log('hello there susy');
// }

// hello()

// function greet(name){console.log('Hello there ' + name)};

// greet('Bob');
// greet('anna');

//Return
//1 in = 2.54cm

// function calculate(value) {
//     // const newValue = value * 2.54;
//     // console.log('The value in cm is : ' + value * 2.54 + ' cm');
//     // return newValue;
//     return value * 2.54+'cm';
// }


// const width = calculate(100);
// const height = calculate(200);

// const dimensions = [width, height];
// console.log(dimensions);

//Function Expressions
//another way to define functions
//create a variable, assign to FUNCTION (not a value), use var
//diff- hoisting, use- arrow function, librarires 

// function definition/declaration
// function addValues(num1, num2){
//     return num1 + num2;
// }

// const firstValue = addValues(3, 4);
// const secondValue = addValues(12, 34);

//function expression
// const add = function (num1, num2){
//     return num1 + num2;
// }
// const thirdValue = add(5, 6);
// const values = [firstValue, secondValue, add(5, 6)/*could also have thirdValue here*/];
// console.log(values);


/* objects
key/value pairs methods
dot notation
ex: car is an object
the car has properties such as color, size, age
the car has methods such as speed and distance it can travel*/

const person = {
    name: 'John',
    lastNamne: 'Peters',
    age: 40,
    education: false,
    married: true,
    siblings: ['anna', 'susan', 'peter'],
    greeting: function () {
        console.log('Hello my name is John');
    },
};

console.log(person.name);
console.log(person.siblings[2]);
person.greeting()