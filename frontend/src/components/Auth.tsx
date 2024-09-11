import { ChangeEvent, useState } from "react"
import { Link , useNavigate } from "react-router-dom"
import { SignupInput } from "blogproject"
import { BACKEND_URL } from "../config"
import axios from "axios"
interface LabelledInputType {
    label: string
    placeholder: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type ?: string
}
function LabelledInput({ label, placeholder, onChange , type }: LabelledInputType) {

    return <div>
        <label className="block mt-5 mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black" placeholder={placeholder} required />
    </div>
}





export const Auth = ({type}: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInputs, setpostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    })


    async function sendRequest(){

        try {
            const res = await  axios.post(`${BACKEND_URL}/api/v1/user/${type == "signup" ? "signup" : "signin"}`,postInputs);
            const jwt = res.data;
            localStorage.setItem("token",jwt);
            navigate("/blogs");
        } catch (error) {

            
        }
    }




    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center ">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-slate-500 dark:border-gray-700">
        

            <div>

            <div>
               
                <div className="text-3xl font-extrabold text-white text-center">
                    Create an account.
                </div>

                <div className="text-slate-400 text-center">
                    {type== "signin" ?"Dont't have an account?" : "Already have an account?"}

                    <Link  className="underline" to ={type == "signin" ? "/signup" :"/signin"}> 
                    {type == "signin" ? "Sign up" : "Sign in"}
                    </Link>
                </div>
                
            </div>



            <div>

           
            {type == "signup" ? <LabelledInput label="Name" placeholder="Uday bhole..." onChange={(e) => {
                setpostInputs({
                    ...postInputs,
                    name: e.target.value,

                })
            }} />: null}
        


            <LabelledInput label="Username" placeholder="uday@gmail.com..." onChange={(e) => {
                setpostInputs({
                    ...postInputs,
                    username: e.target.value,

                })
            }} />


            <LabelledInput label="Password" type={"password"} placeholder="*******" onChange={(e) => {
                setpostInputs({
                    ...postInputs,
                    password: e.target.value,

                })
            }} />

<button onClick={sendRequest} type="submit" className="mt-6 w-full text-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-black dark:hover:bg-slate-600 ">{type == "signin" ? "Sign in" : "Sign up"}</button>

</div>


</div>
</div>

        </div>


    </div>
}


