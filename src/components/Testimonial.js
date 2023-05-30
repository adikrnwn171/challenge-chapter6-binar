import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./stylesheet.css";

const Testimonial = () => {
    const styles = `
  .desc {
    margin-bottom: 40px;
  }

  .star {
      margin-bottom: 8px;
  }

  .card {
      border: 0px;
      background-color: #F1F3FF;
  }
`;

    return (
        <>
            <style>{styles}</style>
            <h2 id="testimonial" className="text-center fw-bold pt-5 mb-3">Testimonial</h2>
            <p className="text-center desc mb-5">
                Berbagai review positif dari para pelanggan kami
            </p>
            <OwlCarousel
                className="owl-theme container-fluid"
                loop
                items={2.5}
                center={true}
                margin={10}
                nav={true}
                responsive={{
                    // breakpoint from 0 up
                    0: {
                        items: 1
                    },
                    // breakpoint from 480 up
                    480: {
                        items: 1
                    },
                    // breakpoint from 768 up
                    768: {

                        items: 2,
                        center: false
                        // breakpoint from 992 up
                    },
                    992: {
                        items: 2.5
                    }
                }
                }
            >
                {[1, 2, 3, 4].map((item) => (
                    <div className="item" key={item}>
                        <div className="card ms-2 me-2 ps-0 pe-3 pt-4 pb-4 card-custom">
                            <div className="row">
                                <div className="col-md-4 d-flex">
                                    <img
                                        src="assets/img_photo.png"
                                        className="img-fluid rounded-start align-self-center m-auto"
                                        alt="person"
                                        style={{ width: "80px", height: "80px" }}
                                    />
                                </div>
                                <div className="col-md-8 pe-5 ps-5 pt-4 pe-md-2 ps-md-0 pt-md-0">
                                    <div className="star d-flex mb-4 mb-md-2 justify-content-center justify-content-md-start">
                                        {[1, 2, 3, 4, 5].map((index) => (
                                            <img
                                                key={index}
                                                src="assets/icon/Star 1.svg"
                                                alt="star"
                                                style={{ width: "16px", height: "16px" }}
                                            />
                                        ))}
                                    </div>
                                    <p
                                        className="card-text"
                                        style={{
                                            fontWeight: 400,
                                            fontSize: "12px",
                                            lineHeight: "20px",
                                        }}
                                    >
                                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod”
                                    </p>
                                    <p
                                        className="card-name"
                                        style={{
                                            fontWeight: 700,
                                            fontSize: "12px",
                                            lineHeight: "20px",
                                        }}
                                    >
                                        John Dee 32, Bromo
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </OwlCarousel>
            ;
        </>
    );
};

export default Testimonial;