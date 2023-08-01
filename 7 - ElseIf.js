/*

Else If -> Acrescenta mais opção ao if 

*/

const temperature = 35

if(temperature >= 35 && temperature <=36) {
    console.log('Saudável')
} else if(temperature > 36 && temperature <= 40) {
    console.log('Febre')
} else if(temperature > 40) {
    console.log('Muita Febre')
}else {
    console.log('Hipotermia')
}