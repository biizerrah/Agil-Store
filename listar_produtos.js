import { produtos } from "./cadastrar.js";
import promptSync from "prompt-sync"; 
const prompt = promptSync();

export function listagem() {
    console.clear(); 

    if (produtos.length === 0) {
        console.log('Não há produtos a serem listados!');
    } else {
        console.table(produtos); 
    }
}