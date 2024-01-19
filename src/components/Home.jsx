import Bloglist from './Bloglist';
import useFetch from '../useFetch';

export default function Home({ isDarkMode }) {
    const { data: blogs, isPending, error } = useFetch('http://localhost:3000/blogs');
    return (
        <>
            <div className="home">
                {isPending && <div className='msg'>Loading...</div>}
                {error && <div className='msg'>{error}</div>}
                {blogs && <Bloglist blogs={blogs} title="All blogs" isDarkMode={isDarkMode} />}
            </div>
        </>
    )
}
