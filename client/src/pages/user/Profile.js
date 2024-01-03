import React, { useState, useEffect } from "react";
import UserMenu from "../../component/Layout/UserMenu";
import Layout from "./../../component/Layout/Layout";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import axios from "axios";
import "../../style/Profile.css"

const Profile = () => {
    //context
    const [auth, setAuth] = useAuth();
    //state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    //get user data
    useEffect(() => {
        const { email, name, phone, address } = auth?.user;
        setName(name);
        setPhone(phone);
        setEmail(email);
        setAddress(address);
    }, [auth?.user]);

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put("/api/v1/auth/profile", {
                name,
                email,
                password,
                phone,
                address,
            });
            if (data?.error) {
                toast.error(data?.error);
            } else {
                setAuth({ ...auth, user: data?.updatedUser });
                let ls = localStorage.getItem("auth");
                ls = JSON.parse(ls);
                ls.user = data.updatedUser;
                localStorage.setItem("auth", JSON.stringify(ls));
                toast.success("Profile Updated Successfully");
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };
    return (
        <Layout title={"Your Profile"}>
            <div className="container-fluid p-3" style={{marginTop:'100px'}}>
                <div className="row">
                    <div className="col-md-3">
                        <UserMenu />
                    </div>
                    {/* <div className="col-md-9">
                        <div className="form-container ">
                            <form onSubmit={handleSubmit}>
                                <h4 className="title">USER PROFILE</h4>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        placeholder="Enter Your Name"
                                        autoFocus
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        placeholder="Enter Your Email "
                                        disabled
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Enter Your Password"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        placeholder="Enter Your Phone"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        placeholder="Enter Your Address"
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary">
                                    UPDATE
                                </button>
                            </form>
                        </div>
                    </div> */}

                    <div className="settings col-md-8 border border-2 rounded" >
                        <div className="settingsWrapper">
                            <div className="settingsTitle">
                                <span className="settingsTitleUpdate">Update Your Account</span>
                                <span className="settingsTitleDelete">Delete Account</span>
                            </div>
                            <form className="settingsForm" onSubmit={handleSubmit}>
                                {/* <label>Profile Picture</label> */}
                                {/* <div className="settingsPP">
                                    <img
                                        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                        alt=""
                                    />
                                    <label htmlFor="fileInput">
                                        <i className="settingsPPIcon far fa-user-circle"></i>{" "}
                                    </label>
                                    <input
                                        id="fileInput"
                                        type="file"
                                        style={{ display: "none" }}
                                        className="settingsPPInput"
                                    />
                                </div> */}
                                <label>Username</label>
                                <input type="text"
                                    placeholder="Safak"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    name="pattern" pattern="[A-Z a-z]{4,50}"
                                />
                                <label>Email</label>
                                <input
                                    type="email"
                                    placeholder="safak@gmail.com"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    disabled
                                />
                                <label for="password">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Password"
                                    name="password"
                                />
                                <label className="">Mobile</label>
                                <input
                                    type="text"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    placeholder="Mobile"
                                    name="pattern" pattern="[0-9]{2,10}"
                                />
                                <label for="address">Address</label>
                                <input
                                    type="text"
                                    value={address}
                                    name="address"
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    placeholder="Address"
                                />
                                <button className="settingsSubmitButton" type="submit">
                                    Update
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Profile;