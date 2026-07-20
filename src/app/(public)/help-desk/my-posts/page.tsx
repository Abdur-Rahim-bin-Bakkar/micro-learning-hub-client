import MyPostsClient from "./MyPostsClient";
import { isLogin } from "@/lib/checkAuth/isLogin";
import { getUserSessionServer } from "@/lib/sessions/sesionServer";

const MyPostsPage = async () => {
  const session = await getUserSessionServer();
  await isLogin(session);

  return <MyPostsClient />;
};

export default MyPostsPage;
