console.warn('********Ejercicio c********')
//Ejercicio 9 c)

let cantidadGatitos = 5
let cantidadPasos = 3
let emojiDeGatito = ['🐈']
let emojiNuevo = ['⬛']
let emojiDePasos = ['🐾']

for (let i = 0; i < cantidadGatitos; i++){
  let pasos = ''
  let nuevoEmoji = ''

  for (let j = 0; j < cantidadPasos; j++){
   pasos += emojiDePasos[0]
  }


     if (i % 2 === 0){
      nuevoEmoji = emojiDeGatito[0] + emojiNuevo[0]
     } else {
      nuevoEmoji = emojiDeGatito[0]
     }
     console.log(`Gato#${i+1}: ${nuevoEmoji} ${pasos}`)
  } 
