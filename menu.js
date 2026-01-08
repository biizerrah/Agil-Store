import promptSync from 'prompt-sync';
import { cadastrar_produtos } from "./cadastrar.js";
import { listagem } from "./listar_produtos.js";

const prompt = promptSync();

function menu() {
    console.log(`
    ===========================
        SISTEMA AGIL-STORE
    ===========================
    `);

    while (true) {
        console.log(`
        1. Cadastrar Produto
        2. Listar Produtos
        3. Sair
        `);

        const opcao = prompt('Escolha uma opção: ');

    
        if (opcao === '1') {
            console.clear();
            cadastrar_produtos(); 
        } else if (opcao === '2') {
            console.clear();
            listagem(); 
        } else if (opcao === '3') {
            console.log("Saindo do sistema...");
            break; 
        } else {
            console.log("Opção inválida. Tente novamente.");
        }
    }
}

menu();