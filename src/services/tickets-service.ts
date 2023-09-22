import { Ticket } from '@/protocols';
import ticketsRepository from '@/repositories/tickets-repository';

async function getAllTypeTickets() {
  const types = await ticketsRepository.getAllTypeTickets();
  return types;
}
async function getAllTickets() {
  const tickets = await ticketsRepository.getAllTickets();
  return tickets;
}
async function postTicket(ticketTypeId: number) {
  const resp = await ticketsRepository.postTicket(ticketTypeId);
  return resp;
}

const ticketsService = {
  getAllTypeTickets,
  getAllTickets,
  postTicket,
};
export default ticketsService;
