import { signInAction } from "@/actions/auth-action";
import Tasks from "@/components/taskmaster/tasks";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Login</h1>
      <form action={signInAction}>
        <Button>Get Started</Button>
      </form>
    </main>
  );
}
