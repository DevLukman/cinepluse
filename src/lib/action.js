"use server";

import { redirect } from "next/navigation";

export async function searchAction(formData) {
  const query = formData.get("query")?.trim();
  console.log(query);
  if (!query) return null;
  redirect(`/search?query=${encodeURIComponent(query)}`);
}
