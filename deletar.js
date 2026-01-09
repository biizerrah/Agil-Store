import { produtos } from './cadastrar.js'
import promptSync from 'prompt-sync'
const prompt = promptSync()

export function deletar_item() {
    
     let deletar_id = Number(prompt('Qual o ID do produto que deseja excluir? '))

    const index = produtos.findIndex(p => p.id === deletar_id)

    if (index !== -1) {
        
        const produto = produtos[index]
        
        console.log(`Você vai excluir: ${produto.produto}`)
        const confirmacao = prompt("Tem certeza? (s/n): ").toLowerCase()

        if (confirmacao === 's') {
            produtos.splice(index, 1)
            
            console.log('Produto removido com sucesso!')
        } else {
            console.log('Operação cancelada.')
        }

    } else {
        console.log('Produto não encontrado!')
    }

}