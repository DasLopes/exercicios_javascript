function tabuada(){
    let num = Number(window.document.querySelector(`input#num`).value)
    let saida = window.document.querySelector(`section#saida`)

    saida.innerHTML = `<h2>Tabuada de ${num}</h2>`
    for(let i = 1; i <= 10; i++){
        saida.innerHTML += `${num} x ${i} = ${num*i}<br>`
    }
}

// 1f449 maozinha
// 1f3c1 bandeira