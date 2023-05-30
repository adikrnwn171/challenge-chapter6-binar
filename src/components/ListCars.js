import "./stylesheet.css";

function ListCars({ cars }) {
    return (
        <section class="car-list pb-5">
            <div class="container">
                <div class="row" id="cars-container">
                    {cars.map((car) => (
                        <div class="col-lg-4 col-sm-12 my-3">
                            <div className="card data-card" style={{ height: "586px" }}>
                                <div className="card-body d-flex flex-column">
                                    <img
                                        src={car.image}
                                        className="card-img-top"
                                        alt={car.manufacture}
                                        style={{ height: "222px", objectFit: "cover" }}
                                    />
                                    <p className="card-text" style={{ fontWeight: 400 }}>
                                        {car.manufacture} / {car.model}
                                    </p>
                                    <p className="card-text fw-bold" style={{ fontSize: "16px" }}>
                                        Rp {car.rentPerDay} / hari
                                    </p>
                                    <p className="card-text">{car.description}</p>
                                    <p className="card-text">
                                        <img
                                            src="assets/icon/users.svg"
                                            alt="users"
                                            style={{
                                                width: "20px",
                                                height: "20px",
                                                marginRight: "16px",
                                            }}
                                        />
                                        {car.capacity} Orang
                                    </p>
                                    <p className="card-text">
                                        <img
                                            src="assets/icon/settings.svg"
                                            alt="settings"
                                            style={{
                                                width: "20px",
                                                height: "20px",
                                                marginRight: "16px",
                                            }}
                                        />
                                        {car.transmission}
                                    </p>
                                    <p className="card-text">
                                        <img
                                            src="assets/icon/calendar.svg"
                                            alt="calendar"
                                            style={{
                                                width: "20px",
                                                height: "20px",
                                                marginRight: "16px",
                                            }}
                                        />
                                        Tahun {car.year}
                                    </p>
                                    <div className="mt-auto">
                                        <a href={e => e.preventDefault()} className="d-grid btn btn-primary">
                                            Pilih Mobil
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ListCars;