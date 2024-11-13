import { admissionSubmission } from './types/admission';

export const ORDERS: admissionSubmission[] = [
  {
    id: '1',
    workType: 'Order 1',
    details: 'Details about order 1',
    status: 'Pending',
    date: '2024-07-01',
    
  },
  {
    id: '2',
    workType: 'Order 2',
    details: 'Details about order 2',
    status: 'Completed',
    date: '2024-07-02',
    
   
  },
  {
    id: '3',
    workType: 'Order 3',
    details: 'Details about order 3',
    status: 'waiting_for_your_arrival',
    date: '2024-07-03',
   
  },
  {
    id: '4',
    workType: 'Order 4',
    details: 'Details about order 4',
    status: 'Pending',
    date: '2024-07-04',
 
  },
];