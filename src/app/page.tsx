import { AddTodoForm } from "@/components/AddTodoForm";
import { TasksList } from "@/components/TaskList";
import { Button } from "@/components/ui/button";
import db from "@/lib/db/db";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col p-4 gap-4">
      <div className="z-10 w-full max-w-5xl items-center justify-between flex-col  font-mono text-sm lg:flex">
        <h1 className="flex self-center text-3xl font-semibold mb-3">Todos</h1>
        <AddTodoForm />
      </div>
      <TasksList />
    </main>
  );
}
