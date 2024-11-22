"use server";

import { revalidatePath } from "next/cache";

export async function addBlog(obj) {
  try {
    await fetch("http://localhost:3000/api/blogs", {
      method: "POST",
      body: JSON.stringify(obj),
    });
    // revalidatePath("/todos");
  } catch (error) {
    console.error(error);
  }
}

export async function getSingleBlog(id) {
  try {
    let res = await fetch(`http://localhost:3000/api/blogs/${id}`);
    res = await res.json();
    return res;
  } catch (error) {
    console.error(error);
  }
}

export async function updateBlog(id, obj) {
  try {
    await fetch(`http://localhost:3000/api/blogs/${id}`, {
      method: "PUT",
      body: JSON.stringify(obj),
    });
    revalidatePath("/blogs");
  } catch (error) {
    console.error(error);
  }
}
export async function deleteBlog(id) {
  console.log("ID in backend", id);

  try {
    await fetch(`http://localhost:3000/api/blogs/${id}`, {
      method: "DELETE",
    });
    revalidatePath("/blogs");
  } catch (error) {
    console.error(error);
  }
}
