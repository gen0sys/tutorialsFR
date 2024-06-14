let userName = 'Juan';
console.log(userName);

//Cannot be a reserved keyword (let, const, function, class, etc)
//Meaningful names
//No special characters, except the underscore '_', the dollar sign '$', and the backtick '`'
//No numbers at the beginning of the name
//No special characters like !, @, #, %, etc
//No predefined names (e.g. Array, Object, etc)

//Types of variable in JavaScript are the following:
//Primitive types: String, Number, Boolean, Null, Undefined
//Reference types: Object

//Null is used when you want to clear a variable
//Undefined is used when a variable is declared but not assigned a value

let person = {
    firstName : 'Adrian',
    lastName : 'De Souza',
    age : 23,
    isApproved : true,
    isActive : true,
    nullExample : null,
    selectedColor : null
};

person.name =  'Lo cambie solo para vers';

let selection = 'name';
person[selection] = 'Lo cambie solo para version 2';


//let firstName, lastName, age, isApproved, isActive, nullExample, selectedColor;

//firstName = 'Adrian';
//lastName = 'De Souza';
//age = 23;
//isApproved = true;
//isActive = true;
//nullExample = null;
//selectedColor = null;

console.log(person.name);



/////////////////////////////////////////////////////////////////////////////////////

//Arrays 

let selectedColors = ['red', 'blue', 'green'];

selectedColors[3] = 3
console.log(selectedColors);
console.log(selectedColors[3]);
console.log(selectedColors.length); 

function greet(name, lastName){
    console.log('Hello, ' + name + ' ' + lastName);
}

greet('Adrian', 'De Souza');



function square(number){
    return number * number;
}

console.log(square(5));



