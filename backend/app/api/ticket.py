from app.db.schema import SessionLocal
from app.models.ticket import TicketRead
from app.services.ticket_service import TicketService
from fastapi import APIRouter, Depends

router = APIRouter()


def get_ticket_service() -> TicketService:
    return TicketService(session=SessionLocal())


@router.get("/tickets")
def get_tickets(service: TicketService = Depends(get_ticket_service)):
    return service.list_tickets()


@router.get("/load-tickets")
def load_tickets(service: TicketService = Depends(get_ticket_service)):
    tickets = service.list_tickets()
    if len(tickets) == 0:
        service.load_tickets()
        return {"message": "tickets loaded successfully"}
    return {"message": "tickets already loaded"}


@router.get("/truncate-tickets")
def truncate_tickets(service: TicketService = Depends(get_ticket_service)):
    service.truncate_tickets()
    return {"message": "tickets truncated successfully"}
