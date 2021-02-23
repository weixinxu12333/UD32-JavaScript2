//variables globales
var aux = "";
var num1 = null;
var num2 = null;
var operacion = null;
var resultado = 0;

//al carregar la pagina
document.addEventListener("DOMContentLoaded", function carregar() {
    //numeros
    document.getElementById("b0").addEventListener("click", () => {
        aux += '0';
        document.getElementById("num").value = aux;
    });
    document.getElementById("b1").addEventListener("click", () => {
        aux += '1';
        document.getElementById("num").value = aux;
    });
    document.getElementById("b2").addEventListener("click", () => {
        aux += '2';
        document.getElementById("num").value = aux;
    });
    document.getElementById("b3").addEventListener("click", () => {
        aux += '3';
        document.getElementById("num").value = aux;
    });
    document.getElementById("b4").addEventListener("click", () => {
        aux += '4';
        document.getElementById("num").value = aux;
    });
    document.getElementById("b5").addEventListener("click", () => {
        aux += '5';
        document.getElementById("num").value = aux;
    });
    document.getElementById("b6").addEventListener("click", () => {
        aux += '6';
        document.getElementById("num").value = aux;
    });
    document.getElementById("b7").addEventListener("click", () => {
        aux += '7';
        document.getElementById("num").value = aux;
    });
    document.getElementById("b8").addEventListener("click", () => {
        aux += '8';
        document.getElementById("num").value = aux;
    });
    document.getElementById("b9").addEventListener("click", () => {
        aux += '9';
        document.getElementById("num").value = aux;
    });

    //operaciones
    document.getElementById("suma").addEventListener("click", () => {
        num1 = parseFloat(aux);
        operacion = "suma";
        document.getElementById("num").value = "";
        aux = "";
    });
    document.getElementById("resta").addEventListener("click", () => {
        num1 = parseFloat(aux);
        operacion = "resta";
        document.getElementById("num").value = "";
        aux = "";
    });
    document.getElementById("multiplicar").addEventListener("click", () => {
        num1 = parseFloat(aux);
        operacion = "multiplicar";
        document.getElementById("num").value = "";
        aux = "";
    });
    document.getElementById("dividir").addEventListener("click", () => {
        num1 = parseFloat(aux);
        operacion = "dividir";
        document.getElementById("num").value = "";
        aux = "";
    });
    document.getElementById("mod").addEventListener("click", () => {
        num1 = parseFloat(aux);
        if (num1 % 2 == 0)
            alert("es divisible");
        else
            alert("no es divisible");
        document.getElementById("num").value = "";
        aux = "";
    });
    document.getElementById("raiz").addEventListener("click", () => {
        num1 = parseFloat(aux);
        document.getElementById("num").value = Math.sqrt(num1);
        aux = "";
    });
    document.getElementById("retr").addEventListener("click", () => {
        aux = aux.substring(0, aux.length - 1);
        document.getElementById("num").value = aux;
    });
    document.getElementById("ce").addEventListener("click", () => {
        document.getElementById("num").value = "";
        aux = "";
    });
    document.getElementById("c").addEventListener("click", () => {
        limpiarTodo();
    });
    document.getElementById("x").addEventListener("click", () => {
        num1 = parseFloat(aux);
        document.getElementById("num").value = 1 / num1;
        aux = "";
    });
    document.getElementById("signo").addEventListener("click", () => {
        //no funciona
        if(aux.includes("-"))
            aux = -Math.abs(aux);
        document.getElementById("num").value = Math.abs(aux);
    });
    document.getElementById("punto").addEventListener("click", () => {
        aux += ".";
        document.getElementById("num").value += aux;
    });

    document.getElementById("igual").addEventListener("click", () => {
        num2 = parseFloat(aux);

        if (num1 == null || num2 == null || operacion == null) {
            alert("num1 o num2 o operación no tiene valor aún");
        }

        if (num1 != null && num2 != null && operacion != null) {
            switch (operacion) {
                case "suma":
                    resultado = num1 + num2;
                    document.getElementById("num").value = resultado.toString();
                    break;
                case "resta":
                    resultado = num1 - num2;
                    document.getElementById("num").value = resultado.toString();
                    break;
                case "multiplicar":
                    resultado = num1 * num2;
                    document.getElementById("num").value = resultado.toString();
                    break;
                case "dividir":
                    resultado = num1 / num2;
                    document.getElementById("num").value = resultado.toString();
                    break;
                default:
                    alert("error en operaciones");
                    break;
            }

            limpiarTodo();

        }
    });
});

function limpiarTodo() {
    return aux = "",
        num1 = null,
        num2 = null,
        operacion = null;
}