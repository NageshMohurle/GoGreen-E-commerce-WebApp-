
import Layout from '../../component/Layout/Layout'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import "../../style/Authstyle.css"

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [answer, setAnswer] = useState('');
    const navigate = useNavigate();

    //form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/v1/auth/forgot-password", {
                email,
                newPassword,
                answer,
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);

                navigate("/login");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };
    return (
        <Layout title={'GoGreen App-Forgot Password'}>
            <div className="form-container " style={{marginTop:'100px'}}>
                <form onSubmit={handleSubmit} className='m-4'>
                    <h1 className='title'>Reset Password</h1>
                    <div className="mb-3">
                        <input type="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder='Email' required />
                    </div>
                    <div className="mb-3">
                        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Enter Your Favorite Sport Name' required />
                    </div>
                    <div className="mb-3">
                        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='New Password' required />
                    </div>

                    <div>
                        <button type="submit" className="btn btn-success w-100">
                            RESET
                        </button>

                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default ForgotPassword