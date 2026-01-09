import promptSync from 'prompt-sync';
import { cadastrar_produtos } from "./cadastrar.js";
import { listagem } from "./listar_produtos.js";
import { atualizar } from './atualizar_item.js';
import { deletar_item } from './deletar.js';

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
        3. Atualizar
        4. Deletar
        5. Sair
        `)

        const opcao = prompt('Escolha uma opção: ');

    
        if (opcao === '1') {
            console.clear()
            cadastrar_produtos(); 
        } else if (opcao === '2') {
            console.clear()
            listagem(); 
        } else if (opcao === '3') {
            console.clear()
            atualizar()
        } else if (opcao === '4'){
            console.clear()
            deletar_item()
        }else if (opcao === '5'){
             console.log("Saindo do sistema...");
              break;   
        } else {
            console.log("Opção inválida. Tente novamente.");
        }
    }
}

menu();