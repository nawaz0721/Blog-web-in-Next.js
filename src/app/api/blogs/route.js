import { connectDB } from "@/app/lib/dbConnect";
import BlogModal from "@/app/lib/modals/BlogModal";

export async function GET(request) {
  await connectDB();
  const blogs = await BlogModal.find();
  console.log("blogs from Mongodb==> ", blogs);

  return Response.json({
    data: blogs,
    msg: "blogs fetched Successfully",
  });
}

export async function POST(request) {
  await connectDB();
  const blog = await request.json();

  const blogAdded = await new BlogModal({ ...blog });
  await blogAdded.save();

  console.log("Blogs Added in Mongodb==> ", blogAdded);

  return Response.json({
    data: blogAdded,
    msg: "Blogs Added Successfully",
  });
}
