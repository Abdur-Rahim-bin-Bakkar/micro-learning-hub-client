import { checkRole } from '@/lib/checkAuth/checkRole';
import { getUserSessionServer } from '@/lib/sessions/sesionServer';
import React from 'react';

const AdminDashBoard = async () => {
    const session = await getUserSessionServer()
    await checkRole('admin')

    return (
        <div>
            <h1>admin AdminDashBoard</h1>
        </div>
    );
};

export default AdminDashBoard;