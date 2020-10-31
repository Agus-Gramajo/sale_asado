//Calculadora de cantidades para hacer asado, en base a la cantidad de comensales que el usuario indique.
//Va a calcular los porcentajes de cada producto, tieniendo en cuenta la indicacion del usuario sobre preferencias de eleccion de tipos de carne.
//Una vez generado el total del calculo, el usuario va a poder seleccionar cuales de esos productos, finalmente, quiere agregar a un pedido, pudiendo proceder al pago.
// window.onload = function () {
//     RecibirDatos()
// }

//Variables a definir por el usuario

var nameInput = document.getElementById("user-name");    
var cantComensales = document.getElementById("cantComensales");
var cantAchura = document.getElementById("cantAchura");    
var cantCerdo = document.getElementById("cantCerdo");
var btnCalc = document.getElementById('btn-calcular');

btnCalc.addEventListener('click', function(){
    console.log(nameInput.value);
    console.log(cantComensales.value);
    console.log(cantAchura.value);
    console.log(cantCerdo.value);
})

function userInput(nameInput) {
	this.name=nameInput.value;
}
var user = new userInput(nameInput);

//console.log(JSON.stringify(user))
localStorage.setItem('input del usuario', JSON.stringify(user));
var infoLocalParseado = JSON.parse(localStorage.getItem('input del usuario'));

//Funcion para traer datos del html

// var detallePedido = [vacio, pechito, entrana]
// function totalDelPedido(unCarrito) {
//     var total = 0
//     unCarrito.forEach(corte => {
//         total += corte.precio
//     });
//     return total
// }

//Detalle carne de vaca -funcion para dividir kgCarneVaca entre los cortes que pertenezcan a esa categoria, para luego subirlos al array pedido
//detalleVaca = function(Producto) {
//    if (tipoCarne = 'vaca') {
//        kgCarneVaca / 4
//    } else {
//
//    }
//    console.log(`El detalle del pedido es: ${pedido}`)
//    pedido.push(detalleVaca)
//}

//Subtotal carne Cerdo -funcion para dividir kgCarneCerdo entre los cortes que pertenezcan a esa categoria, para luego subirlos al array pedido
//detalleCerdo = function() {
//    pedido.push(detalleCerdo)
//}

//Subtotal achuras - -funcion para dividir kgAchuras entre los cortes que pertenezcan a esa categoria, para luego subirlos al array pedido
//detalleAchuras = function() {
//    pedido.push(detalleAchuras)
//}

//Generador de lista de pedido - Funcion que deberia armar el listado con el detalle de los cortes, precios y kg correspondientes
//generadorPedido = function() {
//    this.detalleVaca();
//    this.detalleCerdo();
//    this.detalleAchuras();

//    console.log(`El detalle del pedido es: ${pedido}`)
//}

//Instancia del calculador de coeficientes
// var calculadora = new CalcularCarne();

// calculadora.calculoCoefAchura();
// calculadora.calculoCoefCerdo();
// calculadora.calculadorCantidades();

// console.log("El importe del pedido es $ " + totalDelPedido(detallePedido));

// document.getElementById('CallCalcFunction').onclick=function(CalcularCarne)
// {
//     var calculadora = new CalcularCarne();

//     calculadora.calculoCoefAchura();
//     calculadora.calculoCoefCerdo();
//     calculadora.calculadorCantidades();

//     console.log(CalcularCarne)
// };