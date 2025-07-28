# 💰 Tech Challenge – Bytebank - Gerenciador Financeiro

Este é o projeto final da fase 01, que reúne os conhecimentos adquiridos em todas as disciplinas. O objetivo principal é desenvolver o **frontend de uma aplicação de gerenciamento financeiro**, utilizando **Next.js**, **Design System** e conceitos de **Programação Orientada a Objetos (POO)**.
---
### Link

[Bytebank](https://bytebank-taupe.vercel.app/) - Acesse o projeto Bytebank

---

## 🚀 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) – SSR e SSG com integração ao Node.js
- [React](https://react.dev/)
- [Zustand](https://zustand-demo.pmnd.rs/) – Gerenciamento de estado
- [Tailwind CSS](https://tailwindcss.com/) – Estilização via utility classes
- [React Icons](https://react-icons.github.io/react-icons/)
- [TypeScript](https://www.typescriptlang.org/) – Tipagem estática
- Design System baseado no [Figma oficial do projeto](https://www.figma.com/design/ns5TC3X5Xr8V7I3LYKg9KA/ProjetoFinanceiro?node-id=503-4264)
- [Storybook](https://storybook.js.org/docs) - Storybook para documentação dos componentes

---

## 📦 Requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- [Node.js v24.4.0](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

---

## ⚙️ Como executar o projeto localmente

```bash
# Clone o repositório
git clone https://github.com/Walteann/bytebank.git
cd seu-repositorio

# Instale as dependências
pnpm install
# ou
npm install
# ou
yarn install

# Execute o projeto em ambiente de desenvolvimento
pnpm dev
# ou
npm run dev
# ou
yarn dev

```
---
## Funcionalidades

### Home Page
- [x] Boas-vindas ao usuário
- [x] Exibição do saldo da conta corrente
- [x] Extrato com as últimas transações
- [x] Formulário para iniciar uma nova transação

### Listagem de Transações
- [x] Exibição de todas as transações realizadas
- [x] Agrupamento por mês
- [x] Visualização de detalhes da transação
- [x] Exclusão de transação

### Adicionar Transação
- [x] Campos:
  - Tipo de transação (depósito, transferência, etc.)
  - Valor

### 🚀 Funcionalidade Plus: Pix

A cada 2 minutos o usuário recebe um pix para carregar o saldo.



## Como rodar o Storybook

O Storybook permite visualizar e documentar os componentes do projeto de forma isolada, facilitando testes e desenvolvimento de interface.

### Passos para rodar o Storybook

1. **Instale as dependências do projeto** (caso ainda não tenha feito):

```bash
npm install

```

2. Execute o Storybook no ambiente local:

```bash
npm run storybook

```

Acesse no navegador:

Abra http://localhost:6006 para visualizar os componentes.