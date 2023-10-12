import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData();
                // or
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https:/api.github.com/users/indresh0564')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])

    return(
        <div className="bg-gray-600 text-center text-white text-3xl p-4">
            Github followers:{data.followers}
            <img src={data.avatar_url} alt="github image" />
        </div>
    )
}

export default Github

export const githubInfoLoader = async ()=>{
    const data = await fetch('https:/api.github.com/users/indresh0564')
    return data.json();
}