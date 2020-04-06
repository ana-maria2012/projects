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
}

function removeToCarrito(e) {
    e.preventDefault();

    if (e.target.classList.contains('borrar-curso')) {
        e.target.parentElement.parentElement.remove()
    }
}

function clearToCarrito() {debugger
    const size = listCarrito.tBodies[0].children.length;

    for (let i = 0; i < size; i++) {
        listCarrito.tBodies[0].firstElementChild.remove();
    }

    return false;
}