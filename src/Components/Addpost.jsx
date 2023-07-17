import React, { useState } from 'react'
function Addpost({ addpost }) {
    const [username, setusername] = useState("")
    const [caption, setcaption] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        addpost(username, caption)
        setusername("")
        setcaption("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} placeholder='Username' onChange={(e) => setusername(e.target.value)} />
                <input type="text" value={caption} placeholder='Caption' onChange={(e) => setcaption(e.target.value)} />
                <button type='submit'>Add Post</button>
            </form>
        </div>
    )
}
export default Addpost
