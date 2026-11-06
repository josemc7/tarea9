function cualesmayor (a,b){
    if (a>b){
        return a;
    } else {
        return b;
    }
}
let mayor = cualesmayor(5,10);
console.log("El mayor es", mayor);

//ejemplo de resolucion 

function nombreResolucion(ancho , alto){
      
    if(ancho >= 7680 && alto >= 4320){
    return "8K";
    }else if (ancho >= 3840 && alto >= 2160){
        return "4K";
    }else if (ancho >= 2560 && alto >= 1440){
        return "wqhd";
    }else if (ancho >= 1920 && alto >= 1080){
        return "FHD";
    }else if (ancho >= 1280 && alto >= 720){
        return "HD";
    }else{
        return "false";
    }
}
let nombre = nombreResolucion(1366, 768);
console.log(nombre);
let nombre2 = nombreResolucion(3848, 2160);
console.log(nombre2);
let nombre3 = nombreResolucion(7680, 4320);
console.log(nombre3);






