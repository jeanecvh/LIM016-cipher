const cipher = {
    encode: function(string, offset) {

        let resultado = '';
        //Recorrido de letra por letra
        for ( let i = 0; i < string.length; i++) {
             let posicion = string.charCodeAt(i) //recorre la posicion del caracter que se ingresa bajo la modalidad del codigo ascii
             //console.log(posicion);
           if (posicion >= 65 && posicion <= 90) { // solo queremos recorrer las posiciones [A-Z] [65-90]
            let cifrarCipher = ((string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65);//Posicion de letra de codigo ascii - 65 para darle el valor del index y pueda sumarse el offset.
                //console.log(cifrarCipher)
                resultado+=String.fromCharCode(cifrarCipher);//Devuelve la letra del numero de la posicion del código ascii ya decifrada. Ejemplo 65 = "A"
                //console.log(resultado)
        } else {
            resultado+=String.fromCharCode(posicion); //que reconozca solo el rango de 65 a 90 y no otros rompa otros caracteres (Espacio)
        }
        }
    return resultado;
  },

  decode: function(string, offset) {

    let resultado = '';
    //Recorrido de letra por letra
    for (let i = 0; i < string.length; i++) {
      let posicion = string.charCodeAt(i)
      //console.log(posicion);
      if (posicion >= 65 && posicion <= 90) {
        let decifrarCipher = (string.charCodeAt(i) - 65 - parseInt(offset) % 26 + 65);
        //console.log(decifrarCipher)
        resultado+=String.fromCharCode(decifrarCipher);
        //console.log(resultado)
      } else {
        resultado+=String.fromCharCode(posicion);
      }

    }
    return resultado;
  }
}

  export default cipher;
