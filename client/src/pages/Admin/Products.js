import React, { useState, useEffect } from 'react'
import AdminMenu from '../../component/Layout/AdminMenu'
import Layout from '../../component/Layout/Layout'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const Products = () => {
    const [products, setProducts] = useState([]);

    //get all products
    const getAllProducts = async () => {
        try {
            const { data } = await axios.get("/api/v1/product/get-product");
            setProducts(data.products);
        } catch (error) {
            console.log(error);
            toast.error("Someething Went Wrong");
        }
    };

    //lifecycle method
    useEffect(() => {
        getAllProducts();
    }, []);


    return (
        <Layout>
            <div className="row" style={{marginTop:'100px'}}>
                <div className="col-md-3">
                    <AdminMenu />
                </div>
                <div className="col-md-9 ">
                    <h1 className="text-center">All Products</h1>
                    <div className="d-flex flex-wrap">
                        {products?.map((p) => (
                            <div className="card m-2" style={{ width: "18rem", height: "600px", overflow: "hidden", }}>
                                <img
                                    src={`/api/v1/product/product-photo/${p._id}`}
                                    className="card-img-top" height={"300px"}
                                    alt={p.name}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{p.name.substring(0, 40)}</h5>
                                    {/* <h5 className="card-title">{p.category}</h5> */}
                                    <p className='card-text border bg-warning rounded text-center text-green fw-bold w-25 '>&#8377;{p.price}</p>
                                    {/* <h5 className="card-title">{}</h5> */}
                                    <p className="card-text">{p.description.substring(0, 150)}...</p>
                                </div>
                                <Link
                                    key={p._id}
                                    to={`/dashboard/admin/product/${p.slug}`}
                                    className="product-link"
                                >
                                    <div className="card-footer text-center">
                                        <button className='btn btn-success '>Update Product</button>
                                    </div>
                                </Link>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default Products