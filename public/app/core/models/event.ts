import { PlayerRating } from './player-rating';

export class Event {
    description: String;
    sport: String;
    date: Date;
    peopleNeeded: Number;
    price: Number;
    contactPhone: string;
    place: string;
    creator: string;
    isFinished: boolean;
    participants: PlayerRating[];
    sentRequests: any[];
}