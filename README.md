# 📦 Agil Store - Sistema de Gerenciamento de Estoque

Bem-vindo ao **Agil Store**, uma aplicação de linha de comando (CLI) desenvolvida em JavaScript (Node.js) para gerenciar o inventário de produtos de uma loja de forma simples e eficiente.

O sistema permite realizar todas as operações do CRUD (Criar, Ler, Atualizar e Deletar) através de um menu interativo no terminal.

## 🚀 Funcionalidades

O sistema oferece as seguintes opções:

- **Cadastrar Produto:** Adiciona novos produtos com ID, nome, categoria, quantidade e preço.
- **Listar Produtos:** Exibe todos os produtos cadastrados no estoque de forma organizada.
- **Atualizar Produto:** Permite editar informações específicas (nome, categoria, quantidade ou preço) de um produto existente buscando pelo ID.
- **Deletar Produto:** Remove um produto do estoque através do seu ID.
- **Buscar um Produto:** Busca e exibe com detalhes as informações de produto especifico.


## 📂 Estrutura do Projeto

Abaixo está a descrição da responsabilidade de cada arquivo no projeto:

| Arquivo | Descrição |
|---|---|
| `menu.js` | **Ponto de entrada da aplicação.** Contém o loop principal e o menu de navegação que chama as outras funções. |
| `cadastrar.js` | Responsável por solicitar os dados ao usuário e adicionar um novo objeto ao array de produtos. |
| `listar_produtos.js` | Percorre o array de produtos e exibe os itens formatados no terminal. |
| `atualizar_item.js` | Contém a lógica para buscar um produto por ID e atualizar suas propriedades individualmente. |
| `deletar.js` | Responsável por remover um item do array com base no ID fornecido. |
| `buscar_item.js` | Responsável por buscar um item especifico e exibir os seus detalhes. |



## 🛠️ Tecnologias Utilizadas

- **JavaScript (ES6+)**: Lógica principal do sistema.
- **Node.js**: Ambiente de execução.
- **Prompt-Sync**: Biblioteca utilizada para capturar a entrada de dados do usuário no terminal de forma síncrona.

## ⚙️ Como Rodar o Projeto

### Pré-requisitos

- Ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Passo a Passo

1. **Clone o repositório** (ou baixe os arquivos):
   ```bash
   git clone https://github.com/biizerrah/Agil-Store.git
1. **Rode no terminal o seguinte comando para a istalação das dependências**:
   ```bash
   npm install