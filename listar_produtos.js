import { produtos } from "./cadastrar.js";

export function listagem(){

    if(produtos.length === 0){

        console.log('Não há produtos a serem listados!')
        
    } else{
            for (let produto of produtos) {

                console.table(

                `Id: ${produto.id} | 
                Produto: ${produto.produto} | 
                Categoria: ${produto.categoria} |
                Quantidade: ${produto.quantidade} | 
                Preço: ${produto.preco}`
        
         )

    } 
    }


}