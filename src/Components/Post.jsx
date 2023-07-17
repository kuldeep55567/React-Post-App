import React from 'react'

function Post({ post, index, update, deleted }) {
    return (
        <div>
            <p>   Username:{post.username} </p>
            <p>  Caption:{post.caption} </p>
            <button onClick={()=>deleted(index)}>Delete</button>
            <button onClick={()=>update(index)}>Update</button>
        </div>
    )
}

export default Post
