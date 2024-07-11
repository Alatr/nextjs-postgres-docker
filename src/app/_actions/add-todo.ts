"use server";

import db from "@/lib/db/db";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const todoSchema = z.object({ todo: z.string().min(3) });

export async function addTodo(prevState: unknown, formData: FormData) {
  const result = todoSchema.safeParse(Object.fromEntries(formData.entries()));
  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  await db.task.create({ data: { title: result.data.todo } });
  revalidatePath("/");
}
