import { Link, useParams } from "react-router-dom";
import { useState } from "react"; // Import the useState hook
import "./post.css";
import postInfo from "../../posts.json";

export default function Post() {
    const [clickedPostId, setClickedPostId] = useState(null); // Initialize the state variable
    const { id } = useParams(); // Get the id parameter from the URL

    return (
        <div className="post-container">
            {postInfo?.map((p) => (
                <div className="post" key={p.id}>
                    <img className="postImg" src={p.img} alt="" />
                    <h4>{p.title}</h4>
                    <h4>{p.id}</h4>
                    <p>{p.description.substring(0, 50)}....</p>
                    <Link
                        to={`/post/abc`}
                        className="link"
                        onClick={() => setClickedPostId(p.id)} // Update the state variable when the link is clicked
                    >
                        Read more
                    </Link>
                    

                    {/* Conditionally render the description */}
                    <hr />
                </div>
            ))}
        </div>
    );
}