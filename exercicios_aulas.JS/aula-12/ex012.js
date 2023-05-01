//Condições aninhadas
var agora = new Date() //pega a hora do sistema
var hora = agora.getHours()
console.log(`Agora são ${hora} hora(s).`)
if(hora >= 0 && hora <= 6){
    console.log('está de madrugada')
}else if (hora < 12){
    console.log('está de manhã')

}else if (hora >= 18){
    console.log('está de noite')
}else{
    console.log('está de tarde')
    
}