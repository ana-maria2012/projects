//varaibles
const carrito = document.getElementById('carrito');
const courses = document.getElementById('lista-cursos');
const listCarrito = document.getElementById('lista-carrito');
const card = document.querySelector('.card');
const removeCourse = document.querySelector('.borrar-curso');
const clearCarrito = document.getElementById('vaciar-carrito');




//listeners

courses.addEventListener('click', addToCarrito);

carrito.addEventListener('click', removeToCarrito);

clearCarrito.addEventListener('click', clearToCarrito);

document.addEventListener('DOMContentLoaded', readLocalStorage);

//functiones
function addToCarrito(e) {
    if (e.target.classList.contains('agregar-carrito')) {
        const card = e.target.parentElement.parentElement;
        readDateCourse(card);
    }
}

function readDateCourse(card) {
    const infoCourse = {
        imagen: card.querySelector('img').src,
        title: card.querySelector('h4').innerText,
        price: card.querySelector('.precio span').innerText,
        id: card.querySelector('.agregar-carrito').getAttribute('data-id')
    }

    insertTocarrito(infoCourse);
}

function insertTocarrito(course) {
    const table = listCarrito.tBodies[0];
    const row = document.createElement('tr');

    row.innerHTML = `<td><img src=${course.imagen} witdth="50" height="100"></td>
                    <td>${course.title}</td>
                    <td>${course.price}</td>
                    <td><a href="#" data-id=${course.id} class="borrar-curso">X</td>
                    `;

    table.appendChild(row);

    addLocalstorage(course);
}

function removeToCarrito(e) {
    e.preventDefault();

    let course = e.target.parentElement.parentElement

    if (e.target.classList.contains('borrar-curso')) {
        course.remove();
    }


    removeCourseLocalStorage(course.querySelector('.borrar-curso').getAttribute('data-id'));
}

function clearToCarrito() {
    const size = listCarrito.tBodies[0].children.length;

    for (let i = 0; i < size; i++) {
        listCarrito.tBodies[0].firstElementChild.remove();
    }

    clearLocalStorage();

    return false;

}

function addLocalstorage(course) {
    let courses = getCourseLocalSorage();
    courses.push(course);

    localStorage.setItem('courses', JSON.stringify(courses));
    
}

function getCourseLocalSorage() {
   let coursesLs;

    if (localStorage.getItem('courses') === null) {
        coursesLs = [];
    } else {
        coursesLs = JSON.parse(localStorage.getItem('courses'));
    }

    return coursesLs;
}

function readLocalStorage() {
    let courses = getCourseLocalSorage();
    const table = listCarrito.tBodies[0];

    courses.forEach(element => {
        const row = document.createElement('tr');

        row.innerHTML = `<td><img src=${element.imagen} witdth="50" height="100"></td>
                        <td>${element.title}</td>
                        <td>${element.price}</td>
                        <td><a href="#" data-id=${element.id} class="borrar-curso">X</td>
                        `;

        table.appendChild(row);
    });



}


function removeCourseLocalStorage(id) {
    let courses = getCourseLocalSorage();

    courses.forEach((course, index) => {
        if (course.id === id) {
            courses.splice(index, 1);
        }
    });

    // //REMBER localstorage just can get strings
    localStorage.setItem('courses', JSON.stringify(courses));
}

function clearLocalStorage() {
    localStorage.clear();
}