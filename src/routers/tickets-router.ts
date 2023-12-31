import { Router } from 'express';
import { getAllTickets, getAllTypeTickets, postTicket } from '@/controllers/tickets-controller';
import { authenticateToken, validateBody } from '@/middlewares';
import { ticketTypeIdSchema } from '@/schemas';

const ticketsRouter = Router();

ticketsRouter
  .get('/types', authenticateToken, getAllTypeTickets)
  .get('/', authenticateToken, getAllTickets)
  .post('/', authenticateToken, validateBody(ticketTypeIdSchema), postTicket);
// .post('/', authenticateToken, postTicket);

export { ticketsRouter };
