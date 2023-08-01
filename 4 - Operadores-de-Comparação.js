/*

Operadores de Comparação

== -> Igual // Compara o valor, mas não o tipo 
=== -> TOTALMENTE Igual// Compara o valor e o tipo

!= -> Diferente // Compara o valor, mas não o tipo
!== -> TOTALMENTE Diferente // Compara o valor e o tipo

> -> Maior
< -> Menor
>= -> Maior ou Igual
<= -> Menor ou Igual

*/


const num = 30
const num2 = '30'

if(num === num2) {
    console.log("Sim")
} else {
    console.log('Não ')
}

const idade = 18
const idade2 = '18'

if(idade !== idade2) {
    console.log('sim')
} else {
    console.log('Não')
}


const pessoaDirigindo = 97
const velocidade = 90

if(pessoaDirigindo <= velocidade) {
    console.log('Pode Passar')
} else {
    console.log('Multado')
}