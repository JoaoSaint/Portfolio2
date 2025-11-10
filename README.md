# Next.js Portfólio Starter (App Router + Tailwind) + Python opcional

## Rodar local (frontend)
pnpm install   # (ou npm install / yarn)
pnpm dev       # abre em http://localhost:3000

### Prévia de produção local
pnpm build
pnpm start

## Rodar backend Python (opcional)
cd backend-python
pip install -r requirements.txt
uvicorn main:app --reload --port 8000

O Next já faz proxy: requisições para `/api/py/*` vão para `http://localhost:8000/*` (veja `next.config.mjs`).

## Onde editar
- Páginas: `app/` (Home, Projects, About, Contact).
- Componentes: `components/` (Navbar, Footer, ProjectCard, ContactForm).
- Dados de projetos: `data/projects.ts`.
- Estilos: `app/globals.css` + Tailwind.
- Avatar: `public/avatar.jpg` (substitua pela sua foto).
- Logo exemplo: `public/logos/sentinela.png`.

## Variáveis de ambiente
Copie `.env.local.example` para `.env.local` e ajuste quando for apontar para um backend externo.

## Observações
- Esse starter usa TypeScript e App Router.
- Se não quiser o backend Python, basta ignorar `backend-python/` e remover o proxy ou não usá-lo.
