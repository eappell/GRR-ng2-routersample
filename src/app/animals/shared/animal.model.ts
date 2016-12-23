import { Photo } from '../../photos/Photo';
import { Event } from '../../events/Event';
import { Project } from '../../projects/shared/project.model';

export interface IAnimal {
    Id: string;
    TrackingId: string;
    DOB: string;
    DateAdded: string;
    DateRemoved: string;
    Gender: string;
    PairingUrl: string;
    HatchWeight: number;
    Name?: string;
    AnimalCode: string;
    Description?: string;
    Events?: Array<Event>;
    FatherId?: string;
    HatchColor?: string;
    HatchDate: string;
    Lineage?: string;
    MotherId?: string;
    Photos?: Array<Photo>;
    PinkiesTaken?: number;
    Price?: number;
    ProductOfProject?: Project;
    Species: string;
    SpeciesLatin: string;
    Status: AnimalStatus;
    TakenMeal?: boolean;
    OwnerId: number;
}

export class Animal implements IAnimal {
    Id: string;
    TrackingId: string;
    Name?: string;
    AnimalCode: string;
    DOB: string;
    DateAdded: string;
    DateRemoved: string;
    Gender: string;
    Description: string;
    Events: Array<Event>;
    FatherId: string;
    HatchColor: string;
    HatchWeight: number;
    HatchDate: string;
    Lineage: string;
    MotherId: string;
    Photos: Array<Photo>;
    PinkiesTaken: number;
    Price: number;
    PairingUrl: string;
    ProductOfProject: Project;
    Species: string;
    SpeciesLatin: string;
    Status: AnimalStatus;
    TakenMeal: boolean;
    OwnerId: number;
}

export class AnimalStatus {
  Id: number;
  Name: string;
}

// export enum AnimalStatus {
//     active,
//     available,
//     hold,
//     sold,
//     deceased,
//     feeding,
//     waitinglist
// }
