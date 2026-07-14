import { checkRole } from '@/lib/checkAuth/checkRole';
import React from 'react';

const StudentDashboardHomePage =async () => {
    await checkRole('student')
    return (
        <div>
            
        </div>
    );
};

export default StudentDashboardHomePage;