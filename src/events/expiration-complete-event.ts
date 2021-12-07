import { BaseEvent } from '@/events/base-event';
import { Subjects } from '@/events/subjects';

export interface ExpirationCompleteEvent extends BaseEvent {
  subject: Subjects.ExpirationComplete;
  data: {
    orderId: string;
  }
}
