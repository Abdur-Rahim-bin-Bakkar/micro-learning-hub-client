import HelpDesk from '@/components/helpDesk/HelpDesk';
import { getHelpPosts } from '@/lib/api/helpDesk/helpDesk';
import { isLogin } from '@/lib/checkAuth/isLogin';
import { getUserSessionServer } from '@/lib/sessions/sesionServer';
import React from 'react';

const HelpDeskPage =async () => {
    const session =await getUserSessionServer()
    await isLogin(session)
      const postData = await getHelpPosts();

  console.log(postData, "pd");
    return (
        <div>
            <HelpDesk PostData={postData?.data} />
        </div>
    );
};

export default HelpDeskPage;