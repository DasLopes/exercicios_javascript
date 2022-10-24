function acao(){
    let agora = new Date()
    let saida = window.document.querySelector(`section#saida`)
    saida.innerHTML = `<p>O que eu recebi do sistema foi <mark>${agora}</mark></p>`
}