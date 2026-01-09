import { produtos } from "./cadastrar.js";
import promptSync from "prompt-sync";
const prompt = promptSync();

export function buscar_produto() {

    let id_busca = Number(prompt("Digite o ID do produto: "));

    const produto = produtos.find(p => p.id === id_busca);

    if (produto) {
        console.log("\nProduto Encontrado:");

        console.table([produto]); 
        
    } else {
        console.log(`\nNenhum produto encontrado com o ID ${id_busca}.`);
    }
}