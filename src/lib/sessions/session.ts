import { authClient } from "../auth-client";

export function useUserSession() {
  const { data: session, isPending } = authClient.useSession();

  return {
    session,
    user: session?.user,
    isPending,
  };
}

