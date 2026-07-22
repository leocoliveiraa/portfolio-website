# Leonardo Oliveira Portfolio

Portfolio pessoal criado com React, TypeScript e Vite. O site apresenta projetos, informacoes profissionais, stack tecnica e formulario de contato.

## Stack

- React 19
- TypeScript
- Vite
- React Router
- Styled Components
- React Icons
- EmailJS

## Como rodar

```bash
npm install
npm run dev
```

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Variaveis de ambiente

Crie um arquivo `.env.local` com as credenciais publicas do EmailJS:

```bash
VITE_EMAILJS_SERVICE_ID=service_id
VITE_EMAILJS_TEMPLATE_ID=template_id
VITE_EMAILJS_PUBLIC_KEY=public_key
```

As mesmas variaveis precisam estar configuradas no ambiente de deploy da Vercel para o formulario de contato enviar mensagens.

## Deploy

O projeto esta preparado para deploy na Vercel. O arquivo `vercel.json` redireciona as rotas do React Router para `index.html`.
