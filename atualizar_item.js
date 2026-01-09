import { produtos } from "./cadastrar.js"
import promptSync from "prompt-sync"
const prompt = promptSync()


export function atualizar(){

    console.clear()
    let busca_id = Number(prompt('Informe o ID no produto que deseja atualizar. '))
    let produto = produtos.find(p => p.id === busca_id)

    if(produto){

        let continuar = true
        while(continuar){

            console.clear()
            
            console.log(`
            ========= ATUALIZANDO PRODUTO ID: ${produto.id} =========
            
            1. Produto:    ${produto.produto}
            2. Categoria:  ${produto.categoria}
            3. Quantidade: ${produto.quantidade}
            4. Preço:      R$ ${produto.preco}
            5. Salvar e Sair
            =========================================================
                    `)   
           
            let opcao = prompt(`Qual desses itens deseja atualizar? `)
        switch(opcao){

            case '1':
                let novo_produto = prompt('Novo produto: ')
                if(novo_produto) produto.produto = novo_produto
                break
            case '2':
                let nova_categoria = prompt('Nova Categoria: ')
                if(nova_categoria) produto.categoria = nova_categoria
                break
            case '3':
                let nova_qdt = Number(prompt('Nova quantidade: '))
                if(!isNaN(nova_qdt)) {produto.quantidade = nova_qdt}
                else{ console.log('Digite um número válido! ') }
                break
            case '4':
                let novo_preco = Number(prompt('Novo preço: '))
                if(!isNaN(novo_preco)) {produto.preco = novo_preco}
                else{ console.log('Digite um número válido! ') }
                break
            case '5':
                console.log('Saindo...')
                continuar = false
                break
            default:
                console.log('Valor Inválido')
        }
  }
        
    } else {

        console.log('Id não encontrado!')
    }
}