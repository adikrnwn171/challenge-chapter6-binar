import "./stylesheet.css";
import { Link } from "react-router-dom";

function Navbar() {
    const styles = `
  /* Gaya CSS untuk navbar */
  .navbar {
    background-color: #F1F3FF;
    box-shadow: var(--shadow-low);
  }

  /* Gaya CSS untuk link navbar */
  .nav-link {
    color: var(--netral-color-05);
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    font-size: 14px;
  }

  /* Gaya CSS untuk hover pada link navbar */
  .nav-link:hover {
    color: var(--netral-color-03);
  }

  /* Gaya CSS untuk tombol primary */
  .nav .btn-primary {
    background-color: var(--primary-color-lime04);
    border-radius: 2px;
    border-color: var(--primary-color-lime04);
    padding: 8px 12px;
    font-weight: 700;
    font-size: 14px;
  }

  /* Gaya CSS untuk hover pada tombol primary */
  .nav .btn-primary:hover {
    background-color: var(--primary-color-lime03);
    border-color: var(--primary-color-lime03);
  }
`;

    return (
        <>
            <style>{styles}</style>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <Link to="/">
                        <div className="logo"></div>
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#navbarOffcanvas"
                        aria-controls="navbarOffcanvas"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="offcanvas offcanvas-end"
                        tabIndex="-1"
                        id="navbarOffcanvas"
                        aria-labelledby="navbarOffcanvasLabel"
                        style={{ width: "50%" }}
                    >
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title fw-bold" id="navbarOffcanvasLabel">
                                BCR
                            </h5>
                            <button
                                type="button"
                                className="btn-close text-reset"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div className="offcanvas-body">
                            <ul className="navbar-nav ms-auto mb-lg-0">
                                <li className="nav-item me-4">
                                    <a className="nav-link" href="/#our-service">
                                        Our Service
                                    </a>
                                </li>
                                <li className="nav-item me-4">
                                    <a className="nav-link" href="/#why-us">
                                        Why Us
                                    </a>
                                </li>
                                <li className="nav-item me-4">
                                    <a className="nav-link" href="/#testimonial">
                                        Testimonial
                                    </a>
                                </li>
                                <li className="nav-item me-4 mb-1 mb-lg-0">
                                    <a className="nav-link" href="/#faq">
                                        FAQ
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-primary" type="button">
                                        Register
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;