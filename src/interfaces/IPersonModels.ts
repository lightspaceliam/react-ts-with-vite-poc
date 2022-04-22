import {
    IEntityBase,
    IEntity,
} from "./IEntityBase";

export interface IPersonDto extends IEntityBase {
    firstName: string;
    lastName: string;
    jobTitle: string;
    region: string;
}

export interface IPerson extends IEntity {
    firstName: string;
    lastName: string;
    jobTitle: string;
    region: string;
}