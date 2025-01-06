/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);

//----------------------------

// Variables name conventions

let myFirstJob = "Marketing manager";
let myCurrentJob = "Developer";

console.log(myCurrentJob);

//----------------------------

// fonction typeof pour connaitre le type de valeur
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun);

// type undefined variable vide
let year;
console.log(typeof year);

//on assigne une valeur à la variable vide
year = 1988;
console.log(typeof year);

// type null
console.log(typeof null);
// retourne object dans la console : bug
// doit retourner null

//----------------------------

// déclarer une variable
let age = 30;
age = 31;

const birthYear = 1988;

var job = "programmer";
job = "coder";

//----------------------------

// les types d'opérateurs

// math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 = 2 * 2 * 2

const firstName = 'Julie';
const lastName = "Simon"
console.log(firstName + ' ' + lastName);

// assignement operators
let x = 10 + 5; // 15
x += 10; // x + x + 10 = 25
x *= 4 // x + x + 10 * 4 = 100
x ++; // x = x + 1
x --; // x = x - 1
console.log(x);

// comparison operators
console.log(ageJonas > ageSarah); // > < >= <=
console.log(ageSarah <= 18); // return false

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);
// les opérateurs math sont exécutés avant les opérateurs de comparaison

let x,y;
x = y = 25 - 10 - 5;
console.log(x, y); // x = y = 10
// retourne 10 10, les - sont prioritaires par rapport aux =

//const averageAge = ageJonas + ageSarah / 2;
// la division est prioritaire par rapport au +
// donc il faut mettre des ()
const averageAge = ( ageJonas + ageSarah ) / 2;
console.log(averageAge);

//-----------------------------

// challenge 1

let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

massMark = 95;
heightMark = 1.88;

massJohn = 85;
heightJohn = 1.76;

let BMIMark = massMark / (heightMark * heightMark)
let BMIJohn = massJohn / (heightJohn * heightJohn)
let markHigherBMI = BMIMark > BMIJohn

console.log(BMIMark);
console.log(BMIJohn);
console.log(markHigherBMI);

//----------------------------------

// Strings et template literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I am " + firstName + ', a ' + (year - birthYear) +  ' years old ' + job + '!';
console.log(jonas);

// meilleure façon de concaténer
const newJonas = `I am ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(newJonas);

// string with multiple lines
console.log('String with \n\
multiple \n\
lines');

// + simple avec des backtics
console.log(`String with
multiple
lines`);

//-------------------------------

// take décision, if else statement

const age = 17;

if(age >= 18) {
  console.log('Sarah can start driving license');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

//-----------------------------

// challenge 2

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if(BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn} is higher than Mark's (${BMIMark})!`);
}
*/

//----------------------------------

// type conversion and coercion

// conversion manuelle
const inputYear = '1991'; //string
console.log(Number(inputYear)); //number

console.log(String(23)); //convertit en string

// coersion
console.log('I am ' + 23 + ' years old'); // convertit 23 automatiquement en string

console.log('23' - '10' - 3); // convertit 23 et 10 en number pour faire l'opération grace à l'opérateur

let n = '1' + 1; // le + faire une concaténation : 11
n = n - 1; // le - convertir en number donc résultat 10

