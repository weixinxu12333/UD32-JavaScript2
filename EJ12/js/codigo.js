function carregar() {
    document.getElementById("p1").innerHTML = formatoFecha("05/04/1982");
    document.getElementById("p1").innerHTML += formatoFecha("5/04/1982");

    document.getElementById("p2").innerHTML = formatoEmail("weixin@gmail.com");
    document.getElementById("p2").innerHTML += formatoEmail("wei%xin@gmail.com");

    document.getElementById("p3").innerHTML = formatoHtml("&");
    document.getElementById("p3").innerHTML += formatoHtml("&amp;");

    document.getElementById("p4").innerHTML = formatoNA("Smith John");

    formatoScript();

}

function formatoFecha(fecha) {
    var reg = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    return "Nací el " + fecha + " en Donostia: " + reg.test(fecha) + "<br/>";
}

function formatoEmail(email) {
    var reg = /^[A-Za-z0-9.-]+@[A-Za-z0-9]+[.A-Za-z0-9]{3,4}$/;
    return email + " : " + reg.test(email) + "<br/>";
}

function formatoHtml(escape) {
    return escape
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function formatoNA(na) {
    return na.replace(/(\w+)\s(\w+)/, '$2, $1');
}

function formatoScript() {
    var codigoHtml = '<html><head> ...';
    return codigoHtml.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
}