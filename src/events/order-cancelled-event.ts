import { BaseEvent } from '@/events/base-event';
import { Subjects } from '@/events/subjects';
import { OrderStatus } from '@/events/types/order-status';

export interface OrderCancelledEvent extends BaseEvent {
  subject: Subjects.OrderCancelled;
  data: {
    id: string;
    ticket: {
      id: string;
    }
  }
}
