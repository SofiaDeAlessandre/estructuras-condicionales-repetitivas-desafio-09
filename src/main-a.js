import './style.css'

console.warn('********Ejercicio a********')
//Ejercicio 09 a)

let cantidadDeGatos = 10
let emojis = ['😺','😸','😹']

for (let i = 0; i < cantidadDeGatos; i++){
  console.log(`Gato#${i+1}: ${emojis[i % emojis.length]}`)}


 