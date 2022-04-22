import { FC } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom';
import AnonymouseLayout from '../components/Layouts/AnonymousLayout';

import Home from '../pages/Home/Home';
import MemberList from '../pages/Members/MemberList';

import MemberProvider from '../contexts/memberContext';
import NotFound from '../pages/Exceptions/NotFound';

const ApplicationRouter: FC = (): JSX.Element => {

    return (
        <Router>
            <AnonymouseLayout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/members' element={<MemberProvider><MemberList /></MemberProvider>} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </AnonymouseLayout>
        </Router>
    );
};

export default ApplicationRouter;