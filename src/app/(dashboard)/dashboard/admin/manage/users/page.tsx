import { checkRole } from "@/lib/checkAuth/checkRole";
import UsersManagementClient from "./UsersManagementClient";

const UsersManagementPage = async () => {
  await checkRole("admin");
  return <UsersManagementClient />;
};

export default UsersManagementPage;
