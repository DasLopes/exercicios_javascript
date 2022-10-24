function calcular(){
    let n1 = Number(window.prompt(`Digite um número:`))
    let n2 = Number(window.prompt(`Digite outro número:`))
    let res

    if(n1 == n2) res = `ambos são <strong>IGUAIS</strong>`
    else if(n1 > n2) res = `o maior valor é <strong>${n1}</strong>`
    else res = `o maior valor é <strong>${n2}</strong>`

    let msg = window.document.querySelector(`section#msg`)

    msg.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, ${res}</p>`    
}