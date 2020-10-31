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
                   // alert("Por favor completá con alguna de las opciones para achuras")
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
                //alert("Por favor completá con alguna de las opciones para cerdo")
                break;
        }
    //Lista con pedido, devuelve una lista con los parametros que selecciono el usuario para calcular las cantidades
    var pedido = []
    //console.log("Detalles del pedido:");
    // pedido.push(cantComensales);
    // pedido.push(cantAchura);
    // pedido.push(cantCerdo);
    // console.log(pedido)
    // console.log("-------------------------------")
    }
    this.calculadorCantidades = function() {
        var kgTotal = Math.round((cantComensales * 0.4)*1000)/1000
        var kgAchuras = Math.round((this.coefAchura * kgTotal)*1000)/1000
        var kgCarneCerdo = Math.round((this.coefCerdo * kgTotal)*1000)/1000
        var kgCarneVaca = Math.round((kgTotal - kgAchuras - kgCarneCerdo)*1000)/1000
        console.log(`${infoLocalParseado.name} Para ${cantComensales} comensales la cantidad de carne es de ${kgTotal} Kg`);
        console.log(`La cantidad de achuras es de ${kgAchuras} Kg`);
        console.log(`La cantidad de carne de cerdo es de ${kgCarneCerdo} Kg`);
        console.log(`La cantidad de carne de vaca es de ${kgCarneVaca} Kg`);
        //alert(`Para ${cantComensales} comensales la cantidad de carne es de ${kgTotal} Kg
        // La cantidad de achuras es de ${kgAchuras} Kg
        // La cantidad de carne de cerdo es de ${kgCarneCerdo} Kg
        // La cantidad de carne de vaca es de ${kgCarneVaca} Kg`);
    }
    }