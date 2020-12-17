//Calculadora de cantidades para hacer asado, en base a la cantidad de comensales que el usuario indique.
//Va a calcular los porcentajes de cada producto, tieniendo en cuenta la indicacion del usuario sobre preferencias de eleccion de tipos de carne.
//Una vez generado el total del calculo, el usuario va a poder seleccionar cuales de esos productos, finalmente, quiere agregar a un pedido, pudiendo proceder al pago.

//letiables a definir por el usuario
cantComensales = prompt("¿Cuánta gente va a comer?");
cantAchura = prompt("¿Comen achuras? (Mucho, poco o nada)").toLowerCase();
cantCerdo = prompt("¿Todo Vaca, Mixto o Todo Cerdo?").toLowerCase();

//Funcion contructora para definir coeficientes en base al input del usuario

class CalcularCarne {
  constructor() {
    this.coefAchura = 0;
    this.coefCerdo = 0;

    this.calculoCoefAchura = function () {
      switch (cantAchura) {
        case "mucho":
          this.coefAchura = 0.3;
          break;
        case "poco":
          this.coefAchura = 0.15;
          break;
        default:
          this.coefAchura = 0;
      }
    };
    this.calculoCoefCerdo = function () {
      switch (cantCerdo) {
        case "todo vaca":
          this.coefCerdo = 0;
          break;
        case "mixto":
          this.coefCerdo = (1 - this.coefAchura) / 2;
          break;
        default:
          this.coefCerdo = 1 - this.coefAchura;
      }
      //Lista con pedido, devuelve una lista con los parametros que selecciono el usuario para calcular las cantidades
      let pedido = [];
      console.log("Detalles del pedido:");
      pedido.push(cantComensales);
      pedido.push(cantAchura);
      pedido.push(cantCerdo);
      console.log(pedido);
      console.log("-------------------------------");
    };
    this.calculadorCantidades = function () {
      let kgTotal = Math.round(cantComensales * 0.4 * 1000) / 1000;
      let kgAchuras = Math.round(this.coefAchura * kgTotal * 1000) / 1000;
      let kgCarneCerdo = Math.round(this.coefCerdo * kgTotal * 1000) / 1000;
      let kgCarneVaca =
        Math.round((kgTotal - kgAchuras - kgCarneCerdo) * 1000) / 1000;

      //Calculador de precios achuras
      let precioChorizo = Math.round((kgAchuras / 4) * chorizo.precio);
      let precioMorcilla = Math.round((kgAchuras / 4) * morcilla.precio);
      let precioMolleja = Math.round((kgAchuras / 4) * molleja.precio);
      let precioChinchu = Math.round((kgAchuras / 4) * chinchu.precio);

      //Calculador de precios vaca
      let precioAsado = Math.round((kgCarneVaca / 3) * asado.precio);
      let precioEntrana = Math.round((kgCarneVaca / 3) * entrana.precio);
      let precioVacio = Math.round((kgCarneVaca / 3) * vacio.precio);

      //Calculador de precios cerdo
      let precioPechito = Math.round((kgCarneCerdo / 3) * pechito.precio);
      let precioMatambre = Math.round((kgCarneCerdo / 3) * matambre.precio);
      let precioBondiola = Math.round((kgCarneCerdo / 3) * bondiola.precio);


      
      console.log(`Para ${cantComensales} comensales la cantidad de carne es de ${kgTotal} Kg
      La cantidad de achuras es: 
     - ${chorizo.id} - Cantidad: ${Math.round((kgAchuras / 4 * 100)) / 100}Kg Total: $${precioChorizo}
     - ${morcilla.id} - Cantidad: ${Math.round((kgAchuras / 4 * 100)) / 100}Kg Total: $${precioMorcilla}
     - ${molleja.id} -  Cantidad: ${Math.round((kgAchuras / 4 * 100)) / 100}Kg Total: $${precioMolleja}
     - ${chinchu.id} - Cantidad: ${Math.round((kgAchuras / 4 * 100)) / 100}Kg Total: $${precioChinchu}

      La cantidad de carne de cerdo es:
      - ${pechito.id} - Cantidad: ${Math.round((kgCarneCerdo / 3 * 100)) / 100}Kg Total: $${precioPechito}
      - ${matambre.id} - Cantidad: ${Math.round((kgCarneCerdo / 3 * 100)) / 100}Kg Total: $${precioMatambre}
      - ${bondiola.id} -  Cantidad: ${Math.round((kgCarneCerdo / 3 * 100)) / 100}Kg Total: $${precioBondiola}

      La cantidad de carne de vaca es:
      - ${asado.id} - Cantidad: ${Math.round((kgCarneVaca / 3 * 100)) / 100}Kg Total: $${precioAsado}
      - ${entrana.id} - Cantidad: ${Math.round((kgCarneVaca / 3 * 100)) / 100}Kg Total: $${precioEntrana}
      - ${vacio.id} -  Cantidad: ${Math.round((kgCarneVaca / 3 * 100)) / 100}Kg Total: $${precioVacio}

      
      Total del pedido: $${
        precioChinchu +
        precioChorizo +
        precioMolleja +
        precioMorcilla +
        precioAsado +
        precioEntrana +
        precioVacio + 
        precioPechito +
        precioMatambre + 
        precioBondiola
      }`)

      alert(`Para ${cantComensales} comensales la cantidad de carne es de ${kgTotal} Kg
        La cantidad de achuras es: 
       - ${chorizo.id} - Cantidad: ${Math.round((kgAchuras / 4 * 100)) / 100}Kg Total: $${precioChorizo}
       - ${morcilla.id} - Cantidad: ${Math.round((kgAchuras / 4 * 100)) / 100}Kg Total: $${precioMorcilla}
       - ${molleja.id} -  Cantidad: ${Math.round((kgAchuras / 4 * 100)) / 100}Kg Total: $${precioMolleja}
       - ${chinchu.id} - Cantidad: ${Math.round((kgAchuras / 4 * 100)) / 100}Kg Total: $${precioChinchu}

        La cantidad de carne de cerdo es:
        - ${pechito.id} - Cantidad: ${Math.round((kgCarneCerdo / 3 * 100)) / 100}Kg Total: $${precioPechito}
        - ${matambre.id} - Cantidad: ${Math.round((kgCarneCerdo / 3 * 100)) / 100}Kg Total: $${precioMatambre}
        - ${bondiola.id} -  Cantidad: ${Math.round((kgCarneCerdo / 3 * 100)) / 100}Kg Total: $${precioBondiola}

        La cantidad de carne de vaca es:
        - ${asado.id} - Cantidad: ${Math.round((kgCarneVaca / 3 * 100)) / 100}Kg Total: $${precioAsado}
        - ${entrana.id} - Cantidad: ${Math.round((kgCarneVaca / 3 * 100)) / 100}Kg Total: $${precioEntrana}
        - ${vacio.id} -  Cantidad: ${Math.round((kgCarneVaca / 3 * 100)) / 100}Kg Total: $${precioVacio}
  
        
        Total del pedido: $${
          precioChinchu +
          precioChorizo +
          precioMolleja +
          precioMorcilla +
          precioAsado +
          precioEntrana +
          precioVacio + 
          precioPechito +
          precioMatambre + 
          precioBondiola
        }`);
    };
    
  }
}

//Detalle carne de vaca -funcion para precioidir kgCarneVaca entre los cortes que pertenezcan a esa categoria, para luego subirlos al array pedido
//detalleVaca = function(Producto) {
//    if (tipoCarne = 'vaca') {
//        kgCarneVaca / 4
//    } else {
//
//    }
//    console.log(`El detalle del pedido es: ${pedido}`)
//    pedido.push(detalleVaca)
//}

//Subtotal carne Cerdo -funcion para precioidir kgCarneCerdo entre los cortes que pertenezcan a esa categoria, para luego subirlos al array pedido
//detalleCerdo = function() {
//    pedido.push(detalleCerdo)
//}

//Subtotal achuras - -funcion para precioidir kgAchuras entre los cortes que pertenezcan a esa categoria, para luego subirlos al array pedido
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
let calculadora = new CalcularCarne();

calculadora.calculoCoefAchura();
calculadora.calculoCoefCerdo();
calculadora.calculadorCantidades();
