from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/hello")
def hello(name: str = "mundo"):
    return {"message": f"Olá, {name}!"}

@app.post("/contact")
def contact(payload: dict = Body(...)):
    # TODO: enviar e-mail (SMTP/Resend) ou salvar em DB
    return {"received": payload, "ok": True}