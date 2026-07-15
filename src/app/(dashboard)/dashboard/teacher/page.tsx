import { checkRole } from '@/lib/checkAuth/checkRole';
import { getUserSessionServer } from '@/lib/sessions/sesionServer';
import React from 'react';

const TeacherDashboardHomePage = async() => {
    const session  = await getUserSessionServer()
    // const role = await session?.user?.id;
    await checkRole('teacher')
    return (
        <div>
            <h1></h1>
        </div>
    );
};

export default TeacherDashboardHomePage;