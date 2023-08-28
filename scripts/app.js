//Datos para empezar//

//Javascript: es un lenguaje que se usa para aplicaciones web. No necesita compilarse y se puede visualizar sus efectos mientras estamos realizándo nuestra página.
//Posee métodos muy útiles que son funciones asociadas a objetos. Estas se usan para hacer acciones específicas.

//Variable: una variable es como una caja donde guardamos un contenido x. Este contenido x es un dato que puede ser de tipo: numérico (entero o decimal), cadena de texto (string) o booleano (falso o verdadero), entre otros.
//Esta caja tendrá: un nombre (por el cual la identificaremos), un valor (su contenido), y un tipo de dato (su "especie"). Por ejemplo: de un auto podemos extraer las siguientes variables: nombre (fiat), puertas (4), patente (1992);
//Para DECLARAR una variable podemos usar: let o const.
//Let - palabra clave que nos permite actualizar el contenido de nuestra variable las veces que queramos.
//Const - palabra clave que nos permite mantener fijo el contenido de nuestra variable.

/*##Para ampliar: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Grammar_and_types##*/

//Array: un array es una lista/secuencia ORDENADA de cajas del mismo tipo o diferentes.
//Siguiendo el ejemplo anterior, podríamos tener un array de autos de una misma marca o de distintas marcas. autosFiat = [auto1, auto2, auto3];
//Cada auto estaría guardado en una posición de nuestra lista, la cual comienza desde la posición 0. Entonces en cada posición podemos guardar un elemento.
//Pueden almacenar variables u objetos.
//Algunos métodos de array son: push (agregar), pop (eliminar). Agrega o elimina elementos dentro de un array.

//Objeto: un objeto es similar a una variable pero la diferencia es que, en una variable podemos guardar solamente un dato. En cambio, en un objeto podemos guardar más de un dato, por ejemplo: tenemos las variables de nuestro auto (características o propiedades), las cuales son de distinto tipo (texto y números). Si queremos guardar varios autos con el mismo tipo de variable. Entonces crearemos un objeto por cada auto, auto1 = nombre, puertas, patente; auto2 = nombre, puertas, patente.

//Función: una función es un bloque de código. Digamos que es una propiedad que podemos crear para nuestras cajas, en donde definiremos que nuestra caja o el contenido de ella pueda realizar una acción o serie de acciones. Es reutilizable, es decir, que podemos llamarla las veces que sean necesarias. Nos ayudan economizar nuestro código. Generalmente las funciones tienen un dato de entrada, llamado parámetro, aunque no es obligatorio y depende de qué queramos hacer.
//En caso de darle un parámetro, este dato es el que le daremos a la función para que lo utilice y haga algo con él. Esta función puede devolver un resultado.
//Las funciones de tipo flecha son una sintaxis más concisa.

//DOM (DOCUMENT OBJET MODEL): /*--Recomiendo la extensión HTML TREE GENERATOR que nos ayuda a ver nuestro documento HTML en una estructura de tipo árbol, mucho más clara y limpia--*/
//El DOM es una representación de la estructura jerárquica de nuestro documento HTML.
//Es como tener un modelo de nuestra página y que nos ayuda a hacerla interactiva.
//Si tenemos nuestra panadería con distintas secciones, estas se mostrarán de forma jerárquica, las secciones como "hermanas", y su interior como hijas de esas secciones, y así sucesivamente.
//Gracias a esta estructura podemos acceder a elementos de nuestro documento HTML y cambiarlos ya sea añadiéndoles otros elementos, obteniendo sus atributos, etc. Podemos incluso modificar estilos, eliminar o agregar clases.
//Una de las características más importantes es que podemos usar los eventos que nos provee, estos eventos sirven para detectar las acciones que hace el usuario en nuestra página, como detecar el click, un arrastre, o tecleo, y demás. Con estos datos podemos hacer nuestra página dinámica, darle más vida e interacción.
//Finalmente es muy útil para validar formularios, ya que podemos analizar los datos que ingrese una persona y corroborar si son correctos, y actualizar de esta forma nuestra página usando el DOM.

/*########----MENU HAMBURGUESA-----#########*/

//Necesitamos que al hacer CLICK sobre el ícono del menú ocurran dos cosas:
//1- nos muestre el menú 2- oculte el menú
//Nos vamos a ayudar con una clase "visible" creada en CSS.

//Creamos las tres variables: menu, abrir, cerrar.
const menu = document.querySelector("#menu-nav"); //guardamos y seleccionamos el elemento con ID menu-nav
const abrir = document.querySelector("#abrir"); //guardamos y seleccionamos el elemento con ID #abrir
const cerrar = document.querySelector("#cerrar"); //guardamos y seleccionamos el elemento con ID #cerrar

/*Creamos variables constantes para guardar el valor que estamos "llamando" a través del DOM. 
Usamos document.querySelector, para seleccionar y decirle a JS que busque dentro de nuestro documento HTML aquellos selectores que contengan el nombre que indicamos. En este caso le pedimos que encuentre los ID respectivos para cada uno de los elementos*/

/*###Dos formas de escribir una función###*/
/*#1#*/
abrir.addEventListener("click", abre); //al hacer click en el ícono del menú se ejecuta la función abre
//hacemos que se muestre el menú al hacer click
function abre() {
  menu.classList.add("visible"); //añade la clase "visible" a nuestro menu-nav
  cerrar.classList.add("visible"); //añade la clase "visible" a nuestro ícono de cierre del menú
}
//hacemos que se cierre el menú al hacer click en el ícono de cierre del menú
/*#2#*/
/*Función de tipo flecha*/
cerrar.addEventListener("click", () => {
  menu.classList.remove("visible");
  cerrar.classList.remove("visible");
});

/*########----PRODUCTOS DESTACADOS CAMBIAN AL HACER CLICK EN SUS MINIATURAS-----#########*/

/*Al hacer click en cada miniatura cambiará el producto visualizado, su nombre y su descripción*/

//Creamos un array, que lo pensamos como una lista ordenada de elementos. Cada elemento ocupará una posición.
//En este caso guardaremos objetos dentro de este array, entonces cada objeto va a ocupar un espacio.
//Cada objeto va a estar delimitado entre llaves {producto 1} {producto 2} {producto 3}.
//Entonces tenemos tres objetos, en la posición 0 el producto 1, en la posición 1 el producto 2 y en la posición 2 el producto 3.
//En cada posición guardamos un producto destacado con su respectiva información correspondiente.
//Cada objeto tendrá los siguientes atributos de: nombre, imagen y alt.
//En estos objetos guardamos la información que corresponde a cada producto.
//Al usar un array evitamos la repetición de código.
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

//Seleccionamos los elementos de nuestro documento HTML a través del uso del DOM.
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

//Cuando hacemos click en el botón del producto 1 llamamos a la función mostrarProducto con el índice 0. Este corresponde al primer producto que se encuentra en nuestro array "productos"
//Le indicamos un parámetro con el que trabajará nuestra función, "índice". Con este le diremos qué producto queremos que se muestre.
function mostrarProducto(indice) {
  imgProducto.src = productos[indice].imagen; //actualizamos la ruta de la imágen para cambiarla por la que corresponda según la posición en la que se encuentre el producto dentro del array
  imgProducto.alt = productos[indice].alt; //actualizamos el atributo "ALT" de la imágen para modificar la descripción de nuestra imágen
  nombreProducto.innerHTML = productos[indice].nombre; //actualizamos el nombre del producto a través de la propiedad innerHTML. Esta propiedad nos permite acceder o modificar el contenido HTML, haciendo referencia a todo lo que se encuentra dentro de las etiquetas que componen nuestra web.
  descripcion_producto.innerHTML = productos[indice].parrafo;
}

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
  // Calcula la cantidad de desplazamiento basado en el índice actual y el ancho de los artículos con la propiedad "Width" (se obtiene el anacho del elemento del DOM)
  const tamañoScroll = posicion * cardsProductosWidth;

  galeria.scrollLeft = tamañoScroll; //scrollLeft sirve para establecer la cantidad de desplazamiento horizontal del elemento (es una propiedad de JS)
}

/*########----CARRITO DE COMPRAS USANDO CLASES Y IDS-----#########*/

/*Necesitamos:
Detectar qué producto se quiso agregar al hacer click en el botón de añadir al carrito
Obtener sus datos y guardarlos para sumarlos a nuestro carrito de compras
Que al hacer click en el carrito nos muestre el contenido
Que hacer click en el boton de añadir el producto se guarde
Que se sume cada producto al añadirlo al carrito
Que se sume el total del precio de cada uno de los productos añadidos
Que al hacer click en el botón eliminar del producto correspondiente se elimine el mismo*/

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
  carritoContenedor.classList.toggle("no-visible"); //metodo toggle sirve en este caso para cambiar el estado de visibilidad de un elemento HTML.
});
//Al hacer click en el botón del carrito se quitara la clase novisible y se mostrará, al hacer click nuevamente se volverá a colocar.

//Llamamos a un evento que aplicaremos a la lista de productos al hacer click
listaProductos.addEventListener("click", (e) => {
  //le decimos a la lista de productos que que haga algo cuando se haga click dentro de este elemento

  //COMENTARIOS
  //console.log(e.target) //Comprobamos que al hacer click en x elemento nos devuelva su estructura HTML
  //console.log(e.target.classList.contains("precioActual")); //Comprobamos si el elemento en el que damos click tiene la clase precio nos devuelve un valor TRUE de tipo booleano
  //console.log(e.target.classList.contains("btn-agregar-carrito"));//comprobamos que al presionar el boton de agregar al carrito nos tome un valor verdadero TRUE.
  //con e.target podemos saber donde estamos haciéndo click

  //Usamos una condición
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
  let total = 0; //Creamos variable para calcular el total del carrito precio
  let totalCarritoProductos = 0;
  if (totalProductos.length === 0) {
    //Si no hay productos en el carrito, nos muestra un mensaje
    valorTotal.innerHTML = "";
    filaProducto.innerHTML = "<p class='textoVacio'>El carrito está vacío</p>"; //Agregamos un elemento HTML a nuestra estructura HTML
  } else {
    //Si HAY productos recorre nuestro array totalProductos.
    totalProductos.forEach((producto) => {
      const contenedorProducto = document.createElement("div"); //crea un nuevo contenedor de producto para el carrito
      contenedorProducto.innerHTML = `
      <div class="infoCarritoProducto">
        <p class="tituloCarritoProducto">${producto.nombre}</p>
        <span class="cantidadCarritoProducto">${producto.cantidad}</span>
        <span class="precioProductoCarrito">${producto.precio}</span>
      </div>
      <button class="btn-eliminar-producto">X</button>`; // Agregamos el botón eliminar
      filaProducto.appendChild(contenedorProducto); //agregamos un elemento HTML como hijo de otro elemento HTML existente que guardamos antes en filaProducto.
      total = total + parseInt(producto.cantidad * producto.precio.slice(1)); //calculamos el subtotal para este producto y actualizamos los totales
      totalCarritoProductos = totalCarritoProductos + producto.cantidad;
    });

    //Hacemos visible la información que procesamos en nuestro HTML con la propiedad innerHTML del DOM. Lo que hace es establecer la sintaxis de nuestro HTML, permitiéndonos reemplazar el contenido que tenemos de base con el contenido que generamos a través de JS.
    valorTotal.innerHTML = `$${total}`; //Hacemos visible el valor total de la suma de los productos
  }
  contadorProductos.innerHTML = totalCarritoProductos; //Modificamos el contenito HTML de este elemento para reflejar la cantidad total de productos en nuestro carrito
};

//Al hacer click en el boton para eliminar el producto, se borrará el producto en cuestión
filaProducto.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-eliminar-producto")) {
    //si clickeamos en un elemento que contenga la clase btn-eliminar-producto entonces...
    const nombreProductoEliminar = e.target.parentElement.querySelector(
      //guardamos el contenido del elemento seleccionado que contenga la clase correspondiente, en la variable nombreProductoEliminar
      ".tituloCarritoProducto"
    ).textContent;
    eliminarProducto(nombreProductoEliminar); //En resumen, al hacer click en el botón eliminar, si se cumple la condición se ejecutará una función que tomará como parámetro el contenido que guardamos en la variable creada nombreProductoEliminar.
  }
});
function eliminarProducto(nombre) {
  //Tomamos el parámetro anterior y definimos qué acción realizará nuestra función
  totalProductos = totalProductos.filter(
    //Usamos el método "filter" en el arreglo "totalProductos"
    (producto) => producto.nombre !== nombre //este método crea un nuevo arreglo con todos los elementos que cumplan la condición. En este caso filtramos los productos para excluir los productos que tengan el mismo contenido (nombre) dentro de la variable constante que pasamos como parámetro antes.
  );
  actualizarCarrito(); //Actualizamos el carrito con el producto eliminado
}

// Obtenemos al botón "Subir", en vez de usar queryselector usamos elementobyid, la diferencia entre ambos es que uno nos deja seleccionar cualquier tipo de atributo del elemento sea clase o id, y el elementbyid solo nos deja seleccionar elementos que tengan id (recordar que los ids son únicos y es una buena práctica utilizarlos una vez por elemento, también nos ayuda a no repetir identificadores)
const btnSubir = document.getElementById("btn-subir");

// Obtenemos el elemento "encabezado"
const encabezado = document.getElementById("encabezado");

// Agregamos un evento de clic al botón "Subir"
btnSubir.addEventListener("click", function () {
  // Desplazamos la página hacia el encabezado mediante el método scrollIntoView
  encabezado.scrollIntoView({ behavior: "smooth" }); //hacemos que el scroll tenga el comportamiento de "smooth" es decir que suavice el movimiento
});
