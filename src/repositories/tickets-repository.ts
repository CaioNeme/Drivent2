import { prisma } from '@prisma/client';

async function getAllTypeTickets() {
  const types = await prisma.ticketType.findMany();
  return types;
}

async function getAllTickets() {
  const tickets = await prisma.ticket.findMany();
  return tickets;
}

async function postTicket(ticketTypeId: number) {}

const ticketsRepository = {
  getAllTypeTickets,
  getAllTickets,
  postTicket,
};

export default ticketsRepository;
