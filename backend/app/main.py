from app.api import ticket
from app.core.config import config
from app.core.logging import setup_logging
from app.db.schema import Base, engine
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

setup_logging()
Base.metadata.create_all(bind=engine)

app = FastAPI(title=config.app_name)
app.add_middleware(CORSMiddleware, allow_origins=[])


# Register routes
app.include_router(ticket.router, prefix="/api")
