import Layout from "../../../component/Layout/Layout.js";
// import Sidebar from "../../components/sidebar/Sidebar.js";
import SinglePost from "../../components/singlePost/SinglePost.js";

import "./single.css";

export default function Single() {
    return (
        <Layout>
            <div className="single">
                <SinglePost />
            </div>
        </Layout>
    );
}