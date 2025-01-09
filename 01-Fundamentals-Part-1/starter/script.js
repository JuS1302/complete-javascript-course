/*

// Values and variables

let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);

// ---------------------------------------------

// Variables name conventions

let myFirstJob = "Marketing manager";
let myCurrentJob = "Developer";

console.log(myCurrentJob);

// ---------------------------------------------

// types de données

1. number
2. string
3. boolean
4. undefined
5. null
6. symbol
7 big int

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

// ---------------------------------------------

// déclarer une variable
let age = 30;
age = 31;

const birthYear = 1988;

var job = "programmer";
job = "coder";

// ---------------------------------------------

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

// ---------------------------------------------

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

// ---------------------------------------------

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

// ---------------------------------------------

// take décision, if else statement

const age = 17;

if(age >= 18) {
  console.log('Sarah can start driving license');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

// ---------------------------------------------

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

// ---------------------------------------------

// type conversion and coercion

// conversion manuelle
const inputYear = '1991'; //string
console.log(Number(inputYear)); //number

console.log(String(23)); //convertit en string

// coersion
console.log('I am ' + 23 + ' years old'); // convertit 23 automatiquement en string

console.log('23' - '10' - 3); // convertit 23 et 10 en number pour faire l'opération grace à l'opérateur

let n = '1' + 1; // le + fait une concaténation : 11
n = n - 1; // le - convertir en number donc résultat 10

// ---------------------------------------------

// Valeurs vraies et fausses

// 5 falsy values : 0, '', undefinded, null, NaN

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Jonas')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false

const money = 0; //considéré comme false car 0
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("Get a job"); // la réponse qui est retournée
}

// à l'inverse avec money = 100, considéré comme true
// réponse retournée = don't spend it all

let height; //considéré comme false car pas défini
if (height) {
  console.log("defined");
} else {
  console.log("undefined"); // la réponse qui est retournée
}

// à l'inverse avec height = 123, considéré comme true
// réponse retournée = defined

// ---------------------------------------------

// equality operators

const age = 18; // assignation
if (age === 18) console.log("strictement égal");

'18' == 18; // le double égal effectue la coersion donc 2 nombres identiques > true
'18' === 18; // le strictement égal ne fait pas la conersion > donc false

// pour la comparaison le strictement égal est plus propre
// il est préférable de faire la conversion avant la comparaison

const favourite = Number(prompt("what is your favourite number?")); // prompt ouvre une pop in, Number convertit en nombre
console.log(favourite);
console.log(typeof favourite); // string

if (favourite === 7) { // on peut donc comparer strictement le nombre, pas besoin de conversion
  console.log('Cool! 7 is an amazing number');
} else if (favourite === 13) {
  console.log('Cool! 13 is an amazing number');
} else {
  console.log('Number is not 7 or 13');
}

if (favourite != 13) console.log('why not 13?'); // différent de

// ---------------------------------------------

// Boolean logic

// AND OR et NOT

const hasDRiversLicense = true; // A
const hasGoodVision = false; // B

console.log(!hasDRiversLicense); // inverse
console.log(hasDRiversLicense && hasGoodVision); // false
console.log(hasDRiversLicense || hasGoodVision); // true

if (hasDRiversLicense && hasGoodVision) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone shoud drive");
}
// retourne someone should drive

const isTired = false;
if (hasDRiversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone shoud drive");
}
// retourne sarah is able to drive

// ---------------------------------------------

// Challenge 3

const scoreDolphins = (96 + 108 + 89) / 3;

const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
} else if (scoreDolphins === scoreKoalas) {
    console.log("Both win the trophy");
} else {
    console.log("Koalas win the trophy");
}

// ---------------------------------------------

// The switch statement

const day = 'friday'

switch(day) {
  case 'monday':
    console.log('plan course structure');
    break;
  case 'tuesday':
    console.log('prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('write code examples');
    break;
  case 'friday':
    console.log('record videos');
    break;
  default:
    console.log('not a valid day');
}

// ---------------------------------------------

// statements and expressions

3 + 4 // expression
1991 // expression
true && false && !false // expression

// statement qui déclare une variable
if (23 > 10) {
  const str = '23 is bigger'; // string is an expression
}

// expression produce values
// statements translate our actions

// ---------------------------------------------

// conditional (ternary) operator

const age = 23;

// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

// ---------------------------------------------

// Challenge 4

const bill = 230;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`);

*/

// ---------------------------------------------

// Javascript releases: ES5, ES6+ and ESNEXT


