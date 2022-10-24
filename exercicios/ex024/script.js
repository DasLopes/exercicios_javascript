function contar(){
    let dados = window.document.querySelector(`section#saida`)
    dados.innerHTML += `<h2>Contagem Regressiva de 10 a 1</h2>`
    for(let i = 10; i > 0; i--){
        dados.innerHTML += `${i} \u{1f449}`
    }
    dados.innerHTML += `\u{1f3c1}`
}