import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../component/Layout/Layout";
import "../style/Categories.css"

const Categories = () => {
    const categories = useCategory();
    return (
        <Layout title={"All Categories"}>
            <div className="container">
                <div className="row m-4 category-container justify-content-center">
                    {categories.map((c) => (
                        <div className="col-2 m-2" key={c._id}>
                            <Link to={`/category/${c.slug}`} className="btn border border-3 fw-bold d-flex justify-content-center align-items-center categories-box">
                                {c.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Categories;