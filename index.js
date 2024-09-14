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


const { select, input } = require('@inquirer/prompts')

let meta = {
    value: "Ler um livro por mês",
    checked: false,
}

let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite a meta:"})

    if(meta.length == 0) {
        console.log("A meta não pode ser vazia.")
        return
    }

    metas.push(
        {
            value: meta,
            checked: false
        }
    )
}

const start = async() => {

    while(true) {

        const opcao = await select({

            message: "menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"

                },
                {
                    name: "Listar meta",
                    value: "listar"

                },
                {

                    name: "Sair",
                    value: "sair"

                }
            ]
        })

        switch(opcao) {
            case "cadastrar":
                await cadastrarMeta()
                console.log(metas)
                break
            case "listar":
                console.log("Vamos listar?")
                break
            case "sair":
                console.log("Até a próxima!")
                return

        }
    }

}

start()