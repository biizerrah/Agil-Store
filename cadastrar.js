import promptSync from 'prompt-sync'
const prompt = promptSync()

let produtos = []
let id = 0

function cadastrar_produtos(){

    do{

        const item = prompt("Qual o nome do produto? ")
        const categoria = prompt("Qual a sua categoria? ")
        const quantidade = Number(prompt("Qual a quantidade? "))
        const preco = Number(prompt("Qual o preço? "))

        let produto = {

            'id': id + 1,
            'produto': item,
            'categoria': categoria,
            'quantidade': quantidade,
            'preco': preco
        }

        id++

        produtos.push(produto)

        const opcao = prompt('Deseja adicionar mais um produto? (s/n) ') 
        
        if (opcao.toLowerCase() === 'n') {
            break;
        }

    } while(true)

}

cadastrar_produtos()

console.log("Lista de produtos:", produtos)