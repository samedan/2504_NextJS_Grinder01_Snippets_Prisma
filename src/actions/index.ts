"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

export async function editSnippet(id: number, code: string) {
  console.log("edit snippet called on server");
  console.log(id, code);

  await db.snippet.update({
    where: { id },
    data: { code },
  });
  // redirect to edited snippet
  redirect(`/snippets/${id}`);
}
