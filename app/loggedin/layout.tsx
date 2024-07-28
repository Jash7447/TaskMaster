import Providers from "../providers";
import { auth } from "@/auth";

export default async function LoggedInLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    // const { data: session, status } = useSession();
    const session = await auth();
    return <Providers session={session}>{children}</Providers>;
  }
  