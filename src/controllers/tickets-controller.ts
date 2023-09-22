import { AuthenticatedRequest } from '@/middlewares';
import ticketsService from '@/services/tickets-service';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { number } from 'joi';

export async function getAllTypeTickets(req: AuthenticatedRequest, res: Response) {
  const types = await ticketsService.getAllTypeTickets();
  res.status(httpStatus.OK).send(types);
}

export async function getAllTickets(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  const tickets = await ticketsService.getAllTickets(userId);
  res.status(httpStatus.OK).send(tickets);
}

export async function postTicket(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { ticketTypeId } = req.body;

  const ticket = await ticketsService.postTicket(userId, ticketTypeId);
  res.status(httpStatus.CREATED).send(ticket);
}
