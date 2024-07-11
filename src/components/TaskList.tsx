import { FC } from "react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardFooter } from "./ui/card";
import db from "@/lib/db/db";

export async function TasksList() {
  const task = await db.task.findMany();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {task.map((task) => (
        <Card key={task.id}>
          <CardHeader>
            <CardTitle>{task.title}</CardTitle>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Done</Button>
            <Button>Delete</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
