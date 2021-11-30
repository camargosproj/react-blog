import { useParams } from "react-router";
import useFetch from "./useFetch";
import { useHistory } from "react-router";

var END_POINT = "http://localhost:4000/blogs/";

const BlogDetails = () => {

    // This hook is used to get a parameter from the URL after :
    const {id} = useParams();
    const {data: blog, error, isPending} = useFetch(END_POINT + id);
    const history = useHistory();

    const handleClick = () => {
        fetch(END_POINT+ id, {
            method: 'DELETE'          
        }).then(() => {
            history.push("/");
            alert("Blog Deleted")

        })
    }
    return ( 
        <div className="blog-details">
            {isPending && <div className="messages">Loading...
                <div className="loader"></div>
            </div>}
            {error && <div className="messages">{ error }</div>}
            
            {blog && (
                <>
                    <title>{blog.title}</title>
                    <article>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                        <div>{blog.body}</div>
                        <button onClick={handleClick}>delete</button>
                    </article>
                </>
            )}
        </div>
    );
}
 
export default BlogDetails;