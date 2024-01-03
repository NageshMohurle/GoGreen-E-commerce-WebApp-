import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from 'antd'
import "../../style/header.css"


const Header = () => {
    const [cart] = useCart()
    const [auth, setAuth] = useAuth();
    const categories = useCategory();
    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: "",
        });
        localStorage.removeItem("auth");
        toast.success("Logout Successfully");
    };
    return (
        <>
            <nav className="navbar header-container navbar-expand-lg bg-body-tertiary me-2" style={{ height: "70px" }}>
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarTogglerDemo01">
                        <div>
                            <Link to="/" className="navbar-brand">
                                <span class="fa-solid fa-seedling text-success"></span>GoGreen
                            </Link>
                        </div>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <div>
                                <SearchInput />
                            </div>
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link ">
                                    <span className="bi bi-house-fill me-2"></span>Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/blogs" className="nav-link fw-bold">
                                    <i class="fa-brands fa-blogger-b me-2"></i>BLOGS
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to={"/categories"}
                                    data-bs-toggle="dropdown"
                                >
                                    <i class="bi bi-list"></i> Categories
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-lg-end">
                                    <li>
                                        <Link className="dropdown-item " to={"/categories"}>
                                            All Categories
                                        </Link>
                                    </li>
                                    {categories?.map((c) => (
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to={`/category/${c.slug}`}
                                            >
                                                {c.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>

                            {!auth?.user ? (
                                <>
                                    <li className="nav-item">
                                        <NavLink to="/register" className="nav-link">
                                            <i class="fa-solid fa-user-plus me-2"></i>Register
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/login" className="nav-link">
                                            <i class="fa-solid fa-right-to-bracket me-2"></i>Login
                                        </NavLink>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item dropdown">

                                        <NavLink
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            style={{ border: "none" }}
                                        >
                                            {auth?.user?.name}
                                        </NavLink>
                                        <ul className="dropdown-menu dropdown-menu-lg-end">
                                            <li>
                                                <NavLink
                                                    to={`/dashboard/${auth?.user?.role === 1 ? `admin` : `user`
                                                        }`}
                                                    className="dropdown-item"
                                                >
                                                    Dashboard
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    onClick={handleLogout}
                                                    to="/login"
                                                    className="dropdown-item"
                                                >
                                                    Logout
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                </>
                            )}
                            <li className="nav-item">
                                <Badge count={cart?.length} showZero>
                                    <NavLink to="/cart" className="nav-link">
                                        <span className="bi bi-cart fw-bold text-warning" style={{ fontSize: "25px", }}></span>                                </NavLink>
                                </Badge>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    );
};

export default Header;