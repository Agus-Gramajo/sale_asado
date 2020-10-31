//funcion constructora del objeto "Producto"
function Producto(IdProd, tipoCarne, precioKg) {
    this.id = IdProd;
    this.carne = tipoCarne;
    this.precio = precioKg;
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