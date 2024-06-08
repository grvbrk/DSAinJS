"use server";

import { redirect } from "next/navigation";

export async function AddProblem(formData: FormData) {
  console.log(formData);
  redirect("/problems");
}
