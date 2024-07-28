"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Session } from "next-auth";
import { SessionProvider, useSession } from "next-auth/react";
import { ReactNode, useMemo } from "react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

function useAuth() {
  const { data: session, update } = useSession();

  return useMemo(
    () => ({
      isLoading: false,
      isAuthenticated: session !== null,
      fetchAccessToken: async ({
        forceRefreshToken,
      }: {
        forceRefreshToken: boolean;
      }) => {
        if (forceRefreshToken) {
          const session = await update();
          return session?.convexToken ?? null;
        }
      },
    }),
    // We only care about the user changes, and don't want to
    // bust the memo when we fetch a new token.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(session?.user)]
  );
}


export default function Providers({ 
  children, 
  session 
}: { 
  children: ReactNode; 
  session: Session | null;
 }) {
  return (
      <SessionProvider session={session}>
       <ConvexProvider client={convex}>{children}</ConvexProvider>
       </SessionProvider>
  );
}