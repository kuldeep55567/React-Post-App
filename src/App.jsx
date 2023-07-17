import './App.css';
import Addpost from './Components/Addpost';
import Post from './Components/Post';
import { useState } from 'react';
function App() {
  const [posts,setPosts] = useState([])
  const addPost = (username,caption)=>{
    const new_post = {username,caption};
    setPosts([...posts,new_post])
  }
  const updatePost = (index,username,caption)=>{
    const updated = [...posts]
    updated[index] = {...updated,username,caption}
    setPosts(updatePost)
  }
  const deletePost = (index)=>{
    const deletedPost = [...posts];
    deletePost.splice(index,1)
    setPosts(deletedPost)
  }
  return (
    <div >
   <h1>Instagram</h1>
   <Addpost addpost={addPost}/>
   {posts.length===0?(
    <p>Create your First Post</p>
   ):(
    <p>
      {posts.map((post,index)=>(
        <Post key={index} post={post} index={index} update={updatePost}deleted={deletePost} />
      ))}
    </p>
   )}
    </div>
  );
}

export default App;
