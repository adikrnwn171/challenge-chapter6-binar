import "./stylesheet.css";
import { useState } from 'react';


const styles = `
  .form-input {
    position: relative;
    bottom: 50px;
    border: none;
    box-shadow: var(--shadow-high);
  }

  label {
    size: 12px;
    font-weight: 300;
    font-family: 'Rubik', sans-serif;
  }

  .form-select {
    font-family: Helvetica, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #3C3C3C;
  }

  .form-control {
    font-family: Helvetica, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #3C3C3C;
  }

  .form-label {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;
    color: #3C3C3C;
  }

  .data-card {
    border: none;
    box-shadow: var(--shadow-low);
  }

  .input-group-text {
    background-color: white;
  }

  input[type="number"]{
    border-right: none;
  }

  @media (max-width: 992px) {
    .col-control {
        flex-basis: auto !important;
    }
    .form-input {
        display: block;
        bottom: auto;
        margin-top: 50px;
    }
    #load-button{
        width: 100%;
    }
  }
`;

function FormSection({ handleSearch, onSearchClick }) {

    const [typeDriver, setTypeDriver] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [passenger, setPassenger] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Panggil handleSearch dengan nilai input
        handleSearch(typeDriver, date, time, passenger);
        onSearchClick()
    };

    return (
        <>
            <style>{styles}</style>
            <section className="rents">
                <div className="container px-md-3">
                    <div className="card mb-3 form-input">
                        <form
                            action="#"
                            className="d-grid form"
                            method="get"
                            onSubmit={handleSubmit}
                        >
                            <div className="row gx-0">
                                <div className="col-lg-3">
                                    <div className="card-body">
                                        <label htmlFor="type-driver" className="form-label">
                                            Tipe Driver
                                        </label>
                                        <select
                                            className="form-select"
                                            aria-label="Default select example"
                                            id="type-driver"
                                            onChange={(e) => setTypeDriver(e.target.value === 'sopir')}
                                            required
                                        >
                                            <option value="" disabled selected hidden>
                                                Pilih Tipe Driver
                                            </option>
                                            <option value="sopir">Dengan Sopir</option>
                                            <option value="non-sopir">Tanpa Sopir (Lepas Kunci)</option>
                                        </select>
                                    </div>
                                </div>

                                <div
                                    className="col-lg-3 col-control"
                                    style={{ flexBasis: "calc(20%)" }}
                                >
                                    <div className="card-body ps-lg-0">
                                        <label htmlFor="date" className="form-label">
                                            Tanggal
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="date"
                                            onChange={(e) => setDate(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div
                                    className="col-lg-3 col-control"
                                    style={{ flexBasis: "calc(20%)" }}
                                >
                                    <div className="card-body ps-lg-0">
                                        <label htmlFor="time" className="form-label">
                                            Waktu Jemput/Ambil
                                        </label>
                                        <input
                                            type="time"
                                            className="form-control"
                                            id="time"
                                            onChange={(e) => setTime(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-3">
                                    <div className="card-body ps-lg-0">
                                        <label htmlFor="passenger" className="form-label">
                                            Jumlah Penumpang(optional)
                                        </label>
                                        <div className="input-group">
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="passenger"
                                                onChange={(e) => setPassenger(e.target.value)}
                                            />
                                            <span className="input-group-text">
                                                <img
                                                    src="assets/icon/users.svg"
                                                    alt="users"
                                                    style={{ width: "20px", height: "20px" }}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="col-lg-2 col-control d-flex align-items-end"
                                    style={{ flexBasis: "calc(10% - 10px)" }}
                                >
                                    <div className="card-body ps-lg-0">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            id="load-btn"
                                            style={{ fontSize: "12px" }}
                                        >
                                            Cari mobil
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FormSection;