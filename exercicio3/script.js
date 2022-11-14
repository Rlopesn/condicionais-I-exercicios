
let nacionalidade = prompt('Insira sua nacionalidade')

const verificaNacionalidade = (nacionalidade) => {
    if (nacionalidade == "brasileira"){
        console.log("brasileiro")
    }else if (nacionalidade == "argentina"){
        console.log("argentino")
    } else if (nacionalidade == "uruguaia"){
        console.log("Uruguaia")
    }else if (nacionalidade == "chilena"){
        console.log("chileno")
    }else if (nacionalidade == "colombiano"){
        console.log("colombiano")
    }else{
        console.log("dado invalido")
    }

}
verificaNacionalidade(nacionalidade)