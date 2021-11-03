import cipher from './cipher.js';

const encode = document.getElementById('cifrar');
    encode.addEventListener ('click', function () {
    let string = document.getElementById('mensaje').value;
    let offset = document.getElementById('desplazamiento').value;
    document.getElementById('mensaje2').value = cipher.encode(offset, string);
});

let decode = document.getElementById('descifrar')
    decode.addEventListener ('click', function () {
    let string = document.getElementById('mensaje2').value;
    let offset = document.getElementById('desplazamiento').value;
    document.getElementById('mensaje').value = cipher.decode(offset, string);
});
