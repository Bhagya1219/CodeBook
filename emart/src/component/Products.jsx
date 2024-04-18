import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import axios from 'axios'; 

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:3001/product');
                const { data, filter } = response.data;
                if (componentMounted) {
                    setData(data);
                    setFilter(filter);
                    setLoading(false);
                }
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();

        return () => {
            componentMounted = false;
        };
    }, []);

    const Loading = () => {
        return (
            <>
               Loading...
            </>
        );
    };

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    };

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark" onClick={() => setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronic")}>Electronic</button>
                </div>
                {filter.map((product) => {
                    return (
                        <div className="col-md-3 mb-4" key={product.id}>
                            <div className="card h-70 text-center p-4">
                                <img src={product.image} className="card-img-top" alt={product.title} height="250px"/>
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                    <p className="card-text lead fw-bold">£{product.price}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </>
        );
    };

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    );
};

export default Products;

