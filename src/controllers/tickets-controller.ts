import ticketsService from '@/services/tickets-service';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function getAllTypeTickets(req: Request, res: Response) {
  const types = await ticketsService.getAllTypeTickets();
  res.status(httpStatus.OK).send(types);
}

export async function getAllTickets(req: Request, res: Response) {
  const tickets = await ticketsService.getAllTickets();
  res.status(httpStatus.OK).send(tickets);
}

export async function postTicket(req: Request, res: Response) {
  const { ticketTypeId } = req.body;
  const ticket = await ticketsService.postTicket(ticketTypeId);
}
