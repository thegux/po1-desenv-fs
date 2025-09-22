# README.md

## Descrição do Projeto

Este projeto é uma aplicação simples desenvolvida em React com Redux e
Redux Persist para gerenciamento de estado e persistência de dados no
navegador. O objetivo principal é demonstrar o funcionamento de um
carrinho de compras, desde a adição de produtos até a remoção deles,
simulando um fluxo básico de e-commerce.

## Estrutura da Aplicação

### App

É o componente responsável pela navegação entre as páginas usando React
Router. Possui dois links principais: Home (lista de produtos) e Cart
(carrinho). Define as rotas de forma que a página inicial exibe a lista
de produtos e a página de carrinho mostra os itens já adicionados.

### ProductList

Recebe uma lista de produtos pré-definida. Exibe cada produto com nome e
um botão "Add to Cart". Quando clico no botão, o produto é adicionado ao
estado global do Redux por meio da ação ADD_TO_CART.

### Cart

Recupera o estado global do Redux e exibe os produtos que foram
adicionados. Cada item aparece com o nome e um botão "Remove", que
dispara a ação REMOVE_FROM_CART, retirando o item do estado.

### Redux e Persistência

O estado global é controlado por um reducer que responde às ações de
adicionar e remover. O Redux Persist garante que os itens adicionados ao
carrinho permaneçam salvos no localStorage, mesmo se a página for
recarregada.

## Sequência Lógica do Funcionamento

1.  **Inicialização**\
    A aplicação inicia exibindo a lista de produtos disponíveis.

2.  **Adicionar Produtos ao Carrinho**\
    Ao clicar no botão "Add to Cart" de um produto, a ação ADD_TO_CART é
    disparada e o reducer atualiza o estado global, incluindo o novo
    produto.

3.  **Exibição dos Itens no Carrinho**\
    Quando acesso a rota /cart, vejo todos os itens armazenados no
    estado, listados com nome e botão de remoção.

4.  **Remover Produtos do Carrinho**\
    Ao clicar em "Remove", a ação REMOVE_FROM_CART é disparada. O
    reducer filtra o item e atualiza o estado global. O carrinho se
    atualiza automaticamente.

5.  **Persistência**\
    Se eu recarregar a página, os produtos adicionados permanecem no
    carrinho graças ao Redux Persist.

## Como Rodar a Aplicação

1.  Clone este repositório:

    ``` bash
    git clone <url-do-repositorio>
    ```

2.  Acesse o diretório do projeto:

    ``` bash
    cd nome-do-projeto
    ```

3.  Instale as dependências:

    ``` bash
    npm install
    ```

4.  Inicie o servidor de desenvolvimento:

    ``` bash
    npm start
    ```

5.  Acesse no navegador:

        http://localhost:3000

## Conclusão

O projeto mostra um fluxo básico de carrinho de compras: adicionar
produtos, exibir os itens adicionados e remover produtos quando
necessário. Essa base pode ser expandida com novas funcionalidades como
cálculo de preço total, integração com APIs e checkout.
