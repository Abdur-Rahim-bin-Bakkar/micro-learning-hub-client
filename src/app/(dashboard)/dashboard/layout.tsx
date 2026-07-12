import { isLogin } from '@/lib/checkAuth/isLogin';
import { getUserSessionServer } from '@/lib/sessions/sesionServer';
import React from 'react';

const DashboardLayout = async ({ children }) => {
    const session = await getUserSessionServer()
    console.log(session,'session')
    await isLogin(session)
    return (
        <div>
            <div>

            </div>
            <div>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;