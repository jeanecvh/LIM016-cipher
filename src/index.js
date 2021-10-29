import cipher from './cipher.js';

const encode = document.getElementById('cifrar');
    encode.addEventListener ('click', function () {
    let string = document.getElementById('mensaje').value;
    let offset = document.getElementById('desplazamiento').value;
    document.getElementById('mensaje2').value = cipher.encode(string, offset);
});

let decode = document.getElementById('decifrar')
    decode.addEventListener ('click', function () {
    let string = document.getElementById('mensaje2').value;
    let offset = document.getElementById('desplazamiento').value;
    document.getElementById('mensaje').value = cipher.decode(string, offset).join('');
});
