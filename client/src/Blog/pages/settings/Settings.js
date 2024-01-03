import React, { useState, useEffect } from "react";
import { useAuth } from "../../../context/auth";
import toast from "react-hot-toast";
import axios from "axios";
import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

const Settings = () => {
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
        <>
            <Topbar />
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="settings col-md-9 border border-2 rounded" >
                        <div className="settingsWrapper">
                            <div className="settingsTitle">
                                <span className="settingsTitleUpdate">Update Your Account</span>
                                <span className="settingsTitleDelete">Delete Account</span>
                            </div>
                            <form className="settingsForm" onSubmit={handleSubmit}>
                                <label>Profile Picture</label>
                                <div className="settingsPP">
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
                                </div>
                                <label>Username</label>
                                <input type="text"
                                    placeholder="Safak"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                    id="exampleInputEmail1"
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
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Settings;