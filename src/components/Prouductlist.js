import { useEffect, useState } from 'react';
import Prouduct from './Prouduct'
export default function Prouductlist (){
    const productsUrl = "https://fakestoreapi.com/products"
    const [products , setProducts] = useState([])
    useEffect( () => {
        fetch(productsUrl)
        .then((res) => res.json())
        .then((data) => setProducts(data))
    } , []
    );
    return(
        <>
        <div className='container mt-5'>
            <h2 className='mb-5 fs-1 fw-bold'>Explore our prouducts</h2>
            <div className="container">
                <div className="row flex-wrap">
                    {products.map((prouduct) => {
                        return(
                    <div className="col-lg-3 col-md-6 col-sm" key={prouduct.id}>
                        <Prouduct product={prouduct}/>
                    </div>
                        );
                    })}
                </div>
            </div>
        </div>
        </>
    );
}