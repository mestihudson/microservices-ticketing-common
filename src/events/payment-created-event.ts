import { BaseEvent } from '@/events/base-event';
import { Subjects } from '@/events/subjects';
import { OrderStatus } from '@/events/types/order-status';

export interface PaymentCreatedEvent extends BaseEvent {
  subject: Subjects.PaymentCreated;
  data: {
    id: string;
    orderId: string;
    stripeId: string;
  }
}
