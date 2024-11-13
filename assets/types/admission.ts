

export type admitionStatus = 'Pending' | 'Completed' | 'accepted' | 'waiting_for_your_arrival';

export type admissionSubmission = {
  id: string;
  slug?: string;
  workType: string;
  details: string;
  status: admitionStatus;
  date: string;
  
};
