import { Link } from "react-router-dom";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id:number

}

export const BlogCard = (
    { id,
         authorName,
        title,
        content,
        publishedDate }: BlogCardProps
) => {
    return <Link to = {`/blog/${id}`}>
    <div className=" m-4 border border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer ">

        <div>
            <div className=" pl-5 pt-2 flex">
                <div className="flex justify-center flex-col">
                <Avatar name={authorName} />
                </div>
           
            <div className="font-extralight pl-2 pr-2">
                 {authorName} 
            </div>
            <div className="flex justify-center flex-col">
            <Circle/>
            </div>
            
           
            <div className="text-slate-500 pl-2">
            {publishedDate}
            </div>
                  
         </div>
        </div>

        <div className="pl-5 pt-2 text-xl font-semibold">
            {title}
        </div>
        <div className="pl-5 pt-2 font-thin text-md">
            {content.length > 100 ? content.slice(0, 100) + "...." : content.slice(0, 100)}
        </div>

        <div className="pl-5 pt-4 text-slate-400 text-sm font-thin">
            {`${Math.ceil(content.length / 100)}  minute(s) read`}
        </div>

    </div>
    </Link>
}


function Circle (){
    return <div className="h-1 w-1 rounded-full bg-slate-500">
                
    </div>
}

export function Avatar({ name }: { name: string }) {
    return <div>

        <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">
                {name.split(" ").length >= 2
                    ? `${name.split(" ")[0][0].toUpperCase()}${name.split(" ")[1][0].toUpperCase()}`
                    : name[0].toUpperCase()}
            </span>
        </div>

    </div>
}