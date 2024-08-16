function calcular() {
    const nome = document.getElementById('name').value;
    const altura = Number(document.getElementById('altura').value);
    const peso = Number(document.getElementById('peso').value);
    let resultado = document.querySelector('.resultado-imc')
    let resultado2 = document.querySelector('.resultado-imc-p')
    let imc = parseInt(0)
    let situacao;
    
    imc = peso / (altura * altura);

    if (imc <= 8) {
        situacao = "inexistencia azul"
    } else if (imc > 8 && imc <= 16) {
        situacao = "magreza azul severa "
    } else if (imc > 16 && imc <= 16.9) {
        situacao = "magreza azul moderada"
    } else if (imc > 16.9 && imc <= 18.5) {
        situacao = "magreza azul leve"
    } else if (imc > 18.5 && imc <= 24.9) {
        situacao = "peso azul ideal"
    } else if (imc > 24.9 && imc <= 29.9) {
        situacao = "sobrepeso azul"
    } else if (imc > 29.9 && imc <= 34.9) {
        situacao = "obesidade azul grau I"
    } else if (imc > 34.9 && imc <= 39.9) {
        situacao = "obesidade azul grau II ou severa"
    } else if (imc >= 39.9)
    situacao = "obesidade azul grau III ou mórbida"

    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)};`
    resultado2.innerHTML = `${nome}, sua situação é ${situacao};`

    document.getElementById('name').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('peso').value = '';
}