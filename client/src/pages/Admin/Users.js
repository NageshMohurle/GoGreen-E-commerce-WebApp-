import React, { useState, useEffect } from "react";
import AdminMenu from "../../component/Layout/AdminMenu";
import Layout from "./../../component/Layout/Layout";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import axios from "axios";
import "../../style/Profile.css";

const Users = () => {
    // context
    const [auth, setAuth] = useAuth();
    // state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [users, setUsers] = useState([]);

    // get user data
    useEffect(() => {
        const { email, name, phone, address } = auth?.user;
        setName(name);
        setPhone(phone);
        setEmail(email);
        setAddress(address);

        // Fetch all users from the API
        axios.get("/api/v1/auth/users")
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.log(error);
                toast.error("Failed to fetch users");
            });
    }, [auth?.user]);

    // useEffect(() => {
    //     if (auth?.token) getUsers();
    // }, [auth?.token]);

    return (
        <Layout title={"Your Profile"}>
            <div className="container-fluid p-3" style={{marginTop:'100px'}}>
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9">
                        <div className="table-container">
                            <h4>All Users</h4>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Address</th>
                                        <th>Date and Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user.id}>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.address}</td>

                                            <td>
                                                {new Date(user.registrationDate).toLocaleString()}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Users;