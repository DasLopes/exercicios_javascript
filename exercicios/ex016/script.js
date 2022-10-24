function idade(){
    let anoNasc = Number(window.prompt(`Em que ano você nasceu?`))
    let anoAtual = new Date().getFullYear()
    let idade = anoAtual - anoNasc

    let dados = window.document.querySelector(`section#saida`)
    dados.innerHTML = `<p>Quem nasceu em ${anoNasc} vai completar <strong>${idade}</strong> anos em ${anoAtual}.</p>`
}