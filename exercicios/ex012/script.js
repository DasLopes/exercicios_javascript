function calcular(){
    let num = Number(window.prompt(`Digite um número:`))
    
    let res = (num % 2 == 0) ? `PAR` : `ÍMPAR`

    let msg = window.document.querySelector(`section#mensagem`)
    
    msg.innerHTML = `<p>O número ${num} que foi digitado é <strong>${res}</strong></p>`
}