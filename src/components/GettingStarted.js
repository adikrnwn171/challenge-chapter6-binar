import "./stylesheet.css";
import { Link } from 'react-router-dom';

function GettingStarted() {
    return (
        <section className="getting-started" id="getting-started">
            <div className="container">
                <div className="box text-center p-5">
                    <h2 className="title">Sewa Mobil di Semarang Sekarang</h2>
                    <p className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                    </p>
                    <Link to="/sewa">
                        <button className="btn btn-primary text-center" type="button">
                            Mulai Sewa Mobil
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default GettingStarted;