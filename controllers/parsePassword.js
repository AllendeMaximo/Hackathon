// Se debe ingresar una frase de entre 6 y 8 palabras

function parsePassword (poema) {
  const palabras= poema.replaceAll('\n', '').replaceAll(/[^\w\sáéíóúÁÉÍÓÚ]/g, '').split(" ");
  let contraseña = "";

  console.log(palabras)
  for (let i = 0; i < palabras.length; i++) {
    if (i % 2 == 0) {
    contraseña += palabras[i][0].toUpperCase();
    } else {
    contraseña += palabras[i][0].toLowerCase();
    }
  }

  // Se debe agregar un número aleatorio de dos dígitos al final de la contraseña
  var numero = Math.floor(Math.random() * 100); // se genera un número aleatorio entre 0 y 99
  contraseña += numero;

  return contraseña
}
module.exports = parsePassword 
