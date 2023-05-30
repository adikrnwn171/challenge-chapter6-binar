import "./stylesheet.css";

function FAQ() {
    return (
        <section className="faq mb-5" id="faq">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="title">Frequently Asked Question</h2>
                        <p className="desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                    </div>
                    <div className="col-md-6">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="false"
                                        aria-controls="collapseOne"
                                    >
                                        Apa saja syarat yang dibutuhkan?
                                    </button>
                                </h2>
                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It
                                        is shown by default, until the collapse plugin adds the
                                        appropriate classes that we use to style each element. These
                                        classes control the overall appearance, as well as the
                                        showing and hiding via CSS transitions. You can modify any
                                        of this with custom CSS or overriding our default variables.
                                        It's also worth noting that just about any HTML can go
                                        within the <code>.accordion-body</code>, though the
                                        transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        Berapa hari minimal sewa mobil lepas kunci?
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <strong>This is the second item's accordion body.</strong>{" "}
                                        It is hidden by default, until the collapse plugin adds the
                                        appropriate classes that we use to style each element. These
                                        classes control the overall appearance, as well as the
                                        showing and hiding via CSS transitions. You can modify any
                                        of this with custom CSS or overriding our default variables.
                                        It's also worth noting that just about any HTML can go
                                        within the <code>.accordion-body</code>, though the
                                        transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        Berapa hari sebelumnya sabaiknya booking sewa mobil?
                                    </button>
                                </h2>
                                <div
                                    id="collapseThree"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It
                                        is hidden by default, until the collapse plugin adds the
                                        appropriate classes that we use to style each element. These
                                        classes control the overall appearance, as well as the
                                        showing and hiding via CSS transitions. You can modify any
                                        of this with custom CSS or overriding our default variables.
                                        It's also worth noting that just about any HTML can go
                                        within the <code>.accordion-body</code>, though the
                                        transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour"
                                        aria-expanded="false"
                                        aria-controls="collapseFour"
                                    >
                                        Apakah Ada biaya antar-jemput?
                                    </button>
                                </h2>
                                <div
                                    id="collapseFour"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It
                                        is hidden by default, until the collapse plugin adds the
                                        appropriate classes that we use to style each element. These
                                        classes control the overall appearance, as well as the
                                        showing and hiding via CSS transitions. You can modify any
                                        of this with custom CSS or overriding our default variables.
                                        It's also worth noting that just about any HTML can go
                                        within the <code>.accordion-body</code>, though the
                                        transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive"
                                        aria-expanded="false"
                                        aria-controls="collapseFive"
                                    >
                                        Bagaimana jika terjadi kecelakaan
                                    </button>
                                </h2>
                                <div
                                    id="collapseFive"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingFive"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It
                                        is hidden by default, until the collapse plugin adds the
                                        appropriate classes that we use to style each element. These
                                        classes control the overall appearance, as well as the
                                        showing and hiding via CSS transitions. You can modify any
                                        of this with custom CSS or overriding our default variables.
                                        It's also worth noting that just about any HTML can go
                                        within the <code>.accordion-body</code>, though the
                                        transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQ;