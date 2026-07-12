import { isLogin } from '@/lib/checkAuth/isLogin';
import { getUserSessionServer } from '@/lib/sessions/sesionServer';
import React from 'react';
import Sidebar from './components/Sidebar';
import MobileSidebar from './components/MobileSidebar';
type DashboardLayoutProps = {
    children: ReactNode;
};
const DashboardLayout = async ({ children }: DashboardLayoutProps) => {
    const session = await getUserSessionServer()
    await isLogin(session)

    return (
        <main className="min-h-screen bg-[#0B0F14]">

            {/* Mobile Navbar */}
            <MobileSidebar />

            <div className="flex">

                {/* Desktop Sidebar */}
                <aside className="sticky top-0 hidden h-screen lg:block">
                    <Sidebar />
                </aside>

                {/* Main Content */}
                <section className="min-h-screen flex-1">

                    <div className="p-5 md:p-8 lg:p-10">
                        {children}
                    </div>

                </section>

            </div>

        </main>
    );
};

export default DashboardLayout;