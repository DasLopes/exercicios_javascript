function estacao(){    
    let mes = window.prompt(`Digite o mês em extenso (ex: Setembro)`)    
    let estação
    let saida = window.document.querySelector(`section#saida`)

    switch (mes.toUpperCase()){
        case 'SETEMBRO': case 'OUTUBRO': case 'NOVEMBRO':
            estação = 'PRIMAVERA'
            break;
        case 'DEZEMBRO': case 'JANEIRO': case 'FEVEREIRO':
            estação = 'VERÃO';
            break;
        case 'MARÇO': case 'ABRIL': case 'MAIO':
            estação = 'OUTONO';
            break;
        case 'JUNHO': case 'JULHO': case 'AGOSTO':
            estação = 'INVERNO';
            break;
        default:
            estação = 'INDEFINIDA'
            break;
    }
    saida.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos na estação <strong><mark>${estação}</mark></strong></p>`
}
