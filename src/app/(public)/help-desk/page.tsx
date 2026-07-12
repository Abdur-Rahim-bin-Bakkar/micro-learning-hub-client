import { isLogin } from '@/lib/checkAuth/isLogin';
import { getUserSessionServer } from '@/lib/sessions/sesionServer';
import React from 'react';

const HelpDeskPage =async () => {
    const session =await getUserSessionServer()
    await isLogin(session)
    return (
        <div>
            <h1>this is help page</h1>
        </div>
    );
};

export default HelpDeskPage;