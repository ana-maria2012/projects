let name ='ana maris';

name.indexOf('carlos');

console.log(name.indexOf('caro'))

console.log(name.repeat(10))


let autos = [
    {
        brand: "renault",
        color: "red",
        engine: "Electric"
    }, {
        brand: "tesla",
        color: "brown",
        engine: "Electric"
    }, {
        brand: "bmw",
        color: "blue",
        engine: "Mechanic"
    }
]

for (let i=0; i < autos.length; i++) {
    console.log(autos[i].brand);
}

function myFunc(name = 'maria') {
    console.log(`your name is ${name}`);
}



myFunc();

//IIFE

(function() {
    console.log('i am returning myself');
})();

//errors with try and catch

try {
    down();
} catch(error) {
    console.error(error);
} finally {
    console.log('it doesnt matter, me executed anyway')
}

function loading() {
    console.log('downloading...');

    setTimeout(function() {
        console.log('finished');
    }, 1000)
}

loading();

//Date

//Specific Date
let navidad = new Date('12-25-2017');
console.log('date', navidad);


let date = new Date();

let day = date.getDay();
let month = date.getMonth();
console.log(day);
console.log(month);


//switch

let monthLetter;

switch(new Date().getMonth()) {
    case 0:
        monthLetter = 'January';
    case 1:
        monthLetter = 'february';
    case 2:
        monthLetter = 'march';
}

console.log(`this month is ${monthLetter}`);


//for

for(i=1; i <=10; i++) {
    if(i == 5) {
        console.log(`im here ${i}`);
        continue;
    }

    console.log(`${i}`);
}

//forEach

let tasks = ["learn", "eat", "read", "running"];

tasks.forEach(function(element, index) {
    console.log(`${index}: ${element}`)
})



let auto = [
    {
        brand: "renault",
        color: "red",
        engine: "Electric"
    }, {
        brand: "tesla",
        color: "brown",
        engine: "Electric"
    }, {
        brand: "bmw",
        color: "blue",
        engine: "Mechanic"
    }
]


const result = auto.map(function(item) {
    return item.brand;
})

console.log(result);


let myAuto = {
        brand: "renault",
        color: "red",
        engine: "Electric"
    }


for (let item in myAuto) {
    console.log(`${item}: ${myAuto[item]}`);
}

//iterators already included
const cities = ["madrd", "Paris", "London", "Berlin"];
const orders = new Set([223, 455, 655]);
const data = new Map();
data.set('name', 'juan');
data.set('rol', 'web development');

console.log(cities);
console.log(orders);
console.log(data);

//entries cities
for(let entry of cities.entries()) {
    console.log(entry)
}

//entries orders
for(let entry of orders.entries()) {
    console.log(entry)
}


//entries data
for(let entry of data.entries()) {
    console.log(entry)
}

//values cities
for(let entry of cities.values()) {
    console.log(entry)
}

//values orders
for(let entry of orders.values()) {
    console.log(entry)
}


//values data
for(let entry of data.values()) {
    console.log(entry)
}


//keys cities
for(let entry of cities.keys()) {
    console.log(entry)
}

//keys orders
for(let entry of orders.keys()) {
    console.log(entry)
}


//keys data
for(let entry of data.keys()) {
    console.log(entry)
}

//defalut cities
for(let entry of cities) {
    console.log(entry)
}

//default orders
for(let entry of orders) {
    console.log(entry)
}


//default data
for(let entry of data) {
    console.log(entry)
}


//iterate string
let anyString = 'Ana Maria Arbelaez';


for(let letter of anyString) {
    console.log(letter);
}


//in the dom

let link = document.getElementsByTagName('a');

for(let item of link) {
    console.log(item)
}