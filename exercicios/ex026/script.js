function contar(){
    let num1 = Number(window.document.querySelector(`input#num1`).value)
    let num2 = Number(window.document.querySelector(`input#num2`).value)
    let saida = window.document.querySelector(`section#saida`)

    saida.innerHTML += `<h2>Contando de ${num1} até ${num2}</h2>`

    if(num1 < num2){
        for(let i = num1; i <= num2; i++){
            saida.innerHTML += `${i} \u{1f449}`
        }
    }else if(num1 > num2){
        for(let i = num2; i >= num1; i--){
            saida.innerHTML += `${i} \u{1f449}`
        }
    }else{
        saida.innerHTML += `Não é possível contar, pois os os números são iguais`
    }
    saida.innerHTML += `\u{1f3c1}`
}

// 1f449 maozinha
// 1f3c1 bandeira