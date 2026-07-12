import { headers } from "next/headers";
import { auth } from "../auth";

export const getUserSessionServer = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session
}