function contar(){
    let entrada = Number(window.document.querySelector(`input#entrada`).value)
    let saida = window.document.querySelector(`section#saida`)

    saida.innerHTML += `<h2>Contando de 0 até ${entrada}</h2>`

    for(let i = 0; i <= entrada; i++){
        saida.innerHTML += `${i} \u{1f449}`
    }
    saida.innerHTML += `\u{1f3c1}`
}

function limpar(){
    saida.innerHTML = null
}