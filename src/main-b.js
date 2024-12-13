console.warn('********Ejercicio b********')
//Ejercicio 09 b)

let cantidadDeGatitos = 5
let cantidadDePasos = 3
let emojiGatito = ['🐈']
let emojiPasos = ['🐾']

for (let i = 0; i < cantidadDeGatitos; i++){
  let pasos = ''
  for (let j = 0; j< cantidadDePasos; j++){
   pasos += emojiPasos[0]
  }
    console.log(`Gato#${i+1}: ${emojiGatito[i % emojiGatito.length]} ${pasos}`)
}

