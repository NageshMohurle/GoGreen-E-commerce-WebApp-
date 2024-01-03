import "./singlePost.css";
import postInfo from "../../posts.json"
import { Link } from "react-router-dom";

export default function SinglePost() {




    return (
        <div className="singlePost">
            {postInfo?.map((p) => (<div className="singlePostWrapper">
                <img
                    className="singlePostImg"
                    src={p.img}
                    alt=""
                />
                <h1 className="singlePostTitle">
                    {p.title}
                   
                </h1>
                <div className="singlePostInfo">
                
                </div>
                <p className="singlePostDesc">
                    {p.description}
                    <dl>
                        <dd> <p>{p.uses}</p></dd>
                        <dd><p>{p.growing}</p></dd>
                        <dd><p>{p.tips}</p></dd>

                    </dl>



                </p>
            </div>
            ))}
        </div>
    );
}