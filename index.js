// Primer Desafio //
// Algoritmo Utilizando un ciclo //
// 5 Cosas las cuales cumplir para el desafio//

let nombreUsuario = prompt('ingrese su nombre: ')
do {
    if (nombreUsuario !== '' ){
        alert('Bienvenido' + ' ' + nombreUsuario)
    }else {
        alert('Debe ingresar un nombre')
        nombreUsuario = prompt('Ingrese nombre: ')
    }
}
while (nombreUsuario === '')

// 1) se le suma otro número en cada repeticion en la consola//
let numeroPrompt = Number(prompt('Ingrese un numero: '))
// 2) usamos for para repetir un numero fijo de veces.//
for (let index = 0; index < 20; index++) {
numeroPrompt = numeroPrompt + index
console.log(numeroPrompt)
}
// 3) mientras que usamos while cuando queremos repetir algo hasta que se deje de cumplir una condicion. //
// 4) solo se puede saltar escribiendo la palabra (ESC)//
let texto = prompt('Ingrese la palabra clave:ESC ')
while (texto !== 'ESC') {
    console.log('Hola' + texto)
    texto = prompt('Ingrese un texto: ')
}
// 5) Te pide el numero que quieres repetir un Hola en la consola//
let repetir = parseInt(prompt('Coloca un numero de veces que quieras repetir el Hola'))
for (let index = 0; index < repetir; index++) {
    console.log('Hola')
}



//desafio= algoritmo con un condicional utilizando un ciclo en una simulacion interactiva//
let desafio = true;
while (desafio) {
    let respuesta = prompt('¿Desea hacer la compra? escriba (si/no)');
    if (respuesta.toLowerCase()==='si') {
        alert('Compra Realizada')
        console.log('Compra Realizada')
    }else {
        alert('Compra Fallida')
        console.log('Compra Fallida')
    }
}

//Utilizando el filter//
var zapatos = [
    {Principal : "zapatos1", "talla": 41, "color": "negro"},
    {Principal : "zapatos2", "talla": 38, "color": "blanco"},
    {Principal : "zapatos3", "talla": 40, "color": "azul"},
    {Principal : "zapatos4",  "talla": 39, "color": "rojo"},
    {Principal : "zapatos5", "talla": 42, "color": "negro"},
    {Principal : "zapatos6", "talla": 36, "color": "blanco"},
    {Principal : "zapatos7", "talla": 32, "color": "amarillo"},
    {Principal : "zapatos8", "talla": 41, "color": "verde"},
    {Principal : "zapatos9", "talla": 28, "color": "naranja"},
];

var zapatosPrincipalles = calzados;
filter(function(calzado) {
    return calzado.principal === 'zapatos1';
})

console.log(calzadoDeZapatos);


//Usando el Array//
const zapatos1 = {id: 1, nombre: 'zapatos1'}
const calzadosArray = [producto1, {id: 2, nombre: 'zapatos2'}, {id: 3, nombre: 'zapatos3'}, {id: 4, nombre: 'zapatos4'}, {id: 5, nombre: 'zapatos5'}, {id: 6, nombre: 'zapatos6'}, {id: 7, nombre: 'zapatos7'}, {id: 8, nombre: 'zapatos8'}]
calzadosArray.push({id: 9, nombre: 'zapatos9'})
for (const producto of calzadosArray) {
if(producto.id === 2){
producto['nombre'] = zapatos1
}
}

console.log(calzadosArray)

//filter//
var productos = [
    { nombre: "Zapatos1", categoria: "Calzado", precio: 15.000 },
    { nombre: "Zapatos2", categoria: "Calzado", precio: 15.000 },
    { nombre: "zapatos3", categoria: "Calzado", precio: 15.000 },
    { nombre: "zapatos4", categoria: "Calzado", precio: 15.000 },
    { nombre: "zapatos5", categoria: "Calzado", precio: 15.000 },
    { nombre: "zapatos6", categoria: "Calzado", precio: 15.000 },
    { nombre: "zapatos7", categoria: "Calzado", precio: 15.000 },
    { nombre: "zapatos8", categoria: "Calzado", precio: 15.000 },
    { nombre: "zapatos9", categoria: "Calzado", precio: 15.000 },
  ];
  
  var zapatos = productos.filter(function(producto) {
    return producto.categoria === "Calzado";
  });
  
  console.log("Productos de zapatos:");
  console.log(zapatos);

  //simulador interactivo//
while (true) {
    let valor = parseFloat(prompt('Zapatos de $15.000 Cuantos quiere comprar?'));
    const precio = 15.000;
    const valorDelIva = 0.19;
    const valorConIva = precio * valorDelIva;
    const resultado = valor * precio + valorConIva;
    alert('costo total: ' + resultado)
    console.log('Costo total: ' + resultado);
    break;
}

