function media(){
    let nome = window.prompt('Qual é o nome do aluno?')    
    let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`))
    let media = (n1+n2) / 2

    let res = window.document.querySelector('p#p-res') 
    res.innerHTML = `<p>
    Calculando a média final de ${nome}.<br>
    As notas obtidas foram ${n1} e ${n2}.<br>
    A média final será ${media}.
</p>`	
}