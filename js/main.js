/* Variables */
let salirDelMenu = false;
let Bebidas;
let todasLasBebidas = "";
let nombreBebidas = "";
let precioBebidas = 0;
let consulta;
let consulta2;
let descuento;
let ConRecargo;
let todasLasBebidasConDescuento;
let todasLasBebidasConRecargo;

/*Funciones */
function mostrarbebidas() {
    Bebidas = parseInt(
        prompt(`
    Estos son las bebidas que tenemos para vender: 
      1 - Fernet Branca - Precio: $2999
      2 - Gancia 950Ml - Precio: $902
      3 - Cerveza BRAHMA PACK Latas x24 - Precio: $7047
      4 - Malibu 750Ml - Precio: $3430
      5 - Campari 750Ml - Precio: $1496
      6 - Vodka Absolut - Precio: $2421
      7 - Tekila Jose Cuervo - Precio: $7450
      8 - Ron Capitan Morgan  - Precio: $5880
      9 - Whisky Importado - Precio: $15000
      
  Escoge las bebidas que deseas comprar.`)
    );

    /* Opciones de compra */
    switch (Bebidas) {
        case 1:
            precioBebidas = 2999;
            nombreBebidas = "Fernet Branca,";
            alert(`Agregaste ${nombreBebidas} al carro de compras.`);
            todasLasBebidas += nombreBebidas;
            break;

        case 2:
            precioBebidas += 902;
            nombreBebidas = "Gancia 950Ml,";
            alert(`Agregaste ${nombreBebidas} al carro de compras`);
            todasLasBebidas += nombreBebidas;
            break;

        case 3:
            precioBebidas += 7047;
            nombreBebidas = "Cerveza BRAHMA PACK Latas x24,";
            alert(`Agregaste ${nombreBebidas} al carro de compras`);
            todasLasBebidas += nombreBebidas;
            break;

        case 4:
            precioBebidas += 3430;
            nombreBebidas = "Malibu 750Ml,";
            alert(`Agregaste ${nombreBebidas} al carro de compras`);
            todasLasBebidas += nombreBebidas;
            break;

        case 5:
            precioBebidas += 1496;
            nombreBebidas = "Campari 750Ml,";
            alert(`Agregaste ${nombreBebidas} al carro de compras`);
            todasLasBebidas += nombreBebidas;
            break;

        case 6:
            precioBebidas += 2421;
            nombreBebidas = "Vodka Absolut,";
            alert(`Agregaste ${nombreBebidas} al carro de compras`);
            todasLasBebidas += nombreBebidas;
            break;

        case 7:
            precioBebidas += 7450;
            nombreBebidas = "Tekila Jose Cuervo,";
            alert(`Agregaste ${nombreBebidas} al carro de compras`);
            todasLasBebidas += nombreBebidas;
            break;

        case 8:
            precioBebidas += 5880;
            nombreBebidas = "Ron Capitan Morgan,";
            alert(`Agregaste ${nombreBebidas} al carro de compras`);
            todasLasBebidas += nombreBebidas;
            break;

        case 9:
            precioBebidas += 15000;
            nombreBebidas = "Whisky Importado,";
            alert(`Agregaste ${nombreBebidas} al carro de compras`);
            todasLasBebidas += nombreBebidas;
            break;

            /* Opcion Obligatoria */
        default:
            alert("Ingrese una opcion del 1 al 9");
            break;
    }
}

/* FUNCION PARA LAS CUOTAS O EN EFECTIVO LAS BEBIDAS EN EL CARRO DE COMPRAS  */
function carroDeComprasEnCuotasOTarjetas() {
    consulta = prompt(
        `Desea comprar las bebidas en efectivo o en tarjetas al carro de compras? Indique Efectivo o Tarjetas.`
    ).toLowerCase();

    switch (consulta) {
        case "efectivo":
            descuento = precioBebidas * 0.1;
            todasLasBebidasConDescuento = precioBebidas - descuento;
            alert(
                `EXCELENTE!! se le hace un descuento de 10%, en total es: ${todasLasBebidasConDescuento} que lo difrutes`
            );
            todasLasBebidas = "";
            precioBebidas = 0;
            break;

        case "tarjeta":
            alert(
                "En 1 cuota no tiene recargo, si no,  tiene un recargo de 10% en 3,6 o 12. en cuantas cuotas quiere hacerlo"
            );
            consulta2 = parseInt(prompt("Ingrese numero de cuotas:"));
            console.log(consulta2);
            if (consulta2 === 1) {
                alert(`EXCELENTE!! compraste ${todasLasBebidas} que lo difrutes`);
                todasLasBebidas = "";
                precioBebidas = 0;
                break;
            } else if (consulta2 === 3) {
                ConRecargo = precioBebidas * 0.1;
                todasLasBebidasConRecargo = precioBebidas + ConRecargo;
                alert(
                    `EXCELENTE!! Tu compra salio en total: ${todasLasBebidasConRecargo} que lo difrutes`
                );
                todasLasBebidas = "";
                precioBebidas = 0;
            } else if (consulta2 === 6) {
                ConRecargo = precioBebidas * 0.1;
                todasLasBebidasConRecargo = precioBebidas + ConRecargo;
                alert(
                    `EXCELENTE!! Tu compra salio en total: ${todasLasBebidasConRecargo} que lo difrutes`
                );
                todasLasBebidas = "";
                precioBebidas = 0;
            } else if (consulta2 === 12) {
                ConRecargo = precioBebidas * 0.1;
                todasLasBebidasConRecargo = precioBebidas + ConRecargo;
                alert(
                    `EXCELENTE!! Tu compra salio en total: ${todasLasBebidasConRecargo} que lo difrutes`
                );
                todasLasBebidas = "";
                precioBebidas = 0;
            } else {
                alert("No es valido el pago.");
            }
    }
}

/* Menu Principal */

let edad = parseInt(prompt("Ingrese su edad:"));

while (edad < 18) {
    alert("Usted es menor de edad, no puede ingresar");

    edad = parseInt(prompt("Ingrese nuevamente su edad:"));
}

do {
    let consultar = parseInt(
        prompt(`Ingrese la opcion deseada: 
    
    1 - Consultar bebidas disponibles.
    2 - Ver carro de compras.
    0 - Salir del menu.
    `)
    );

    /* Opciones */
    switch (consultar) {
        case 1:
            mostrarbebidas();
            break;

        case 2:
            if (todasLasBebidas == "") {
                alert("El carro esta vacio, agrega las bebidas que mas les gusten!.");
            } else {
                alert(
                    `En el carro de compras agregaste ${todasLasBebidas} y el precio total es de: $${precioBebidas}.`
                );
                carroDeComprasEnCuotasOTarjetas();
            }
            break;

        case 0:
            alert("GRACIAS POR VISITARNOS, ESPERAMOS QUE VUELVA PRONTO. ");
            salirDelMenu = true;
            break;

            //Opcion Predeterminada
        default:
            alert("Ingrese una opcion correcta del 0 al 2.");
            break;
    }
} while (!salirDelMenu);