import { checkRole } from "@/lib/checkAuth/checkRole";
import { redirect } from "next/navigation";

const AnnouncementPage = async () => {
  await checkRole("admin");
  redirect("/dashboard/admin/manage/announcements");
  return null;
};

export default AnnouncementPage;