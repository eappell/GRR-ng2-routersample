import { Photo } from '../../photos/Photo';
import { Event } from '../../events/Event';
import { Animal } from '../../animals/shared/animal.model';

export interface IProject {
    Id: string;
    damId: string;
    sireId: string;
    startDate: Date;
    endDate: Date;
    hatchDate: Date;
    layDate: Date;
    expectedHatchDate: Date;
    incubationType: string;
    isComplete: boolean;
    status: string;
    description: string;
    shortDescription: string;
    eggs: Eggs;
    photos: Array<Photo>;
    events: Array<Event>;
    offspring: Array<Animal>;
}

export class Project implements IProject {
    Id: string;
    damId: string;
    sireId: string;
    startDate: Date;
    endDate: Date;
    hatchDate: Date;
    layDate: Date;
    expectedHatchDate: Date;
    incubationType: string;
    isComplete: boolean;
    status: string;
    description: string;
    shortDescription: string;
    eggs: Eggs;
    photos: Array<Photo>;
    events: Array<Event>;
    offspring: Array<Animal>;
}

export class Eggs {
    count: number;
    fertile: number;
    infertile: number;
    questionable: number;
    slugs: number;
}
