function calcular(){
    let nome = window.prompt(`Qual é o seu nome?`)
    let res = window.document.querySelector(`section#resposta`)
    let nota1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    let nota2 = Number(window.prompt(`Além de ${nota1}, qual foi a outra nota de ${nome}?`))
    let media = (nota1 + nota2) / 2
    let msg = (media > 5) ? `Meus parabéns!` : `Estude um pouco mais!`
    res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark></p>`
    res.innerHTML += `As notas obtidas foram <mark>${nota1} e ${nota2}</mark>`
    res.innerHTML += `<p>A média final será <mark>${media}</mark>.</p>`
    res.innerHTML += `<p>A mensagem que temos é: <strong style='color: red;'>${msg}</strong></p>`
}