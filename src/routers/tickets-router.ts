import { getAllTickets, getAllTypeTickets, postTicket } from '@/controllers/tickets-controller';
import { authenticateToken, validateBody } from '@/middlewares';
import { ticketTypeIdSchema } from '@/schemas';
import { Router } from 'express';

const ticketsRouter = Router();

ticketsRouter
  .get('/types', authenticateToken, getAllTypeTickets)
  .get('/', authenticateToken, getAllTickets)
  .post('/', authenticateToken, validateBody(ticketTypeIdSchema), postTicket);
// .post('/', authenticateToken, postTicket);

export { ticketsRouter };
