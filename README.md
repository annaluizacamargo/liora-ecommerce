# 🚧 **Projeto em Andamento - Plataforma de E-commerce** 🚧

**Aviso**: Este projeto está em andamento e não foi finalizado a tempo para a entrega completa. Algumas funcionalidades ainda estão faltando, incluindo:

- Responsividade (não concluída)
- Testes automatizados
- Página de Carrinho de Compras
- Footer (ainda não implementado)

Além disso um estudo sobre as decisões de UX bem como outras informações também está em andamento.

Por favor, tenha isso em mente ao explorar o projeto.

---

## Teste Técnico - Plataforma de E-commerce

O objetivo deste projeto é apresentar a solução proposta para o desafio técnico de construção de uma plataforma de e-commerce.

Este README oferece uma visão geral do projeto, incluindo detalhes sobre a arquitetura, as decisões de design, as tecnologias utilizadas e as funcionalidades implementadas.

---

## Introdução

O desafio técnico proposto consiste em desenvolver uma plataforma de e-commerce com as seguintes funcionalidades:

- Listagem de produtos com paginação
- Seleção de categorias fixas (por exemplo: Camisetas, Calças, Tênis)
- Visualizar detalhes do produto
- Adicionar e remover produtos do carrinho de compras

A solução foi implementada utilizando as melhores práticas de design e arquitetura, levando em consideração acessibilidade e experiência do usuário.

---

## 📋 Escolhas de UX Design e Acessibilidade

### Estudo de Mercado

Com base na análise de grandes e-commerces do Brasil, como Renner, Dafiti, C&A, e outros, tomei decisões para criar uma interface que seguisse as melhores práticas do mercado.

### Decisões de Design

- **Nome da marca**: _Liora_ (derivado de "luz", para transmitir sofisticação e elegância)
- **Header**: Navegação fixa com logo, categorias e campo de busca.
- **Footer**: Informações sobre formas de pagamento, políticas e redes sociais.
- **Home Page**: Exibição de categorias e produtos em destaque.
- **Página de Detalhes do Produto**: Exibição de informações do produto com opção de "adicionar ao carrinho".
- **Carrinho de Compras**: Exibição de produtos no carrinho com opções de alteração.

### Acessibilidade

- Uso de **tags semânticas HTML5**
- **Contraste adequado** para legibilidade
- **ARIA roles** para componentes como botões e modais
- **Navegação por teclado**: Todos os componentes interativos podem ser acessados via `Tab`.

---

## 👩‍💻 Tecnologias Utilizadas

- **Figma**: Para o design da plataforma.
- **Next.js**: Framework baseado em React, utilizado para renderização do lado do servidor e otimização de performance.
- **Local Storage**: Para armazenar os dados do carrinho entre as sessões do usuário.
- **Vercel**: Plataforma de hospedagem e deploy contínuo.
- **GitHub**: Controle de versão e colaboração.

---

## 📂 Estrutura do Projeto

A estrutura do projeto é organizada da seguinte maneira:

- **components/**: Componentes reutilizáveis (Header, Footer, ProductCard, ProductDetails, Cart, etc.)
- **pages/**: Páginas da aplicação (Home, Product, Cart, etc.)
- **styles/**: Estilos globais (cores, tipografia, etc.)
- **utils/**: Funções utilitárias e hooks personalizados (useLocalStorage, useCart, etc.)
- **public/**: Arquivos estáticos (imagens, ícones, etc.)
- **api/**: Dados da API (endereços para produtos, categorias, etc.)

---

## ⚙️ Funcionalidades Implementadas

- **Listagem de Produtos com Paginação**: Exibição dos produtos com opções de filtro e busca.
- **Seleção de Categorias Fixas**: Categorias como Camisetas, Calças e Tênis.
- **Visualizar Detalhes do Produto**: Imagens, descrição, preço, opções de tamanho e cor.
- **Adicionar e Remover Produtos do Carrinho**: Funções para adicionar e remover produtos do carrinho de compras.

---

## 🔍 Testes e Validação

- **Testes Manuais**: A funcionalidade foi validada manualmente, incluindo as operações de adição e remoção de produtos do carrinho, navegação pelas páginas de detalhes e catálogo.
- **Testes End-to-End (E2E)**: Testes para garantir a integridade da plataforma, como:
  - Adicionar um produto ao carrinho
  - Remover um produto do carrinho
  - Alterar a quantidade de um produto no carrinho

---

## 💡 Considerações Finais

O desenvolvimento desta plataforma foi uma oportunidade para aplicar meus conhecimentos em React e Next.js, além de explorar boas práticas de design e acessibilidade. Embora algumas funcionalidades ainda não estejam finalizadas, espero que o projeto demonstre a arquitetura e as decisões de design tomadas.

---

## 📝 Instruções de Execução

### Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/annaluizacamargo/liora-ecommerce
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd liora-ecommerce
   ```

3. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

4. Crie um arquivo .env como no exemplo e coloque a url da api [caso tenha disponível, caso contrário é possível testar e validar pelo link do resultado final na [Vercel](https://liora.vercel.app/)]

5. Execute o servidor de desenvolvimento:

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

6. Acesse a aplicação no navegador:
   [http://localhost:3000](http://localhost:3000)

---

## Fontes

1. Ranking de E-commerces:

- https://www.conversion.com.br/blog/ranking-ecommerces/ [ Publicado em: 18/12/2024. Acesso em: 09/01/2025 ]
- https://www.ecommercebrasil.com.br/noticias/confira-ranking-com-os-30-maiores-e-commerces-no-brasil [ Publicado em: 28/11/2024. Acesso em: 09/01/2025 ]
- https://blog.fretebarato.com/os-maiores-e-commerces-do-brasil/ [ Publicado em: 03/10/2024. Acesso em: 09/01/2025 ]
- https://gbljeans.com.br/mercado/varejo/as-37-maiores-do-varejo-de-moda-no-brasil-2024/ [ Publicado em: 03/09/2024. Acesso em: 09/01/2025 ]
- https://sbvc.com.br/as-37-maiores-do-varejo-de-moda-no-brasil/ [ Publicado em: 05/08/2024. Acesso em: 09/01/2025 ]
- https://gbljeans.com.br/mercado/varejo/os-15-maiores-ecommerce-de-moda-do-brasil/ [ Publicado em: 02/07/2024. Acesso em: 09/01/2025 ]
- https://comunidadeecommerce.com/maiores-e-commerces-do-brasil/ [ Acesso em: 09/01/2025 ]
