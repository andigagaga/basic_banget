import React from 'react'
import {useState, useEffect} from 'react'
import axios from "axios";

interface IPost {
    id:number;
    title:string;
}

function GetPostApi() {
    const [post, setPost] = useState<IPost[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => setPost(res.data))
        .catch(err => setError(err.message))
        .finally(() => setLoading(false))
    }, [])
    // console.log("post", post);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error : {error}</p>
    
  return (
    <div>
      <h2>LIST POST</h2>
      <div>
        <ul>
            {post.map((post, i) => (
                <li key={i}>{post.title}</li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default GetPostApi
