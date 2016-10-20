import { Photo } from '../photos/Photo';
import { Event } from '../events/Event';

export interface IProject {
    projectId: string;
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
}

export class Project implements IProject {
    projectId: string;
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
}

export class Eggs {
    count: number;
    fertile: number;
    infertile: number;
    questionable: number;
    slugs: number;
}
