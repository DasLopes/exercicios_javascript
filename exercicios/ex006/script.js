function somar(){    
    let n1 = Number(window.prompt('Digite um número:'))
    let n2 = Number(window.prompt('Digite outro número:'))
    let soma = n1+n2

    let res = window.document.querySelector('div#res') 
    res.innerHTML = `<p>
    A soma entre
    <mark>${n1}</mark>
    e 
    <mark>${n2}</mark>
    é igual a
    <strong>${soma}</strong>
    ! &#128406
</p>`	
}