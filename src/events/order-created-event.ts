import { BaseEvent } from '@/events/base-event';
import { Subjects } from '@/events/subjects';
import { OrderStatus } from '@/events/types/order-status';

export interface OrderCreatedEvent extends BaseEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    status: OrderStatus;
    userId: string;
    expiresAt: string;
    ticket: {
      id: string;
      price: number;
    }
  }
}
