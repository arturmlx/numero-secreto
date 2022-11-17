function recarregarAPagina(){
    window.location.reload();
} 

function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor Inválido</div>
        `
    }

    if (numeroForMaiorOuMenorQueOPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>
        `;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou</h2>
        <h3>O número secreto era ${numeroSecreto}!</h3>
        <button class="botao-jogar-novamente" type="button" onClick="recarregarAPagina()">Jogar novamente!</button>

        
        `
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é maior que ${numero} <i class="fa-solid fa-up-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é menor que ${numero} <i class="fa-solid fa-down-long"></i></div>
        `
    }

}

function numeroForMaiorOuMenorQueOPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}