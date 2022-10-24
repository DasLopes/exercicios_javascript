function gerador(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}

let sorteio = gerador(1,100)

function adivinhar(){
    let button = window.document.querySelector(`button#button`)
    let dados = window.document.querySelector(`section#saida`)
    let palpite = Number(window.prompt(`Qual é seu palpite?`))

    if(palpite < sorteio){
        dados.innerHTML += `<p>Você falou ${palpite}. Meu número é <strong>MAIOR!</strong></p>`
    }else if(palpite > sorteio){
        dados.innerHTML += `<p>Você falou ${palpite}. Meu número é <strong>MENOR!</strong></p>`
    }else{
        dados.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${sorteio}!</p>`        
        window.document.querySelector(`button#button`).style.visibility = `hidden`
    }
}