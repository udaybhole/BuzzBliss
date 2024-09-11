
import { Link } from "react-router-dom"
export const Appbar = () => {

    return <div className=" py-5 border-b flex justify-between px-10">

        <div className="pt-4 flex flex-col justify-center cursor-pointer">
            <Link to={"/blogs"}>

                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">BuzzBliss</button>

            </Link> 

        </div>





        <div className="pt-4 flex justify-center items-center">
            <div className="pr-10">
                <Link to={"/publish"}>
                    <button type="button" className="pr-5 text-white bg-green-700 hover:bg-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        New
                    </button>
                </Link>
                


                <Link to={"/"}>

<button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Home</button>

</Link>
            </div>


        </div>


    </div >
}