import React, { useState } from 'react'
import Layout from '../../component/Layout/Layout'
import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom'
import toast from 'react-hot-toast';
import "../../style/Authstyle.css"
import { useAuth } from '../../context/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [auth, setAuth] = useAuth();
    const location = useLocation();
    //form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`/api/v1/auth/login`, {
                email,
                password,
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message)
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                })
                localStorage.setItem('auth', JSON.stringify(res.data))
                navigate(location.state || '/')
            }

            else {
                toast.error(res.data.message)

            }
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        }
    }
    return (
        <Layout title={'GoGreenApp-Login'}>
            <div className="form-container " style={{ marginTop: '100px' }}>
                <form onSubmit={handleSubmit} className='m-4 border rounded' style={{ width: "400px", lineHeight: "2" }}>
                    <h1 className='title'>Login Form</h1>
                    <div className="mb-3">
                        <input type="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder='Email' required />
                    </div>
                    <div className="mb-3">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Password' required />
                    </div>

                    <div>
                        <button type="submit" className="btn btn-success w-100 mb-2">Login</button>
                        <a type="submit" href="" className="w-100" onClick={() => {
                            navigate('/forgot-password')
                        }}>Forgot Password ?</a>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default Login