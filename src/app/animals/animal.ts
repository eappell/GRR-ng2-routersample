import { Photo } from '../photos/Photo';
import { Event } from '../events/Event';
import { Project } from '../projects/Project';

export interface IAnimal {
    animalId: string;
    trackingId: string;
    animalName: string;
    animalCode: string;
    description: string;
    events: Array<Event>;
    fatherId: string;
    hatchColor: string;
    hatchDate: string;
    lineage: string;
    motherId: string;
    photos: Array<Photo>;
    pinkiesTaken: number;
    price: number;
    productOfProject: Project;
    species: string;
    speciesLatin: string;
    status: AnimalStatus;
    takenMeal: boolean;
}

export class Animal implements IAnimal {
    animalId: string;
    trackingId: string;
    animalName: string;
    animalCode: string;
    description: string;
    events: Array<Event>;
    fatherId: string;
    hatchColor: string;
    hatchDate: string;
    lineage: string;
    motherId: string;
    photos: Array<Photo>;
    pinkiesTaken: number;
    price: number;
    productOfProject: Project;
    species: string;
    speciesLatin: string;
    status: AnimalStatus;
    takenMeal: boolean;
}

export enum AnimalStatus {
    active,
    hold,
    sold,
    deceased,
    feeding,
    waitinglist
}
