import React from 'react'
import { useLoaderData } from 'react-router';

function Github() {
    const data = useLoaderData()
    return (
      <div className=' flex flex-col gap-2 justify-center items-center m-10'>
        <h2 className=' w-40'>Followers : {data.followers} </h2>
        <img src={data.avatar_url} alt="" className=' h-96 w-96'/>
      </div>
    )
}

export default Github

export async function GithubDataLoader(){
    const response = await fetch('https://api.github.com/users/AteeqAslam769');
    return response.json() 
    
} 

