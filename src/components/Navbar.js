import './Navbar.css'
export default function Navbar () {
    return(
        <div className="d-flex justify-content-center">
            <nav className="navbar navbar-expand-lg bg-body-tertiary header">
                <div className="container">
                    <a className="navbar-brand fs-4 fw-bold d-sm-inline" href="/#">Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 m-auto d-none d-lg-flex">
                        <li className="nav-item me-3 fs-4 fw-bold">
                        <a className="nav-link active" aria-current="page" href="/#">Home</a>
                        </li>
                        <li className="nav-item me-3 fs-4 fw-bold">
                        <a className="nav-link" href="/#">Shop</a>
                        </li>
                        <li className="nav-item me-3 fs-4 fw-bold">
                        <a className="nav-link" href="/#">Seasons</a>
                        </li>
                        <li className="nav-item me-3 fs-4 fw-bold">
                        <a className="nav-link" href="/#">Offers</a>
                        </li>      
                    </ul>
                        <button className="btn btn-outline-dark d-sm-inline" type="submit">Buy Now</button>
                    </div>
                </div>
            </nav>
        </div>
    );
}