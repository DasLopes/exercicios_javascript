function contar(){
    let dados = window.document.querySelector(`section#saida`)
    dados.innerHTML += `<h2>Contando de 1 até 10</h2>`
    for(let i = 1; i <= 10; i++){
        dados.innerHTML += `${i} \u{1F449}`
    }
    dados.innerHTML += `\u{1F3C1}`
}