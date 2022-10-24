function acao(){
    let n1 = Number(window.prompt(`Primeiro valor:`))
    let n2 = Number(window.prompt(`Segundo valor:`))
    let escolha = Number(window.prompt(`
    Valores informados: ${n1} e ${n2}.
    O que vamos fazer?
    [1] Somar
    [2] Subtrair
    [3] Multiplicar
    [4] Dividir`))

    let dados = window.document.querySelector(`section#saida`);
    dados.innerHTML = `<h2><strong>Calculando...</strong></h2>`

    switch (escolha){
        case 1:
            dados.innerHTML += `<p>${n1} + ${n2} = <strong>${n1 + n2}</strong></p>`;
            break;
        case 2:
            dados.innerHTML += `<p>${n1} - ${n2} = <strong>${n1 - n2}</strong></p>`;
            break;
        case 3:
            dados.innerHTML += `<p>${n1} x ${n2} = <strong>${n1 * n2}</strong></p>`;
            break;
        case 4:
            dados.innerHTML += `<p>${n1} / ${n2} = <strong>${n1 / n2}</strong></p>`;
            break;
        default:
            dados.innerHTML += `OPÇÃO INVÁLIDA! Você digitou ${n1} e ${n2}, mas não sei o que fazer com eles.`
    }
}