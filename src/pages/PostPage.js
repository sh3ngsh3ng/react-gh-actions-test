import React, {useState, useEffect} from 'react';
import axios from "axios";

export default function PostPage(){

    const [activePost, setActivePost] = useState({});
    const [activePostId, setActivePostId] = useState("1");

    useEffect(()=>{
        const fetchPost = async(postId) => {
            const response = await axios.get("https://my-json-server.typicode.com/Kern000/kern-meow/posts/" + postId)
            setActivePost(response.data);
        }
        fetchPost(activePostId);

    }, [activePostId]);

    return(
        <React.Fragment>
            <h1> Posts</h1>
            <h2> Active Post </h2>
            <input  type="text"
                    value={activePostId}
                    name="activePostId"
                    onChange={(event)=> setActivePostId(event.target.value)}
            />
            <div>
                <p> 
                    {activePost.title}
                </p>
                <p>
                    {activePost.body}
                </p>
            </div>
        </React.Fragment>
    )
}