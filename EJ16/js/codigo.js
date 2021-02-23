function carregar(){
    var data = new Date();

    //formato
    document.getElementById("hh").innerHTML = data.getHours().toString().padStart(2, "0");
    document.getElementById("mm").innerHTML = data.getMinutes().toString().padStart(2, "0");
    document.getElementById("ss").innerHTML = data.getSeconds().toString().padStart(2, "0");

    //actualiza cada seg
    setTimeout(carregar, 1000);
}

