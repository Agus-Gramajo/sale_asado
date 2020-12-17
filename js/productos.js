//funcion constructora del objeto "Producto"
function Producto(IdProd, tipoCarne, precioKg) {
    this.id = IdProd;
    this.carne = tipoCarne;
    this.precio = precioKg;
}

//Declaracion de productos - Productos en los cuales se va a dividir la cantidad de kg, que luego el usuario va a poder agregar al carrito de compras. Va a haber un listado con el detalle del producto, y la cantidad necesaria
const asado = new Producto("Asado", 'vaca', 400);
const entrana = new Producto("Entraña", 'vaca', 600);
const vacio = new Producto("Vacío", 'vaca', 550);
const pechito = new Producto("Pechito de Cerdo", 'cerdo', 600);
const matambre = new Producto("Matambrito de Cerdo", 'cerdo', 570);
const bondiola = new Producto("Bondiola", 'cerdo', 490);
const chorizo = new Producto("Chorizo", 'achuras', 350);
const morcilla = new Producto("Morcilla", 'achuras', 320);
const molleja = new Producto("Molleja", 'achuras', 400);
const chinchu = new Producto("Chinchulin", 'achuras', 250);

