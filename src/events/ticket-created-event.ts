import { BaseEvent } from '@/events/base-event';
import { Subjects } from '@/events/subjects';

export interface TicketCreatedEvent extends BaseEvent {
  subject: Subjects.TicketCreated;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  }
}
