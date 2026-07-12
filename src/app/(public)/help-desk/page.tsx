import { getHelpPosts } from '@/lib/api/helpDesk/helpDesk';
import { isLogin } from '@/lib/checkAuth/isLogin';
import { getUserSessionServer } from '@/lib/sessions/sesionServer';
import React from 'react';

const HelpDeskPage =async () => {
    const session =await getUserSessionServer()
    await isLogin(session)
    const PostData = await getHelpPosts()
    console.log(PostData,'pd')
    return (
        <div>
            <h1>this is help page{PostData?.data?.length}</h1>
        </div>
    );
};

export default HelpDeskPage;