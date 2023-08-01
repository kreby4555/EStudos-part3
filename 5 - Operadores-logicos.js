/*

Operadores Lógicos

&& -> E -> Pesso Exigente
    true && tue = true
    true && false = false
    false && false = false

|| -> Ou -> Tanto Faz
    true || true = true
    false || true = true
    false || false = true

!   -> Negação
    !true = false
    !false = true

*/

const senha = false
const token = false
const id = false

if(senha && token && id) {
    console.log('Logado')
}else {
    console.log('Erro')
}

if(senha || token || id) {
    console.log('Logou')
}else {
    console.log('Não logou')
}


if(!(senha && token && id)) {
    console.log('Logadouu')
}else {
    console.log('Errr')
}