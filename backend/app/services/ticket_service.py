from app.db.schema import Ticket
from sqlalchemy.orm import Session
import pandas


class TicketService:
    def __init__(self, session: Session) -> None:
        self._db = session

    def list_tickets(self) -> list[Ticket]:
        return self._db.query(Ticket).all()

    def load_tickets(self):
        tickets = pandas.read_csv("../backend/app/data/tickets.csv")
        for _, row in tickets.iterrows():
            ticket = Ticket(
                subject=row["subject"],
                body=row["body"],
                type=row["type"],
            )
            self._db.add(ticket)
        self._db.commit()

    def truncate_tickets(self):
        self._db.query(Ticket).delete()
        self._db.commit()
