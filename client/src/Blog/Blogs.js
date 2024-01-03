import React from 'react'
import Topbar from "./components/topbar/Topbar.js"
import BlogsHome from './pages/BlogsHome.js'
import Single from './pages/single/Singl1.js'
import Write from './pages/write/Write.js'
// import Settings from './pages/settings/Settings.js'
import Profile from '../pages/user/Profile.js'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from '../pages/auth/Register.js'
import Settings from './pages/settings/Settings.js'
// import { Switch } from 'antd'
import { Link } from 'react-router-dom'
import BlogLogin from './pages/login/BlogLogin.js'
import BlogsRegister from './pages/register/BlogsRegister.js'

const Blogs = () => {
    return (
        <>
            <BlogsHome />
        </>
    )
}

export default Blogs