
# Portfólio — Single Page + Projetos detalhados + Backend Python (opcional)

## Rodar frontend (Windows PowerShell)
npm.cmd install
npm.cmd run dev
# abre em http://localhost:3000

## Backend Python (opcional) — sem ativar venv (dribla política de scripts)
cd backend-python
py -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m uvicorn main:app --reload --port 8000

# Proxy já configurado: /api/py/* -> http://localhost:8000/*
# Edite conteúdos em: app/page.tsx, data/*.ts, public/*
