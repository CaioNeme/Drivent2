import { TicketTypeId } from '@/protocols';
import Joi from 'joi';

export const ticketTypeIdSchema = Joi.object<TicketTypeId>({
  ticketTypeId: Joi.number().required(),
});
