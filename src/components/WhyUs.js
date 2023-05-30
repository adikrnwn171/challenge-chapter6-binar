import "./stylesheet.css";

const WhyUs = () => {
    return (
        <section className="why-use " id="why-us">
            <div className="container mb-5">
                <h2>Why Us?</h2>
                <p className="title">Mengapa Harus Memilih Binar Car Rental</p>
                <div className="row row-cols-1 row-cols-md-4">
                    <div className="col mb-3 mb-md-0">
                        <div className="card p-2" style={{ height: "100%" }}>
                            <div className="card-body">
                                <img
                                    src="assets/icon/icon_complete.svg"
                                    className="card-img-top"
                                    alt="complete"
                                    style={{ width: "32px", height: "32px" }}
                                />
                                <h5 className="card-title">Mobil Lengkap</h5>
                                <p className="card-text">
                                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                                    terawat
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-3 mb-md-0">
                        <div className="card p-2" style={{ height: "100%" }}>
                            <div className="card-body">
                                <img
                                    src="assets/icon/icon_price.svg"
                                    className="card-img-top"
                                    alt="price"
                                    style={{ width: "32px", height: "32px" }}
                                />
                                <h5 className="card-title">Harga Murah</h5>
                                <p className="card-text">
                                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                                    rental mobil lain
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-3 mb-md-0">
                        <div className="card p-2" style={{ height: "100%" }}>
                            <div className="card-body">
                                <img
                                    src="assets/icon/icon_24hrs.svg"
                                    className="card-img-top"
                                    alt="24jam"
                                    style={{ width: "32px", height: "32px" }}
                                />
                                <h5 className="card-title">Layanan 24 Jam</h5>
                                <p className="card-text">
                                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                                    tersedia di akhir minggu
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-3 mb-md-0">
                        <div className="card p-2" style={{ height: "100%" }}>
                            <div className="card-body">
                                <img
                                    src="assets/icon/icon_professional.svg"
                                    className="card-img-top"
                                    alt="sopir"
                                    style={{ width: "32px", height: "32px" }}
                                />
                                <h5 className="card-title">Sopir Profesional</h5>
                                <p className="card-text">
                                    Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                                    tepat waktu
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;