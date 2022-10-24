function fibonacci(){
    let num = Number(window.document.querySelector(`input#num`).value)
    let saida = window.document.querySelector(`section#saida`)   
    
    let fib1 = 0
    let fib2 = 1
    let fib3 = 0
    saida.innerHTML += `${fib1} \u{27a1} ${fib2} `    
    for(let i = 3; i <= num; i++){
        fib3 = fib2 + fib1
        fib1 = fib2
        fib2 = fib3
        saida.innerHTML += `\u{27a1} ${fib3}`
    }
}