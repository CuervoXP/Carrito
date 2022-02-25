const carritoProductos = JSON.parse(localStorage.getItem('carritoDeCompras'));
const contenedorCarrito = document.querySelector('.contenedor-principal');

console.log(carritoProductos);
document.addEventListener('DOMContentLoaded', () => {
    mostrarCarrito2();
    console.log(carrito);
})

const mostrarCarrito2 = () => {
    const carritoRow = document.createElement('div');
    const carritoContent = `<tr>
            
        <td>${carritoProductos.carrito}</td>
        <td>${carritoProductos.carrito}</td>
        <td>
            <button id="boton-sumar" class="sumar">+</button><button id="boton-restar" class="restar">-</button>
        </td>
        <td>${carritoProductos.carrito}</td>
    </tr>`

    carritoRow.innerHTML = carritoContent;
    contenedorCarrito.appendChild(carritoRow);
}
