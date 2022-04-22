import {
    createContext,
    FC,
    ReactNode,
    useState,
} from 'react';
import { MemeberContextType } from '../interfaces/IMemberModels';
import {
    IPersonDto,
    IPerson,
} from '../interfaces/IPersonModels';
import {
    get,
    set,
    remove,
} from '../helpers/LocalStorage';
import {
    findEntityRecordById,
    updateListItems,
    deleteListItems,
} from '../helpers/entities';
import { MEMBER_LOCALSTORAGE_KEY } from '../configurations/Constants';

const toDto = (entity: IPerson): IPersonDto => {
    return {
        id: entity.id, firstName: entity.firstName, lastName: entity.lastName, jobTitle: entity.jobTitle, region: entity.region,
    } as IPersonDto;
}
const toDtos = (items: Array<IPerson>): Array<IPersonDto> => {
    return items
            .map((p: IPerson) => (toDto(p)));
};

export const MemberContext = createContext<MemeberContextType | null>(null);

interface MemberProviderProps {
    children: ReactNode;
}

const MemberProvider: FC<MemberProviderProps> = ({
    children,
}) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>(undefined);
    const [members, setMembers] = useState<Array<IPersonDto>>([]);
    const [member, setMember] = useState<IPerson>({
        id: '', firstName: '', lastName: '', jobTitle: '', region: '', created: '', lastUpdated: '',
    });

    const create = (entity: IPerson): void => {
        setLoading(true);

        const memberDto: IPersonDto = toDto(entity);

        //  Update state.
        setMembers([...members, memberDto ]);
        setMember(entity);

        //  Update localstorage.
        set(MEMBER_LOCALSTORAGE_KEY, members);

        setLoading(false);
    };

    const read = (): void => {
        setLoading(true);
        const storedEntities = get(MEMBER_LOCALSTORAGE_KEY);

        if(storedEntities instanceof Error){
            setError('Something went wrong retrieving members data.');
            setLoading(false);
            return;
        }

        if(storedEntities !== null){
            const memberDtos: Array<IPersonDto> = toDtos(JSON.parse(storedEntities));

            setMembers(memberDtos);
        }

        setLoading(false);
    };

    const findById = (id: string): void => {
        setLoading(true);
        const storedEntities = get(MEMBER_LOCALSTORAGE_KEY);

        if(storedEntities instanceof Error){
            setError('Something went wrong retrieving members data.');
            setLoading(false);
            return;
        }

        if(storedEntities !== null){
            const memberEntity = findEntityRecordById<IPerson>(id, JSON.parse(storedEntities));
            if(memberEntity !== undefined){
                setMember(memberEntity);
            }
        }
        setLoading(false);
    };

    const update = (entity: IPerson): void => {
        setLoading(true);
        const storedEntities = get(MEMBER_LOCALSTORAGE_KEY);

        if(storedEntities instanceof Error){
            setError('Something went wrong retrieving members data.');
            setLoading(false);
            return;
        }

        if(storedEntities !== null){
            const copiedMembers = updateListItems<IPerson>(entity, JSON.parse(storedEntities));

            if(copiedMembers !== undefined){
                const memberDtos: Array<IPersonDto> = toDtos(copiedMembers);

                //  Update state.
                setMembers(memberDtos);
                setMember(entity);

                //  Update localstorage.
                set(MEMBER_LOCALSTORAGE_KEY, members);
            }
        }
        setLoading(false);
    };

    const deleteEntityById = (id: string): void => {
        setLoading(true);
        const storedEntities = get(MEMBER_LOCALSTORAGE_KEY);

        if(storedEntities instanceof Error){
            setError('Something went wrong retrieving members data.');
            setLoading(false);
            return;
        }
        if(storedEntities !== null) {
            const copiedMembers = deleteListItems<IPerson>(id, JSON.parse(storedEntities));
            if(copiedMembers.length < 1) {
                setMembers([]);
                remove(MEMBER_LOCALSTORAGE_KEY);
                return;
            }
            const memberDtos: Array<IPersonDto> = toDtos(copiedMembers);

            //  Update state.
            setMembers(memberDtos);

            //  Update localstorage.
            set(MEMBER_LOCALSTORAGE_KEY, members);
        }
        setLoading(false);
    };
    
    return <MemberContext.Provider value={{
        loading,

        members,
        member,

        create,
        read,
        findById,
        update,
        deleteEntityById,

        error,
    }}>
        {children}
    </MemberContext.Provider>
};

export default MemberProvider;