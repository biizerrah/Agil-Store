import { produtos } from './cadastrar.js'
import promptSync from 'prompt-sync'
const prompt = promptSync()

export function deletar_item(){

    let deletar_id = Number(prompt('Qual o ID do produto que deseja excluir? '))
    let produto = produtos.find(p => p.id === deletar_id)

}