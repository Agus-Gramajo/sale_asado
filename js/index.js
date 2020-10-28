//Calculadora de cantidades para hacer asado, en base a la cantidad de comensales que el usuario indique.
//Va a calcular los porcentajes de cada producto, tieniendo en cuenta la indicacion del usuario sobre preferencias de eleccion de tipos de carne.
//Una vez generado el total del calculo, el usuario va a poder seleccionar cuales de esos productos, fialmente, quiere agregar a un pedido, pudiendo proceder al pago.


//Variables a definir por el usuario
var cantComensales = 7 //prompt("¿Cuánta gente va a comer?")
var cantAchura = 'mucho' //prompt('¿Mucho, poco o nada?').toLowerCase();
var cantCerdo = 'mixto' //prompt('¿Todo Vaca, Mixto o Todo Cerdo?').toLowerCase();

//Lista con pedido
var pedido = []

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

    this.calculoCoefAchura = function() {
        switch (cantAchura) {
            case "mucho":
                this.coefAchura = 0.3
                break;
            case "poco":
                this.coefAchura = 0.15
                break;
            default:
                this.coefAchura = 0
        }
    }
    this.calculoCoefCerdo = function() {
        switch (cantCerdo) {
            case "todo vaca":
                this.coefCerdo = 0
                break;
            case "mixto":
                this.coefCerdo = (1 - this.coefAchura)/2
                break;
            default:
                this.coefCerdo = 1 - this.coefAchura
        }
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
    }
}


//Declaracion de productos
var asado = new Producto ("Asado", 'vaca', 400)
var entrana = new Producto ("Entraña", 'vaca', 600)
var vacio = new Producto ("Vacío", 'vaca', 550)
var pechito = new Producto ("Pechito de Cerdo", 'cerdo', 600)
var matambre = new Producto ("Matambrito de Cerdo", 'cerdo', 570)
var bondiola = new Producto ("Matambrito de Cerdo", 'cerdo', 490)
var chorizo = new Producto ("Chorizo", 'achuras', 350)
var morcilla = new Producto ("Morcilla", 'achuras', 320)
var molleja = new Producto ("Molleja", 'achuras', 400)
var chinchu = new Producto ("Chinchulin", 'achuras', 250)

//Detalle carne de vaca
detalleVaca = function(Producto) {
    if (tipoCarne = 'vaca') {
        kgCarneVaca / 4
    } else {

    }
    console.log(`El detalle del pedido es: ${pedido}`)
    pedido.push(detalleVaca)
    //aca deberia dividir ${kgCarneVaca}/todos los productos cuyo tipoCarne="vaca" y pushearlos al array "pedido"
}


//Subtotal carne Cerdo
detalleCerdo = function() {
    pedido.push(detalleCerdo)
    //aca deberia dividir ${kgCarneCerdo}/todos los productos cuto tipoCarne="cerdo" y pushearlos al array "pedido"
}

//Subtotal achuras
detalleAchuras = function() {
    pedido.push(detalleAchuras)
    //aca deberia dividir ${kgAchuras}/todos los productos cuyo tipoCarne="achuras" y pushearlos al array "pedido"
}

//Generador de lista de pedido
7generadorPedido = function() {
    this.detalleVaca();
    this.detalleCerdo();
    this.detalleAchuras();

    console.log(`El detalle del pedido es: ${pedido}`)
}

//Instancia del calculador de coeficientes
var calculadora = new CalcularCarne();

calculadora.calculoCoefAchura();
calculadora.calculoCoefCerdo();
calculadora.calculadorCantidades();
