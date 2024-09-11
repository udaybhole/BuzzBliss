import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import axios from "axios";
export interface Blog{
    
        "content": string;
        "title": string;
        "id": number;
        "author": {
            "name": string
        }
    
}

export const useBlog = ({id}:{id:string})=>{

    const[loading , setloading] = useState(true);

    const[blog,setblog] = useState<Blog>();

    useEffect(()=>{

        axios.get(`${BACKEND_URL}/api/v1/blog/bulk/${id}`,{
            headers:{
                Authorization : localStorage.getItem("token")
            }
        })
        .then(res =>{
            setblog(res.data.blog);
            setloading(false);
        })

    },[])

    return {
        loading,blog
    } 

}
export const useBlogs = ()=>{

    const[loading , setloading] = useState(true);

    const[blogs,setblogs] = useState<Blog []>([]);

    useEffect(()=>{

        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers:{
                Authorization : localStorage.getItem("token")
            }
        })
        .then(res =>{
            setblogs(res.data.blogs);
            setloading(false);
        })

    },[])

    return {
        loading,blogs
    }
}