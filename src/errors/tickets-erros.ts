import { ApplicationError } from '@/protocols';

export function ticketNotFoundError(): ApplicationError {
  return {
    name: 'TicketNotFoundError',
    message: 'Ticket not found',
  };
}

export function ticketTypeNotFoundError(): ApplicationError {
  return {
    name: 'TicketTypeNotFoundError',
    message: 'Ticket type not found',
  };
}
