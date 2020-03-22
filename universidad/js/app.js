// Eliminar de Local Storage
//localStorage.clear();


// let imagenes = document.images;
// let newImages = Array.from(imagenes)

// newImages.forEach(function(images) {
//     console.log(images);
// })

// let enlaces = document.querySelectorAll('#principal a:nth-child(odd)');
// enlaces.forEach(element => {
//     element.style.background = 'red';
//     element.style.color = 'white';
// });
// console.log(enlaces);

// let test = document.querySelectorAll('.card');
// console.log(test[0].lastElementChild)

// let search = document.querySelector('#submit-buscador');
// search.addEventListener('click', function(e) {
//     e.preventDefault();
//     let element = e;
//     console.log(element);
//     console.log(element.target)
//     console.log(element.target.id)
//     console.log(element.target.className)
//     console.log(element.target.innerText)


// })

//type of events

//const btn = document.querySelector('#vaciar-carrito');

//click
//btn.addEventListener('click', execute);

//double click
//btn.addEventListener('dblclick', execute);


//mouseenter
//btn.addEventListener('mouseenter', execute);

//mouseleave
//btn.addEventListener('mouseleave', execute);

//mouseover
//btn.addEventListener('mouseover', execute);

//mouseout
//btn.addEventListener('mouseout', execute);

//mousedown
//btn.addEventListener('mousedown', execute);

//mouseup
//btn.addEventListener('mouseup', execute);



// function execute(e) {
//     console.log(e.type);
// }

let search = document.querySelector('#buscador');

//keydown
//search.addEventListener('keydown', execute);

//keyup
//search.addEventListener('keyup', execute);


// function execute(e) {
//     console.log(search.value)
//     console.log(e.type);
// }

//keypress
//search.addEventListener('keypress', execute);


//focus
//search.addEventListener('focus', execute);

//blur
//search.addEventListener('blur', execute);

//cut
//search.addEventListener('cut', execute);

//copy
//search.addEventListener('copy', execute);

//paste
//search.addEventListener('paste', execute);

// input (this event does all the previous)
//search.addEventListener('input', execute);


// function execute(e) {
//     //document.querySelector('#encabezado').innerHTML = search.value;

//     console.log(e.type)
// }


//event bubbling

const card = document.querySelector('.card')
const infoCard = document.querySelector('.info-card')
const btn = document.querySelector('.agregar-carrito')

card.addEventListener('click', function(e) {
    console.log('Click en card');
    e.stopPropagation();
})

infoCard.addEventListener('click', function(e) {
    console.log('Click en infoCard');
    e.stopPropagation();
})

btn.addEventListener('click', function(e) {
    console.log('Click en btn');
    e.stopPropagation()
})


//delegation
// document.body.addEventListener('click', function(e) {
//     if(e.target.classList.contains('borrar-curso')) {
//         e.target.parentElement.parentElement.remove();
//     }

//     if(e.target.classList.contains('agregar-carrito')) {
//         console.log('added')
//     }
    
// })


//localstorage

localStorage.setItem('name', 'ana');

//remove localStorage

//localStorage.removeItem('name')

//get localstorage
//const name = localStorage.getItem('name')

//console.log(name)

//remove everything in localstorage
//localStorage.clear();


//sessionstorage

//sessionStorage.setItem('name', 'ana')

