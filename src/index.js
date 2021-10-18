/*

import cipher from './cipher.js';

console.log(cipher);*/
/*
const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
/*
const formularioCifrado = document.getElementById('cifrado');

const textoCifrado = document.getElementById('box2');

const dezplazamiento = document.getElementById('dezplazamiento');
*/
let textoparaCifrar = document.getElementById('box1');
textoparaCifrar.addEventListener("keyup", mayuscula);
function mayuscula() {
    this.value=this.value.toUpperCase();
}

let botonCifrar = document.getElementById('cifrar');
botonCifrar.addEventListener("click", myFunction);
function myFunction() {
   let textoparaCifrar = document.getElementById('box1').value;
   let dezplazamiento = document.getElementById('dezplazamiento').value;
   document.getElementById("box2").value = botonCifrar(textoparaCifrar, dezplazamiento);

function botonCifrar(textoparaCifrar,dezplazamiento){
    let resultado = "";
    let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    dezplazamiento = (dezplazamiento % 26 + 26) % 26;

    if (textoparaCifrar){
        for (let i = 0; i<textoparaCifrar.lenght; i++){
            if (letras.indexOF(textoparaCifrar[i])!=-1){
                let posicion = ((letras.indexOF(textoparaCifrar[i])+dezplazamiento)%26);
                resultado += letras[posicion];
            }
            else
            resultado += textoparaCifrar[i];
        }
    }
}
}
