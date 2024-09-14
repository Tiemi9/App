/*let meta = {
    value: "Ler um livro por mês",
    checked: false,
}

let metas = [
    meta,
    
    {
        value: "Correr 20 minutos por dia",
        checked: false,
    }
]

console.log(metas[0].value)
console.log(metas[1].value)


const start = () => {
    let count = 0
    while(count < 10) {
        console.log(count)
        count++
    }

}

start()*/

const start = () => {

    while(true) {
        let opcao = "sair"
        switch(opcao) {
            case "cadastrar":
                console.log("Vamos cadastrar?")
                break
            case "listar":
                console.log("Vamos listar?")
                break
            case "sair":
                return

        }
    }

}

start()