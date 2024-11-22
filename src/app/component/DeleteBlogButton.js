"use client"

const { deleteBlog } = require("@/actions/blogs");
const { Button } = require("@/components/ui/button");
const { useRouter } = require("next/navigation");

const DeleteBlogButton = ({id}) =>{
    const router = useRouter()
    return (
        <div onClick={async ()=>{
            await deleteBlog(id);
            router.push("/blogs");
        }}>
            <Button>Delete</Button>
        </div>

    )
}

export default DeleteBlogButton; 