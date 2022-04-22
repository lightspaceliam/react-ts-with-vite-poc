import {
    FC,
    useEffect,
    useContext,
} from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { MemberContext } from '../../contexts/memberContext';
import { MemeberContextType } from '../../interfaces/IMemberModels';
import { IPersonDto } from '../../interfaces/IPersonModels';
import { initMockMembers } from './mockMembers';

const MemberList: FC = (): JSX.Element => {
    useEffect(() => { initMockMembers(100); }, []);

    const {
        loading,
        members,
        read,
    } = useContext(MemberContext) as MemeberContextType;

    useEffect(() => {
        read();
    }, []);

    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant='h1'>Members List</Typography>
            </Grid>
            <Grid item xs={12}>
                {loading === true
                    ? <div>Loading...</div>
                    : (
                        <>
                        {members.length === 0
                            ? <div>No records</div>
                            : (
                                <ul>
                                    {(members).map((p: IPersonDto) => (
                                        <li key={p.id}>{`${p.firstName} ${p.lastName}`}</li>
                                    ))}
                                </ul>
                            )
                        }
                        </>
                    )
                }
            </Grid>
        </Grid>
        
    );
};

//const connected = <MemberProvider><MemberList /></MemberProvider>
export default MemberList;