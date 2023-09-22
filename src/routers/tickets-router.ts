import { getAllTickets, getAllTypeTickets, postTicket } from '@/controllers/tickets-controller';
import { authenticateToken } from '@/middlewares';
import { Router } from 'express';

const ticketsRouter = Router();

ticketsRouter
  .get('/types', authenticateToken, getAllTypeTickets)
  .get('/', authenticateToken, getAllTickets)
  .post('/', authenticateToken, postTicket);

export { ticketsRouter };
