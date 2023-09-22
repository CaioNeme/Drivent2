import { ticketTypeNotFoundError } from '@/errors';
import ticketsRepository from '@/repositories/tickets-repository';

async function getAllTypeTickets() {
  const types = await ticketsRepository.getAllTypeTickets();
  return types;
}
async function getAllTickets(userId: number) {
  const tickets = await ticketsRepository.getAllTickets(userId);
  return tickets;
}
async function postTicket(userId: number, ticketTypeId: number) {
  if (!ticketTypeId) throw ticketTypeNotFoundError();
  const resp = await ticketsRepository.postTicket(userId, ticketTypeId);
  return resp;
}

const ticketsService = {
  getAllTypeTickets,
  getAllTickets,
  postTicket,
};
export default ticketsService;
