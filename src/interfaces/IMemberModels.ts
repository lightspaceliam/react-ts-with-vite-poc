import {
    IPersonDto,
    IPerson
} from './IPersonModels';


export type MemeberContextType = {
    loading: boolean;

    members: Array<IPersonDto>;
    member: IPerson;

    create: (entity: IPerson) => void;
    read: () => void;
    findById: (id: string) => void;
    update: (entity: IPerson) => void;
    deleteEntityById: (id: string) => void;

    error?: string;
};