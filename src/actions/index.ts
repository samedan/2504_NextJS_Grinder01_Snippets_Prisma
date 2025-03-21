"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function editSnippet(id: number, code: string) {
  console.log("edit snippet called on server");
  console.log(id, code);

  await db.snippet.update({
    where: { id },
    data: { code },
  });
  // redirect to edited snippet
  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });
  revalidatePath("/");
  redirect("/");
}

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  try {
    // check user input validity
    const title = formData.get("title");
    const code = formData.get("code");

    if (typeof title !== "string" || title.length < 3) {
      return {
        message: "Title must be longer than 3 characters",
      };
    }
    if (typeof code !== "string" || code.length < 10) {
      return {
        message: "Code must be longer than 10 characters",
      };
    }

    // write to dbb
    await db.snippet.create({
      data: {
        title: title,
        code: code,
      },
    });

    // throw new Error("Failed writing to DBB");
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        message: err.message,
      };
    } else {
      return {
        message: "Something went wrong...",
      };
    }
  }
  revalidatePath("/");
  redirect("/");
}
