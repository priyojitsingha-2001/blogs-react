import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
export default function Create() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false)
    const history = useHistory();
    const handleSubmit = (event) => {
        event.preventDefault()
        const blog = { title, body, author }
        setIsPending(true)
        fetch('http://localhost:3000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        })
            .then(() => {
                console.log('new blog added')
                setIsPending(false)
                history.push('/')
            })
    }
    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Blog Title:</label>
                <input type="text" value={title} required onChange={(event) => setTitle(event.target.value)} />
                <label htmlFor="">Blog Details:</label>
                <textarea required cols="30" rows="20" value={body} onChange={(event) => setBody(event.target.value)}></textarea>
                <label htmlFor="">Blog Author:</label>
                <input type="text" onChange={(event) => setAuthor(event.target.value)} />
                {!isPending && <button type='submit'>Add Blog</button>}
                {isPending && <button disabled>Adding blog</button>}
            </form>
        </div>
    )
}
