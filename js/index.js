//Calculadora de cantidades para hacer asado, en base a la cantidad de comensales que el usuario indique.
//Va a calcular los porcentajes de cada producto, tieniendo en cuenta la indicacion del usuario sobre preferencias de eleccion de tipos de carne.
//Una vez generado el total del calculo, el usuario va a poder seleccionar cuales de esos productos, fialmente, quiere agregar a un pedido, pudiendo proceder al pago.


function CalculadorCantidades () {
var cantComensales = prompt("¿Cuánta gente va a comer?")
var kgTotal = cantComensales * 0.35
var kgAchuras = coefAchura * kgTotal
var kgCarneCerdo = coefCerdo * kgTotal
var kgCarneVaca = kgTotal - kgAchuras - kgCarneCerdo
var pedido = []
}

function Producto (IdProd, tipoCarne, precioKg) {
    this.id = IdProd;
    this.carne = tipoCarne;
    this.precio = precioKg;
}

    var asado = new Producto ("Asado", kgCarneVaca, 400)
    var entrana = new Producto ("Entraña", kgCarneVaca, 600)
    var vacio = new Producto ("Vacío", kgCarneVaca, 550)
    var pechito = new Producto ("Pechito de Cerdo", kgCarneCerdo, 600)
    var matambre = new Producto ("Matambrito de Cerdo", kgCarneCerdo, 570)
    var bondiola = new Producto ("Bondiola", kgCarneCerdo, 490)
    var chorizo = new Producto ("Chorizo", kgAchuras, 350)
    var morcilla = new Producto ("Morcilla", kgAchuras, 320)
    var molleja = new Producto ("Molleja", kgAchuras, 400)
    var chinchu = new Producto ("Chinchulin", kgAchuras, 250)

this.calculoCoefAchura = function() {
    var cantAchura = "Mucho" | "Poco" | "No";
    switch (coefAchura) {
       case "Mucho":
        coefAchura = 0.3
        break;
        case "Poco":
        coefAchura = 0.15
        break;
        default:
        coefAchura = 0
    }
}

this.calculoCoefCerdo = function() {
    var cantCerdo = "Todo Vaca" | "Mixto" | "Todo Cerdo"
    switch (coefCerdo) {
        case "Todo Vaca":
        coefCerdo = 0
         break;
         case "Mixto":
        coefCerdo = (1 - coefAchura)/2
         break;
         default:
         coefCerdo = 1 - coefAchura
     }
 

}
