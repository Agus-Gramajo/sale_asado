//Calculadora de cantidades para hacer asado, en base a la cantidad de comensales que el usuario indique.
//Va a calcular los porcentajes de cada producto, tieniendo en cuenta la indicacion del usuario sobre preferencias de eleccion de tipos de carne.
//Una vez generado el total del calculo, el usuario va a poder seleccionar cuales de esos productos, finalmente, quiere agregar a un pedido, pudiendo proceder al pago.


//Variables a definir por el usuario
cantComensales = prompt("¿Cuánta gente va a comer?"); //prompt("¿Cuánta gente va a comer?")
cantAchura = prompt('¿Comen achuras? (Mucho, poco o nada)').toLowerCase(); //prompt('¿Mucho, poco o nada?').toLowerCase();
cantCerdo = prompt('¿Todo Vaca, Mixto o Todo Cerdo?').toLowerCase(); //prompt('¿Todo Vaca, Mixto o Todo Cerdo?').toLowerCase();


//funcion constructora del objeto "Producto"
function Producto(IdProd, tipoCarne, precioKg) {
    this.id = IdProd;
    this.carne = tipoCarne;
    this.precio = precioKg;
}

//Funcion contructora para definir coeficientes en base al input del usuario

function CalcularCarne () {
    this.coefAchura = 0;
    this.coefCerdo = 0;


    this.calculoCoefAchura = function() { //calcula coeficiente para el calculo de kg de achuras
        switch (cantAchura) {
            case "mucho":
                this.coefAchura = 0.3
                break;
            case "poco":
                this.coefAchura = 0.15
                break;
            case "nada":
                this.coefAchura = 0
                break;   
                default:
                    alert("Por favor completá con alguna de las opciones para achuras")
                    break;
        }
    }
    this.calculoCoefCerdo = function() { //calcula coeficiente para el calculo de kg de cerdo
      
        switch (cantCerdo) {
            case "todo vaca":
                this.coefCerdo = 0
                break;
            case "mixto":
                this.coefCerdo = (1 - this.coefAchura)/2
                break;
            case "todo cerdo":
                this.coefCerdo =  1 - this.coefAchura
                break;
            default:
                alert("Por favor completá con alguna de las opciones para cerdo")
                break;
        }
    //Lista con pedido, devuelve una lista con los parametros que selecciono el usuario para calcular las cantidades
    var pedido = []
    console.log("Detalles del pedido:");
    pedido.push(cantComensales);
    pedido.push(cantAchura);
    pedido.push(cantCerdo);
    console.log(pedido)
    console.log("-------------------------------")
    }
    this.calculadorCantidades = function() {
        var kgTotal = Math.round((cantComensales * 0.35)*1000)/1000
        var kgAchuras = Math.round((this.coefAchura * kgTotal)*1000)/1000
        var kgCarneCerdo = Math.round((this.coefCerdo * kgTotal)*1000)/1000
        var kgCarneVaca = Math.round((kgTotal - kgAchuras - kgCarneCerdo)*1000)/1000
        console.log(`Para ${cantComensales} comensales la cantidad de carne es de ${kgTotal} Kg`);
        console.log(`La cantidad de achuras es de ${kgAchuras} Kg`);
        console.log(`La cantidad de carne de cerdo es de ${kgCarneCerdo} Kg`);
        console.log(`La cantidad de carne de vaca es de ${kgCarneVaca} Kg`);
        alert(`Para ${cantComensales} comensales la cantidad de carne es de ${kgTotal} Kg
        La cantidad de achuras es de ${kgAchuras} Kg
        La cantidad de carne de cerdo es de ${kgCarneCerdo} Kg
        La cantidad de carne de vaca es de ${kgCarneVaca} Kg`);
    }
    }
    

//Declaracion de productos - Productos en los cuales se va a dividir la cantidad de kg, que luego el usuario va a poder agregar al carrito de compras. Va a haber un listado con el detalle del producto, y la cantidad necesaria
var asado = new Producto ("Asado", 'vaca', 400)
var entrana = new Producto ("Entraña", 'vaca', 600)
var vacio = new Producto ("Vacío", 'vaca', 550)
var pechito = new Producto ("Pechito de Cerdo", 'cerdo', 600)
var matambre = new Producto ("Matambrito de Cerdo", 'cerdo', 570)
var bondiola = new Producto ("Bondiola", 'cerdo', 490)
var chorizo = new Producto ("Chorizo", 'achuras', 350)
var morcilla = new Producto ("Morcilla", 'achuras', 320)
var molleja = new Producto ("Molleja", 'achuras', 400)
var chinchu = new Producto ("Chinchulin", 'achuras', 250)

var detallePedido = [vacio, pechito, entrana]
function totalDelPedido(unCarrito) {
    var total = 0
    unCarrito.forEach(corte => {
        total += corte.precio
    });
    return total
}

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
var calculadora = new CalcularCarne();

calculadora.calculoCoefAchura();
calculadora.calculoCoefCerdo();
calculadora.calculadorCantidades();


console.log("El importe del pedido es $ " + totalDelPedido(detallePedido));


