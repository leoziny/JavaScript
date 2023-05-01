
function clicar() {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);
    let nota4 = parseFloat(document.getElementById('nota4').value);
    let texto = document.getElementById('calculo');
    
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        texto.innerHTML = "Por favor, insira valores numéricos para todas as notas.";
        return;
    }
    
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    texto.innerHTML = `A média é: ${media.toFixed(2)}!`;
}
