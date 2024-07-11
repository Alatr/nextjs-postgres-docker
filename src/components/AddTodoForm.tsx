"use client";

import { FC, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useFormState, useFormStatus } from "react-dom";
import { addTodo } from "@/app/_actions/add-todo";

export const AddTodoForm = (): React.ReactNode => {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, action] = useFormState(addTodo, {});

  if (!errors) {
    formRef?.current?.reset();
  }

  return (
    <>
      <form
        ref={formRef}
        action={action}
        className="flex w-full max-w-sm items-center space-x-2"
      >
        <Input type="new task" placeholder="new task" name="todo" />
        <SubmitButton />
      </form>
      {errors?.todo && (
        <span className="text-destructive text-sm">{errors?.todo}</span>
      )}
    </>
  );
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Adding..." : "Аdd"}
    </Button>
  );
}
