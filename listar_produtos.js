import { produtos } from "./cadastrar.js";

export function listagem(){

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