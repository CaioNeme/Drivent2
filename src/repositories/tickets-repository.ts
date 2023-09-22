import { prisma } from '@/config';
import { enrollmentNotFoundError, ticketNotFoundError } from '@/errors';

async function getAllTypeTickets() {
  const types = await prisma.ticketType.findMany();
  return types;
}

async function getAllTickets(userId: number) {
  const enrollments = await prisma.enrollment.findFirst({
    where: {
      userId,
    },
    include: {
      Address: true,
    },
  });

  if (!enrollments) throw enrollmentNotFoundError();

  const ticket = await prisma.ticket.findUnique({ where: { enrollmentId: enrollments.id } });

  if (!ticket) throw ticketNotFoundError();

  const ticketType = await prisma.ticketType.findUnique({
    where: {
      id: ticket.ticketTypeId,
    },
  });

  // console.log(enrollments);
  // console.log(tickets);
  // console.log(ticketType);

  const resp = { ...ticket, ticketType };

  return resp;
}

async function postTicket(userId: number, ticketTypeId: number) {
  const enrollments = await prisma.enrollment.findFirst({
    where: {
      userId,
    },
    include: {
      Address: true,
    },
  });

  if (!enrollments) throw enrollmentNotFoundError();

  const ticketType = await prisma.ticketType.findUnique({
    where: {
      id: Number(ticketTypeId),
    },
  });

  const ticket = await prisma.ticket.create({
    data: {
      enrollmentId: enrollments.id,
      ticketTypeId: Number(ticketTypeId),
      status: 'RESERVED',
    },
  });

  const resp = { ...ticket, ticketType };

  return resp;
}

const ticketsRepository = {
  getAllTypeTickets,
  getAllTickets,
  postTicket,
};

export default ticketsRepository;
