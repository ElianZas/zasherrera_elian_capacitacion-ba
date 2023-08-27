/*########----MENU HAMBURGUESA-----#########*/

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

/*########----PRODUCTOS DESTACADOS CAMBIAN AL HACER CLICK EN SUS MINIATURAS-----#########*/

//Creamos un array, que lo pensamos como una lista ordenada de elementos. Cada elemento ocupará una posición.
//En este caso guardaremos objetos dentro de este array, entonces cada objeto va a ocupar un espacio.
//Cada objeto va a estar delimitado entre llaves {producto 1} {producto 2} {producto 3}.
//Entonces tenemos tres objetos, en la posición 0 el producto 1, en la posición 1 el producto 2 y en la posición 2 el producto 3.
//En cada posición guardamos un producto destacado con su respectiva información correspondiente.
//Cada objeto tendrá los siguientes atributos de: nombre, imagen y alt.
//En estos objetos guardamos la información que corresponde a cada producto.
//Al usar un array evitamos la repetición de código.
//Objeto: en este caso cada objeto representa un producto diferencia. Es una estructura que nos permite guardar y organizar datos como propiedades o valores. Es como una un rompecabeza que contiene distintas piezas en su interior(de información), similar a los atributos de un elemento HTML como alt, ref, etc.
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

/*########----CARROUSEL CON CONTROLES (FLECHAS)-----#########*/

// Obtiene las referencias a los botones y la galería
const prevBtn = document.querySelector(".prev-button");
const nextBtn = document.querySelector(".next-button");
const galeria = document.querySelector(".galeriaCarousel");

// Obtiene una lista de todos los artículos en la galería
const cardsProductos = document.querySelectorAll(".galeriaCarousel article");

// Calcula el ancho de cada artículo (incluyendo los márgenes)
const cardsProductosWidth = cardsProductos[0].clientWidth + 40; // Ancho de cada artículo + margen

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

/*########----CARRITO DE COMPRAS USANDO CLASES Y IDS-----#########*/

//Carrito de compra
const listaProductos = document.querySelector(".galeriaCarousel");
//Selecciona nuestra galeria de productos
const btnCarrito = document.querySelector("#btn-carrito");
//Selecciona nuestro botón de carrito en el menú de navegación
//Selecciona el contenedor de nuestro producto
//Como esta clase se repite el comportamiento que le demos afectará a todos ellos
const filaProducto = document.querySelector(".filaProducto"); //Selecciona el sub contenedor donde luego se verá nuestra lista de compra
let totalProductos = [];
const contenedorTotal = document.querySelector(".contenedorTotal");
const valorTotal = document.querySelector(".totalPagar"); //Seleccionamos el elemento con la clase .totalPagar donde mostraremos luego el resultado de una operación
const contadorProductos = document.querySelector("#contador-productos"); //seleccionamos el contador de nuestro html que mostraremos debajo del botón del carrito como indicador de cuántos productos añadimos

const carritoContenedor = document.querySelector(
  //selecciona el contendor general de nuestro carrito
  ".carritoListado"
);

btnCarrito.addEventListener("click", () => {
  //llamamos al método click de js para usarlo con el botón del carrito.
  carritoContenedor.classList.toggle("no-visible"); //metodo toggle sirve para cambiar el estao de la visibilidad de un elemento HTML.
});
//Al hacer click en el botón del carrito se quitara la clase novisible y se mostrará

//Llamamos a un evento que aplicaremos a la lista de productos al hacer click
listaProductos.addEventListener("click", (e) => {
  //le decimos a la lista de productos que seleccionamos (productos que tenemos en la galeria) que acción va a realizar cuando se haga click dentro de este elemento
  //console.log(e.target) //Comprobamos que al hacer click en x elemento nos devuelva su estructura HTML
  //console.log(e.target.classList.contains("precioActual")); //Comprobamos si el elemento en el que damos click tiene la clase precio nos devuelve un valor TRUE de tipo booleano
  //console.log(e.target.classList.contains("btn-agregar-carrito"));//comprobamos que al presionar el boton de agregar al carrito nos tome un valor verdadero TRUE.
  //con e.target podemos saber donde estamos haciéndo click
  //hacemos una condición
  if (e.target.classList.contains("btn-agregar-carrito")) {
    //Vertificamos si el elemento clickeado tiene la clase correspondiente. Si es así nuestra condición se cumple e ingresa al resto del código
    const producto = e.target.closest(".contenedorOfertas"); //e.target sirve para detectar que elemento fue clickeado y con el método closest() tendremos disponibles los elementos más cercanos que tenga la clase contenedorOfertas
    const nombre = producto.querySelector("h3").textContent;
    const precio = producto.querySelector(".precioActual").textContent;
    //Obtenemos el nombre y el precio del producto dentro del contenedor con textContent que tomará el valor que contenga la etiqueta H3 y la clase .precioActual del elemento.

    const productoExistente = totalProductos.find(
      //Buscamos si el producto ya existe en nuestro carrito
      (item) => item.nombre === nombre
    );
    if (productoExistente) {
      //Usamos una condición para verificar que si esto es cierto (true), le sumamos uno a la cantidad base del producto existente.
      productoExistente.cantidad++;
    } else {
      //Si esto NO es cierto (false), y el elemento todavía no existe, lo agregaremos y guardaremos en nuestro array totalProductos como objeto. Le damos una cantidad base de 1.
      totalProductos.push({ nombre, precio, cantidad: 1 });
    }

    actualizarCarrito();
  }
});
const actualizarCarrito = () => {
  //Función para actualizar el carrito de la página
  filaProducto.innerHTML = ""; //Limpiamos el contenido que haya en nuestro HTML dentro del contenedor de nuestra lista de productos.
  //Creamos variables de tipo let ya que necesitamos que sus valores se actualicen.
  let total = 0;
  let totalCarritoProductos = 0;
  if (totalProductos.length === 0) {
    valorTotal.innerHTML = "";
    //si no hay productos en el carrito, muestra un mensaje de carrito vacío
    filaProducto.innerHTML = "<p class='textoVacio'>El carrito está vacío</p>";
  } else {
    //Creamos variable para calcular el total del carrito precio

    totalProductos.forEach((producto) => {
      const contenedorProducto = document.createElement("div");
      contenedorProducto.innerHTML = `
      <div class="infoCarritoProducto">
        <p class="tituloCarritoProducto">${producto.nombre}</p>
        <span class="cantidadCarritoProducto">${producto.cantidad}</span>
        <span class="precioProductoCarrito">${producto.precio}</span>
      </div>
      <button class="btn-eliminar-producto">X</button>`; // Agregamos el botón eliminar
      filaProducto.appendChild(contenedorProducto);
      total = total + parseInt(producto.cantidad * producto.precio.slice(1));
      totalCarritoProductos = totalCarritoProductos + producto.cantidad;
    });

    //Hacemos visible la información que procesamos en nuestro HTML con la propiedad innerHTML del DOM. Lo que hace es establecer la sintaxis de nuestro HTML, permitiéndonos reemplazar el contenido que tenemos de base con el contenido que generamos a través de JS.
    valorTotal.innerHTML = `$${total}`; //Hacemos visible el valor total de la suma de los productos y la cantidad de productos añadidos al carrito
  }
  contadorProductos.innerHTML = totalCarritoProductos;
};

//Al hacer click en el boton para eliminar el producto, se borrará el producto en cuestión
filaProducto.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-eliminar-producto")) {
    //si clickeamos en un elemento que contenga la clase btn-eliminar-producto entonces...
    const nombreProductoEliminar = e.target.parentElement.querySelector(
      //guardamos el contenido del elemento seleccionado que contenga la clase correspondiente, en la variable nombreProductoEliminar
      ".tituloCarritoProducto"
    ).textContent;
    eliminarProducto(nombreProductoEliminar); //Entonces al hacer click en el botón eliminar, si se cumple la condición se ejecutará una función que tomará como parámetro el contenido que guardamos en la variable creada nombreProductoEliminar.
  }
});
function eliminarProducto(nombre) {
  //Tomamos el parámetro anterior y definimos qué acción realizará nuestra función
  totalProductos = totalProductos.filter(
    //Usamos el método "filter" en el arreglo "totalProductos"
    (producto) => producto.nombre !== nombre //este método crea un nuevo arreglo con todos los elementos que cumplan la condición. En este caso filtramos los productos para excluir los productos que tengan el mismo contenido (nombre) dentro de la variable constante que paasamos como parámetro antes.
  );
  actualizarCarrito(); //Actualizamos el carrito con el producto eliminado
}
