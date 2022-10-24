function contar(){
    let dados = window.document.querySelector(`section#saida`)
    dados.innerHTML += `<h2>Números pares de 1 até 10</h2>`
    for(let i = 1; i <= 10; i++){
        i % 2 == 0 ? dados.innerHTML += `${i} \u{1f449}` : ``
    }
    dados.innerHTML += `\u{1f3c1}<br>`
}