import { ImageSourcePropType } from 'react-native';
import { Category } from './category';

export type Work = {
  id: number; // work id
  brand: string; // work title
  iconImageUrl?: ImageSourcePropType; // optional images of work type
  postImageUrl?: ImageSourcePropType; // optional images of work type
  position: string;
  address : string,
  date: Date;
  time: number;
  hourlyPayment: number; // hourly work payment
  description: string;
  category: Omit<Category, 'products'>; // category of work
  maxQuantityOfWorkers: number; // max quantity of workers
};