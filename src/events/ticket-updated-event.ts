import { BaseEvent } from '@/events/base-event';
import { Subjects } from '@/events/subjects';

export interface TicketUpdatedEvent extends BaseEvent {
  subject: Subjects.TicketUpdated;
  data: {
    id: string;
    version: number;
    title: string;
    price: number;
    userId: string;
    orderId?: string;
  }
}
