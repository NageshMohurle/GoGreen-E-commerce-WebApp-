import React from 'react'
import BlogsHeader from '../components/header/BlogsHeader.js'
import Posts from '../components/posts/Posts.js'
import Sidebar from '../components/sidebar/Sidebar.js'
import "./blogHome.css"
import Topbar from '../components/topbar/Topbar.js'
import Layout from '../../component/Layout/Layout.js'
import Post from '../components/post/Post.js'

const BlogsHome = () => {
    return (
        <>
            <Layout>
                <BlogsHeader />

                <Post />

            </Layout>
        </>
    )
}

export default BlogsHome