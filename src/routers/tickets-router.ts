import { getAllTickets, getAllTypeTickets, postTicket } from '@/controllers/tickets-controller';
import { authenticateToken } from '@/middlewares';
import { Router } from 'express';

const ticketsRouter = Router();

ticketsRouter
  .all('/*', authenticateToken)
  .get('/tickets/types', getAllTypeTickets)
  .get('/tickets', getAllTickets)
  .post('/tickets', postTicket);

export { ticketsRouter };
