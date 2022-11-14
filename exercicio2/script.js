 
 
 
 
 const informacoes = (idade, esinoMedio, faculdade) => {
    if (idade >= 18){
        console.log("A pessoa é maior de idade")
    }else{
        console.log("A pessoa não é maior de idade")
    }if(esinoMedio){
        console.log("Terminou ensino medio")
    }else{
        console.log("Nao terminou ensino medio")
    }if(faculdade){
        console.log("Possui ensino superior completo")
    }else{
        console.log("Não possui ensino medio completo")
    }
}

informacoes(30, true, false)
