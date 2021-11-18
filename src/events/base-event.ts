import { Subjects } from '@/events/subjects';

export interface BaseEvent {
  subject: Subjects;
  data: any;
}
