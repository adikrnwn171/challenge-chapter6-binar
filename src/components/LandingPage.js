import "./stylesheet.css";
import { Link } from "react-router-dom";

function LandingPage({ showButton }) {
    return (
        <section className="homepage">
            <div className="container-fluid mt-md-5">
                <div className="row pt-5 justify-content-end align-items-center">
                    <div className="col-md-5 pt-3 me-2 me-xxl-5 ps-xxl-4">
                        <h1 className="homepage-title mb-2">
                            Sewa & Rental Mobil Terbaik di kawasan Semarang
                        </h1>
                        <p
                            className="homepage-desc pe-md-5"
                            style={{ textAlign: "justify" }}
                        >
                            Selamat datang di Binar Car Rental. Kami menyediakan mobil
                            kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                            kebutuhanmu untuk sewa mobil selama 24 jam.
                        </p>
                        {showButton && (
                            <Link to="/sewa">
                                <button className="btn btn-primary mb-4" type="button">
                                    Mulai Sewa Mobil
                                </button>
                            </Link>
                        )}
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <img src="assets/img_car.png" alt="Mobil" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LandingPage;