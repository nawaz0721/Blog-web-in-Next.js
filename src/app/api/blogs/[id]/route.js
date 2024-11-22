import BlogModel from "@/app/lib/modals/BlogModal";
import { NextResponse } from "next/server";

export async function GET (request , {params}){
    const id  =  params.id

    const blog = await BlogModel.findById(id);

    return Response.json(blog)
    
}

export async function PUT (request , {params}){
    const id  =  params.id
  const editedBlog = await request.json();

  const updated = await BlogModel.updateOne({
    _id: id,
},{
    ...editedBlog,
});

    return Response.json({
        blog: updated,
        msg: "Blog updated successfully",
    })
    
}

export async function DELETE(request, { params }) {
    const { id } = params;
    console.log("ID in DELETE route:", id);

    try {
        const blog = await BlogModel.deleteOne({ _id: id });
        if (blog.deletedCount === 0) {
            return NextResponse.json({ msg: "Blog not found or already deleted" }, { status: 404 });
        }
        return NextResponse.json({ msg: "Blog deleted successfully" });
    } catch (error) {
        console.error("Error deleting blog:", error);
        return NextResponse.json({ msg: "Failed to delete blog" }, { status: 500 });
    }
}