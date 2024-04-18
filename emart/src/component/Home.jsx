import React from 'react'
import Products from './Products';

const Home = () => {
    return (
        <div className='hero'>
            <div class="card text-bg-dark text-black border-0">
                <img src="/assets/bg.jpg" class="card-img" alt="Background" height="550px"/>
                    <div class="card-img-overlay d-flex flex-column justify-content-center">
                        <div className='container'>
                        <h5 class="card-title display-3 fw-bolder mb-0">New Season Arrivals</h5>
                        <p class="card-text fs-2">Check Out All The Trends.</p>
                        </div>
                    </div>
            </div>
            <Products/>
        </div>
    );
}

export default Home;