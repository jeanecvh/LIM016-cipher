const cipher = {
    encode: function(string, offset) {

        let resultado = [];
        //Recorrido de letra por letra
        for ( let i = 0; i < string.length; i++) {
             let posicion = string.charCodeAt(i)
             console.log(posicion);
           if (posicion >= 65 && posicion <= 90) {
            let cifrarCipher = ((string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65);
                console.log(cifrarCipher)
                resultado.push(String.fromCharCode(cifrarCipher));
                console.log(resultado)
        }
        }
    return resultado;
  },

  decode: function(string, offset) {

    let resultado = [];
    //Recorrido de letra por letra
    for (let i = 0; i < string.length; i++) {
      let posicion = string.charCodeAt(i)
      console.log(posicion);
      if (posicion >= 65 && posicion <= 90) {
        let decifrarCipher = (string.charCodeAt(i) - 65 - parseInt(offset) % 26 + 65);
        console.log(decifrarCipher)
        resultado.push(String.fromCharCode(decifrarCipher));
        console.log(resultado)

      }
    }
    return resultado;
  }
}

/*
    decode: function(string, offset) {

},
*/


  export default cipher;
