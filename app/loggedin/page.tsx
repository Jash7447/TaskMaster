import Tasks from "@/components/taskmaster/tasks";
import UserProfile from "@/components/taskmaster/user-profile";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Taskmaster</h1>
      <UserProfile/>
      <Tasks />
    </main>
  );
}
