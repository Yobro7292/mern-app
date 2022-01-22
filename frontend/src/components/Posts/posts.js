import React from "react";
import { useSelector } from "react-redux";
import Post from './post/post.js';
import uStyle from './style'

const Posts = () => {

    const posts = useSelector((state) => state.posts);
    const classes= uStyle();
    console.log(posts);
    return (
        <>
            This is posts
            <Post/>
        </>
    )
}

export default Posts;