import './Prouduct.css'
export default function Prouduct (props){
    const { product } = props;
    return (
        <>
            <div className="card mb-5 shadow-lg border-0 border-rounded-5">
                <img src={product.image} className="card-img-top card-img" alt={product.title}/>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text product-description">{product.description}</p>
                    <p className='d-flex justify-content-around text-danger fw-semibold'>Price: {product.price}<span>Rating: {product.rating.rate}</span></p>
                    <a href="/#" className="btn btn-outline-dark">More Details</a>
                </div>
            </div>
        </>
    );
}