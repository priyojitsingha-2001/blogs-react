
import { useParams } from 'react-router-dom'
import useFetch from '../useFetch'
import { useHistory } from 'react-router-dom';
export default function BlogDetails() {
    const { id } = useParams()
    const { data: blog, error, isPending } = useFetch('http://localhost:3000/blogs/' + id);
    const history = useHistory()
    const handleDelete = () => {
        fetch('http://localhost:3000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }
    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>delete</button>
                </article>
            )}
        </div>
    )
}
