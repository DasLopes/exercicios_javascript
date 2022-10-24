function fibonacci(){
    let num = Number(window.document.querySelector(`input#num`).value)
    let saida = window.document.querySelector(`section#saida`)   
    
    let fib = [0,1]
    for( let i = 2; i <= num; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    fib.pop()
    saida.innerHTML += `${fib}<br>`
}