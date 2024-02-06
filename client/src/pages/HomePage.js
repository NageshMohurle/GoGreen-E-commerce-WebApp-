import React, { useState, useEffect } from 'react'
import Layout from '../component/Layout/Layout'
// import { useAuth } from '../context/auth'
import axios from 'axios'
import { Checkbox, Radio } from 'antd'
import { Prices } from '../component/Routes/Prices'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/cart'
import toast from 'react-hot-toast'
import "../style/Homepage.css"

const HomePage = () => {
    const [cart, setCart] = useCart([])
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [checked, setChecked] = useState([])
    const [radio, setRadio] = useState([])
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    // get all category
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get("/api/v1/category/get-category");
            if (data?.success) {
                setCategories(data?.category);
            }
        } catch (error) {
            console.log(error);
        }
    };

    //get products
    const getAllProducts = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
            setLoading(false);
            setProducts(data.products);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    // filter by cat
    const handleFilter = (value, id) => {
        let all = [...checked];
        if (value) {
            all.push(id);
        } else {
            all = all.filter((c) => c !== id);
        }
        setChecked(all);
    };

    // get total count
    const getTotal = async () => {
        try {
            const { data } = await axios.get("/api/v1/product/product-count");
            setTotal(data?.total);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        if (page === 1) return;
        loadMore();
    }, [page]);

    //load more
    const loadMore = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
            setLoading(false);
            setProducts([...products, ...data?.products]);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };
    useEffect(() => {
        getAllCategory();
        getTotal()
    }, []);


    //get filterd product
    const filterProduct = async () => {
        try {
            const { data } = await axios.post("/api/v1/product/product-filters", {
                checked,
                radio,
            });
            setProducts(data?.products);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (!checked.length || !radio.length) getAllProducts();
    }, [checked.length, radio.length]);

    useEffect(() => {
        if (checked.length || radio.length) filterProduct();
    }, [checked, radio]);

    return (
        <div className="overflow-hidden">
            <Layout title={'GoGreenApp-Home'} className='header-footer'>
                <div className="carousel slide carousel-dark" style={{ marginTop: "73px", width: '100%' }} id="topBanner" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="3000">
                            <img src="/images1/carousel1.webp" alt="" className="w-100" height={'300px'} />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src="/images1/carousel2.webp" alt="" className="w-100" height={'300px'} />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src="/images1/carousel3.webp" alt="" className="w-100" height={'300px'} />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src="/images1/carousel4.webp" alt="" className="w-100" height={'300px'} />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src="/images1/carousel5.webp" alt="" className="w-100" height={'300px'} />
                        </div>
                    </div>
                    <button className="carousel-control-prev" data-bs-slide="prev" data-bs-target="#topBanner">
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" data-bs-slide="next" data-bs-target="#topBanner">
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>

                <div className="row home-main-content ms-1 mt-3" >
                    <div className="col-md-2 sorting-part">
                        <h4 className=""><i class="bi bi-filter me-2"></i>Filter By Category</h4>
                        <div className="d-flex flex-column fw-bold ">
                            {categories?.map((c) => (
                                <Checkbox
                                    className='fw-bold form-control checkbox m-2 d-flex align-items-center filter-checkbox'
                                    key={c._id}
                                    onChange={(e) => handleFilter(e.target.checked, c._id)}
                                >
                                    {c.name}
                                </Checkbox>
                            ))}
                        </div>
                        {/* {Price Filter} */}
                        <h4 className="text-center mt-4">Filter By Price</h4>
                        <div className="d-flex flex-column ms-2">
                            <Radio.Group onChange={(e) => setRadio(e.target.value)}
                                className='text-light'>
                                {Prices?.map((p) => (
                                    <div key={p._id} className='form-control text-success m-2  filter-money'>
                                        <Radio value={p.array}
                                            className='fw-bold filter-radio'>{p.name}</Radio>
                                    </div>
                                ))}
                            </Radio.Group>
                        </div>
                        <div className="d-flex flex-column">
                            <button className='reset-btn bg-light text-success' onClick={() => {
                                window.location.reload()
                            }}>RESET FILTERS
                                <hr /></button>

                        </div>
                    </div>

                    {/* Making responsive */}
                    <div className='col-md-2 sort-dropdown'>
                        {/* dropdown for categories*/}
                        <div class="dropdown-center drop-item sort-categries">
                            <button class="btn btn-secondary categories-button dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort Products
                            </button>
                            <ul className='dropdown-menu'>
                                {categories?.map((c) => (
                                    <li className='dropdown-item' key={c._id}> <Checkbox onChange={(e) => handleFilter(e.target.checked, c._id)}>
                                        {c.name}
                                    </Checkbox></li>
                                ))}
                            </ul>
                        </div>
                        {/* dropdown for prices*/}
                        <div class="dropdown-center drop-item sort-price">
                            <button class="btn btn-secondary price-button dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort by Price
                            </button>
                            <Radio.Group onChange={(e) => setRadio(e.target.value)}
                                className='text-light'>
                                <ul className='dropdown-menu'>
                                    {Prices?.map((p) => (
                                        <li key={p._id} className='form-control text-success m-2  filter-money'>
                                            <Radio value={p.array}
                                                className='fw-bold filter-radio'>{p.name}</Radio>
                                        </li>
                                    ))}
                                </ul>
                            </Radio.Group>
                        </div>
                        <div className="reset-sort drop-item">
                            <button className='reset-btn btn btn-primary bg-light text-success' onClick={() => {
                                window.location.reload()
                            }}>RESET FILTERS
                                <hr /></button>
                        </div>
                    </div>


                    <div className="col-md-10 mt-5 all-products">
                        <h1 className='text-center products-heading'>All Products</h1>
                        <div className="d-flex flex-wrap" >
                            {products?.map((p) => (
                                <div className="card m-2" id='products-homepage' style={{ width: "18rem", height: "500px", overflow: "hidden", }}>
                                    <img
                                        src={`/api/v1/product/product-photo/${p._id}`}
                                        className="card-img-top" height={"300px"}
                                        alt={p.name}
                                    />
                                    <div className="card-body">

                                        <h5 className="card-title">{p.name.substring(0, 24)}</h5>
                                        <p className="card-text">{p.description.substring(0, 30)}..</p>
                                        <p className="card-text border bg-warning rounded text-center text-green fw-bold w-25 price">&#8377; {p.price}</p>
                                        <div className='card-buttons'>
                                            <button className='btn btn-primary me-1' onClick={() => navigate(`/product/${p.slug}`)}>More Details</button>
                                            <button className='btn btn-success'
                                                onClick={() => {
                                                    setCart([...cart, p]);
                                                    localStorage.setItem(
                                                        "cart",
                                                        JSON.stringify([...cart, p])
                                                    );
                                                    toast.success("Item Added to cart");
                                                }}
                                            >Add to Card</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="m-2 p-3">
                            {products && products.length < total && (
                                <button
                                    className="btn btn-warning"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setPage(page + 1);
                                    }}
                                >
                                    {loading ? "Loading ..." : "Loadmore"}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </Layout >
        </div >
    )
}

export default HomePage