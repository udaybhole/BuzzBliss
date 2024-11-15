import { BlogCard } from "../components/BlogCard"
import { Appbar } from "../components/Appbar"
import { useBlogs } from "../hooks"
import { Skeleton } from "../components/Skeleton"

export const Blogs = ()=>{

    const {loading , blogs} = useBlogs();
    const currentDate = new Date().toLocaleDateString();

    if(loading){
        return <div className="pt-">
            <Appbar></Appbar>
            <div className="pt-5">
             <Skeleton></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
            </div>
           
        </div>
    }


    return <div >
    <Appbar></Appbar>
    <div className="flex justify-center">
    <div>
        {blogs.map(blog => <BlogCard
        id = {blog.id}
        authorName = {blog.author.name}
        title = {blog.title}
        content = {blog.content} 
        publishedDate = {currentDate}
        />
        )}
       
    </div>
    </div>
    </div>
}