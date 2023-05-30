import "./stylesheet.css";

function OurService() {
    return (
        <section className="our-service" id="our-service">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4 ms-md-5 me-md-5 mb-5">
                        <img
                            src="assets/img_service.png"
                            alt="Our Service"
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-md-6">
                        <h2>Best Car Rental for any kind of trip in Semarang!</h2>
                        <p className="desc" style={{ textAlign: "justify" }}>
                            Sewa mobil di Semarang bersama Binar Car Rental jaminan harga
                            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                            wedding, meeting, dll.
                        </p>
                        <p className="checklist">
                            <img
                                src="assets/icon/Group 53.svg"
                                alt="checklist"
                                style={{ width: "24px", height: "24px", marginRight: "16px" }}
                            />
                            Sewa Mobil Dengan Supir di Semarang 12 Jam
                        </p>
                        <p className="checklist">
                            <img
                                src="assets/icon/Group 53.svg"
                                alt="checklist"
                                style={{ width: "24px", height: "24px", marginRight: "16px" }}
                            />
                            Sewa Mobil Lepas Kunci di Semarang 24 Jam
                        </p>
                        <p className="checklist">
                            <img
                                src="assets/icon/Group 53.svg"
                                alt="checklist"
                                style={{ width: "24px", height: "24px", marginRight: "16px" }}
                            />
                            Gratis Antar - Jemput Mobil di Bandara
                        </p>
                        <p className="checklist">
                            <img
                                src="assets/icon/Group 53.svg"
                                alt="checklist"
                                style={{ width: "24px", height: "24px", marginRight: "16px" }}
                            />
                            Layanan Airport Transfer / Drop In Out
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurService;