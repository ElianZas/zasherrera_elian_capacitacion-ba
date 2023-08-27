/*Creamos variables constantes para guardar
el valor que estamos "llamando" a través del
DOM. 
Usamos document.querySelector, para seleccionar
y decirle a JS que busque dentro de nuestro
documento HTML aquellos selectores que contengan
el nombre que indicamos. En este caso
le pedimos que encuentre los ID respectivos
para cada uno de los elementos*/
const menu = document.querySelector("#menu-nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

/*Dos formas de escribir una función*/
abrir.addEventListener("click", abre);
function abre() {
  menu.classList.add("visible");
  cerrar.classList.add("visible");
}

/*Ahorramos lineas, usamos una función
que no hace falta ponerle un nombre
es una funcion rapida*/
cerrar.addEventListener("click", () => {
  menu.classList.remove("visible");
  cerrar.classList.remove("visible");
});
//Creamos un array, un arreglo que contiene una lista ORDENADA de elementos. Cada elemento ocupará una posición.
//En este caso guardaremos objetos dentro de este array, entonces cada objeto va a ocupar un espacio.
//Cada objeto va a estar delimitado entre llaves {producto 1} {producto 2} {producto 3}.
//Entonces tenemos tres objetos, en la posición 0 el producto 1, en la posición 1 el producto 2 y en la posición 2 el producto 3.
//En cada posición guardamos un producto destacado con su respectiva información correspondiente.
//Cada objeto tendrá los siguientes atributos de: nombre, imagen y alt.
//En estos objetos guardamos la información que corresponde a cada producto.
//Al usar un array evitamos la repetición de código.
//Objeto:
const productos = [
  {
    nombre: "Frambuesa Tentadora",
    imagen: "./images/cupcake-frutilla.png",
    alt: "cupcake de frutilla",
    parrafo:
      "Bizcocho artesanal con frambuesas frescas y crema de vainilla en armonía. Decorado con chocolate blanco y frambuesas bañadas. Una experiencia única.",
  },
  {
    nombre: "Surtidisimo Especial",
    imagen: "./images/cupcake-surtido.png",
    alt: "cupcake surtido",
    parrafo:
      "Bizcocho esponjoso, dulce de leche cremoso, topping de estrellas de colores artesanales. Cada estrella añade un crujido delicado a la experiencia. ",
  },
  {
    nombre: "Oreo chocolatoso",
    imagen: "./images/cupcake-oreo.png",
    alt: "cupcake de oreo",
    parrafo:
      "Base de galleta Oreo, relleno de ganache de chocolate negro y blanco. Decorado con trozos de Oreo y cacao en polvo. El paraíso del chocolate.",
  },
];

//Seleccionamos los elementos de nuestro documento HTML
//a través del uso del DOM.
//Guardamos la seleccion de cada producto en su correspondiente constante.
const producto1_btn = document.querySelector("#producto1");
const producto2_btn = document.querySelector("#producto2");
const producto3_btn = document.querySelector("#producto3");
const imgProducto = document.querySelector("#producto-principal"); //Imágen del producto principal que actualizaremos
const nombreProducto = document.querySelector("#nombre-producto"); //elemento donde se mostrará el nombre del producto
const descripcion_producto = document.querySelector("#descripcion-producto");
//Definimos las funciones de evento para cada botón (miniaturas)
producto1_btn.addEventListener("click", () => mostrarProducto(0));
producto2_btn.addEventListener("click", () => mostrarProducto(1));
producto3_btn.addEventListener("click", () => mostrarProducto(2));

/*Cuando hacemos click en el botón del producto 1 llamamos a la función
mostrarProducto con el índice 0. Este corresponde al primer producto
que se encuentra en nuestro array "productos"*/
/*Le indicamos un parámetro con el que trabajará nuestra función, 
"índice", con este le diremos qué producto queremos que se muestre.*/
function mostrarProducto(indice) {
  imgProducto.src = productos[indice].imagen; //actualizamos la ruta de la imágen para cambiarla por la que corresponda según la posición en la que se encuentre el producto dentro del array
  imgProducto.alt = productos[indice].alt; //actualizamos el atributo "ALT" de la imágen para modificar la descripción de nuestra imágen
  nombreProducto.innerHTML = productos[indice].nombre; //actualizamos el nombre del producto a través de la propiedad innerHTML. Esta propiedad nos permite acceder o modificar el contenido HTML, haciendo referencia a todo lo que se encuentra dentro de las etiquetas que componen nuestra web.
  descripcion_producto.innerHTML = productos[indice].parrafo;
}

/*
producto2_btn.onclick = function () {
  imgProducto.src = "./images/cupcake-surtido.png";
};
producto3_btn.onclick = function () {
  imgProducto.src = "./images/cupcake-oreo.png";
};
*/

// Espera a que se cargue el contenido del DOM antes de ejecutar el script

// Obtiene las referencias a los botones y la galería
const prevBtn = document.querySelector(".prev-button");
const nextBtn = document.querySelector(".next-button");
const galeria = document.querySelector(".galeriaCarousel");

// Obtiene una lista de todos los artículos en la galería
const cardsProductos = document.querySelectorAll(".galeriaCarousel article");

// Calcula el ancho de cada artículo (incluyendo los márgenes)
const cardsProductosWidth = cardsProductos[0].clientWidth + 60; // Ancho de cada artículo + margen

// Inicializa el índice actual en 0
let posicion = 0;

// Agrega un evento de clic al botón "next"
nextBtn.addEventListener("click", () => {
  // Calcula el próximo índice usando el módulo para asegurarse de que esté dentro del rango
  posicion = (posicion + 1) % cardsProductos.length;

  // Llama a la función para realizar el desplazamiento
  scrollGaleria();
});

// Agrega un evento de clic al botón "prev"
prevBtn.addEventListener("click", () => {
  // Calcula el índice anterior usando el módulo y suma el número total de artículos para evitar valores negativos
  posicion = (posicion - 1 + cardsProductos.length) % cardsProductos.length;

  // Llama a la función para realizar el desplazamiento
  scrollGaleria();
});

// Función que realiza el desplazamiento de la galería
function scrollGaleria() {
  // Calcula la cantidad de desplazamiento basado en el índice actual y el ancho de los artículos
  const tamañoScroll = posicion * cardsProductosWidth;

  // Aplica el desplazamiento al atributo scrollLeft de la galería
  galeria.scrollLeft = tamañoScroll;
}
