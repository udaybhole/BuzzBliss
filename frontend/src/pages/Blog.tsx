import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";
import { Skeleton } from "../components/Skeleton";
import { FullBlog } from "../components/FullBlog";

export const Blog = () =>{
    const {id} = useParams();
    const {loading , blog} = useBlog({

        id : id || ""

    });

    if(loading || !blog){
        return (
            <div className="h-screen w-screen flex items-center justify-center">
              <div className="flex flex-col items-center text-center">
                <Skeleton />
              </div>
            </div>
          );
    }

    return <div>

        <FullBlog blog = {blog}/>

    </div>
}