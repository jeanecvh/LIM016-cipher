import cipher from './cipher.js';
//console.log(cipher.decode());
/*
let stringMayuscula = document.getElementById('texto');
    stringMayuscula.addEventListener ('keyup', function () {
        this.value = this.value.toUpperCase()
    });
*/
const encode = document.getElementById('cifrar');
    encode.addEventListener ('click', function () {
    let string = document.getElementById('mensaje').value;
    let offset = document.getElementById('desplazamiento').value;
    document.getElementById('mensaje2').value = cipher.encode(string, offset).join('')
});

let decode = document.getElementById('decifrar')
    decode.addEventListener ('click', function () {
    let string = document.getElementById('mensaje2').value;
    let offset = document.getElementById('desplazamiento').value;
    document.getElementById('mensaje').value = cipher.decode(string, offset).join('');
});





/*
function encode(string, offset) {
    let resultado='';
    let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    offset = (offset % 26 + 26) % 26;

    if (string){ //Si el texto es distinto de null (existe)
        for (let i=0; i<string.length; ++i){//
            //Si la letra está en el array de letras (es un símbolo, un espacio...)
            if (letras.indexOf(string[i])!=-1)//
            {
                //almacenamos en c la posición de la letra más el desplazamiento y le aplicamos el módulo
                let posicion=((letras.indexOf(string[i])+offset) % 26);
                resultado+=letras[posicion];
            }
            else
                resultado+=string[i]; // Números, espacios, símbolos...
        }
    }
    return resultado;
}
/*
window.addEventListener("load",inicio,true);

function inicio(){
    document.getElementById("mensaje").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();
    }, true);

    document.getElementById("cifrar").addEventListener("click",function(){
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("mensaje2").value = cifrar(texto, desplazamiento);
    },true);
    document.getElementById("descifrar").addEventListener("click",function(){
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("mensaje2").value = decifrar(texto, desplazamiento);
    },true);
}

import * as cipher from './cipher.js';

console.log(cipher);

/*
function cifrar(texto, desplazamiento) {
    let resultado='';
    let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //Si aceptamos desplazamientos negativos, necesitamos hacerlo dos veces. Si no, sería:
    //desplazamiento = desplazamiento % 26;
    desplazamiento = (desplazamiento % 26 + 26) % 26;

    if (texto){ //Si el texto es distinto de null (existe)
        for (let i=0; i<texto.length; ++i){//
            //Si la letra está en el array de letras (es un símbolo, un espacio...)
            if (letras.indexOf(texto[i])!=-1)//
            {
                //almacenamos en c la posición de la letra más el desplazamiento y le aplicamos el módulo
                let posicion=((letras.indexOf(texto[i])+desplazamiento) % 26);
                resultado+=letras[posicion];
            }
            else
                resultado+=texto[i]; // Números, espacios, símbolos...
        }
    }
    return resultado;
}

function decifrar(texto, desplazamiento) {
    let resultado='';
    let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //Si aceptamos desplazamientos negativos, necesitamos hacerlo dos veces. Si no, sería:
    //desplazamiento = desplazamiento % 26;
    desplazamiento = (desplazamiento % 26 - 26) % 26;

    if (texto){ //Si el texto es distinto de null (existe)
        for (let i=0; i<texto.length; ++i){//
            //Si la letra está en el array de letras (es un símbolo, un espacio...)
            if (letras.indexOf(texto[i])!=-1)//
            {
                //almacenamos en c la posición de la letra más el desplazamiento y le aplicamos el módulo
                let posicion=((letras.indexOf(texto[i])-desplazamiento) % 26);
                resultado+=letras[posicion];
            }
            else
                resultado+=texto[i]; // Números, espacios, símbolos...
        }
    }
    return resultado;
}

*/
