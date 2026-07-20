import { checkRole } from "@/lib/checkAuth/checkRole";
import AnnouncementManagementClient from "./AnnouncementManagementClient";

const AnnouncementManagementPage = async () => {
  await checkRole("admin");
  return <AnnouncementManagementClient />;
};

export default AnnouncementManagementPage;
