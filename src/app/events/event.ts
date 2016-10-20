import {Photo} from '../photos/Photo';

export class Event {
    eventId: string;
    eventDate: Date;
    description: string;
    title: string;
    photos: Array<Photo>;

    constructor(evtDate: Date, title: string) {
        this.eventDate = evtDate;
        this.title = title;
    }
}
