function gerador(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}

function sorteio(){    
    let dados = window.document.querySelector(`section#saida`)
    dados.innerHTML += `<p>Acabei de pensar no número <mark>${gerador(1,100)}</mark>!</p>`
}

function limpar(){
    let dados = window.document.querySelector(`section#saida`)
    dados.innerHTML = null
}