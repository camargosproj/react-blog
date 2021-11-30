import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
    const {data: blogs, isPending, error} = useFetch("http://localhost:4000/blogs")
 
    return (
        <div className="home">
            {error && <div className="messages">{ error}</div>}
            {isPending && <div className="messages">Loading...
                <div className="loader"></div>
            </div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}
 
export default Home;