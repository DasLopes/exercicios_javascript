window.alert('Seja bem-vindo(a) ao meu site!')

function clicou(){    
    let num = Number(window.prompt('Digite um número:'))
    let res = window.document.querySelector('div#res')   
    res.innerHTML = `<p>O dobro de ${num} é ${num*2} e a metade é ${num/2}! \u{1F596}</p>`	
}