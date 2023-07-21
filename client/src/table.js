import React from "react";


function Usertable(props)
{
    const userdata=props.User;
    console.log(userdata);

   return(
    <>
    {
        userdata && 
        <div className="relative w-3/4 shadow-md sm:rounded-lg mt-20 m-auto ">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-cyan-950 text-white">
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Mob no
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {   userdata.map((item)=>(
                // <tr key={item._id}><td>{item.name}</td><td>{item.email}</td><td>{item.mobno}</td></tr>
                <tr key={item._id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.name}
                </th>
                <td className="px-6 py-4">
                {item.email}
                </td>
                <td className="px-6 py-4">
                {item.mobno}
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
                ))
           
            }
              
        </tbody>
    </table>
</div>
    }

    


    </>
   ) 
}

export default Usertable;