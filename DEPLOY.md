# Deploy — Render.com (Static Site)

A aplicação é exportada como **site 100% estático** (HTML/CSS/JS), sem
runtime Node. Imagens vêm da Unsplash (CDN), então não há backend.

## Opção A — Blueprint (recomendado)

1. Faça push do projeto para um repositório GitHub.
2. No Render: **New + → Blueprint** e selecione o repositório.
3. O arquivo [`render.yaml`](./render.yaml) já define tudo:
   - Build: `npm ci && npm run build`
   - Publish: `./out`
   - Cache imutável para `/_next/static/*`

## Opção B — Configuração manual

No Render: **New + → Static Site** e preencha:

| Campo | Valor |
|---|---|
| Build Command | `npm ci && npm run build` |
| Publish Directory | `out` |
| Node Version | 20+ (env `NODE_VERSION=20`) |

## Formulário de contato (Formspree)

1. Crie um formulário em https://formspree.io e copie o ID do endpoint.
2. No Render → **Environment**, defina `NEXT_PUBLIC_FORMSPREE_ID` com esse ID
   (já declarado em `render.yaml` com `sync: false`).
3. Como o site é estático, a variável é embutida **no momento do build** —
   altere o valor e refaça o deploy se trocar de formulário.
4. Local: copie `.env.example` para `.env.local` e preencha o ID.

## Detalhes técnicos

- `next.config.ts`: `output: "export"`, `trailingSlash: true`,
  `images.unoptimized: true`.
- Saída gerada em `out/` — cada rota vira `rota/index.html` (URLs limpas).
- Página de erro: `out/404.html`.

## Testar o build estático localmente

```bash
npm run build
npx serve out      # ou: cd out && python3 -m http.server 4055
```
