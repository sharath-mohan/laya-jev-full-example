from pydantic import BaseModel


class TicketCreate(BaseModel):
    subject: str
    body: str
    type: str


class TicketRead(BaseModel):
    id: int
    subject: str
    body: str
    type: str
    analysed_type: str | None = None


class TicketUpdate(BaseModel):
    subject: str | None = None
    body: str | None = None
    type: str | None = None
    analysed_type: str | None = None
