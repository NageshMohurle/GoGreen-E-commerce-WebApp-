import React from 'react'
import "./blogHeader.css"

const BlogsHeader = () => {
    return (
        <>
            <div className="header">
                <div className="headerTitles">
                    <span className="headerTitleSm">Grow your Knowledge about Gardning</span>
                    <span className="headerTitleLg">BLOG</span>
                </div>
                <img
                    className="headerImg"
                    src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                />
            </div>
        </>
    )
}

export default BlogsHeader