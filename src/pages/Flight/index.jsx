/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import style from "./flight.module.css";
import assets from "../../assets";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
// import Typography from "@material-ui/core/Typography";
// import Slider from "@material-ui/core/Slider";

const Flight = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [hargaAtas, setHargaAtas] = useState(200000000000);
  const [hargaBawah, setHargaBawah] = useState(1);
  const [deptimeAwal, setDeptimeAwal] = useState("00:00");
  const [deptimeAkhir, setDeptimeAkhir] = useState("23:59");
  const [price, setPrice] = useState([2, 10]);

  console.log(process.env);

  const getFlightData = async (url) => {
    let token = localStorage.getItem("token");
    console.log("My token", token);
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(res.data.data);
      console.log(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deptime0006 = () => {
    setDeptimeAwal("00:00");
    setDeptimeAkhir("06:00");
  };

  const deptime0612 = () => {
    setDeptimeAwal("06:00");
    setDeptimeAkhir("12:00");
  };

  const deptime1218 = () => {
    setDeptimeAwal("12:00");
    setDeptimeAkhir("18:00");
  };
  const deptime1824 = () => {
    setDeptimeAwal("18:00");
    setDeptimeAkhir("23:59");
  };

  const price1 = () => {
    setHargaAtas(100);
    setHargaBawah(1);
  };

  const price2 = () => {
    setHargaAtas(200);
    setHargaBawah(100);
  };

  const price3 = () => {
    setHargaAtas(300);
    setHargaBawah(200);
  };

  const price4 = () => {
    setHargaAtas(400);
    setHargaBawah(300);
  };

  useEffect(() => {
    let url = `${process.env.REACT_APP_MY_API_KEY}/stock-ticket/getstockticket`;
    if (limit !== "5") {
      url = `${url}?limit=${limit}`;
    } else {
      url = `${url}&limit=5`;
    }
    if (page !== "1") {
      url = `${url}&page=${page}`;
    }
    if (search !== "") {
      url = `${url}&search=${search}`;
    }
    if (hargaAtas !== 200000000000) {
      url = `${url}&hargaAtas=${hargaAtas}`;
    }
    if (hargaBawah !== 1) {
      url = `${url}&hargaBawah=${hargaBawah}`;
    }
    if (deptimeAwal !== "00:00") {
      url = `${url}&deptimeAwal=${deptimeAwal}`;
    }
    if (deptimeAkhir !== "23:59") {
      url = `${url}&deptimeAkhir=${deptimeAkhir}`;
    }
    getFlightData(url);
  }, [search, limit, page, deptimeAwal, deptimeAkhir, hargaAtas, hargaBawah]);

  useEffect(() => {
    getFlightData();
  }, []);

  const resetFilter = () => {
    setSearch("");
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  const rangeSelector = (event, newValue) => {
    setPrice(newValue);
    console.log(newValue);
  };

  return (
    <div className={style.customContainer}>
      <div className={style.customNav}>
        <div className={style.navLogo}>
          <img src={assets.flight} alt="" />
          <p>Angkasa</p>
        </div>
        <div className={style.navSearch}>
          <input
            type="search"
            id="search"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            required
          />
        </div>
        <div className={style.navRoute}>
          <div>Find ticket</div>
          <Link to="/mybooking" style={{ textDecoration: "none" }}>
            <div>My booking</div>
          </Link>
        </div>
        <div className={style.navProfile}>
          <div>
            <img src={assets.message} alt="" />
          </div>
          <div>
            <img src={assets.notification} alt="" />
          </div>
          <Link to="/profile">
            <div>
              <img src={assets.navprof} alt="" className={style.navProf} />
            </div>
          </Link>
        </div>
      </div>
      <div className={style.basisHead}>
        <img src={assets.fdhead} alt="" className={style.basisHeaded} />
      </div>
      <div className={style.basisHead2}>
        <div className={style.basisHeadLeft}>
          <img
            src={assets.flightwhite}
            alt=""
            className={style.whFlightWhite}
          />
        </div>
        <div className={style.basisHeadCenter}>
          <div className={style.bhcTop}>
            <div className={style.bhcTopLeft}>
              <div className={style.bhcFrom}>From</div>
              <div className={style.bhcOrigin}>Medan (IDN)</div>
            </div>
            <div className={style.bhcTopCenter}>
              <img src={assets.rlarrow} alt="" className={style.bhcRlArrow} />
            </div>
            <div className={style.bhcTopRight}>
              <div className={style.bhcFrom}>From</div>
              <div className={style.bhcOrigin}>Medan (IDN)</div>
            </div>
          </div>
          <div className={style.bhcBottom}>
            <div className={style.bhcInfo}>Day Date</div>
            <div className={style.bhcInfoSpace}>
              <img src={assets.infospace} alt="" />
            </div>
            <div className={style.bhcInfo}>Passengers</div>
            <div className={style.bhcInfoSpace}>
              <img src={assets.infospace} alt="" />
            </div>
            <div className={style.bhcInfo}>Type flight</div>
          </div>
        </div>
        <div className={style.basisHeadRight}>
          <div className={style.bhrButton}>
            <p>Change Search</p>
          </div>
        </div>
      </div>
      <div className={style.customBasis}>
        <div className={style.basisLeft}>
          <div className={style.blFilter}>
            <div className={style.blfHead}>
              <p className={style.blfhFilter}>Filter</p>
              <button onClick={resetFilter} className={style.blfhReset}>
                Reset
              </button>
            </div>
            <div className={style.blfBody}>
              <div className={style.blfBodyValue}>
                <div className="accordion" id="transit">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="header-transit">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#data-transit"
                        aria-expanded="true"
                        aria-controls="data-transit"
                      >
                        <strong>Transit</strong>
                      </button>
                    </h2>
                    <div
                      id="data-transit"
                      className="accordion-collapse collapse show"
                      aria-labelledby="header-transit"
                      data-bs-parent="#transit"
                    >
                      <div className="accordion-body">
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <span>Direct</span>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="filter-checkbox"
                          />
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <span>Transit</span>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="filter-checkbox"
                          />
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <span>Transit 2+</span>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="filter-checkbox"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion" id="facilities">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="header-facilities">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#data-facilities"
                        aria-expanded="true"
                        aria-controls="data-facilities"
                      >
                        <strong>Facilities</strong>
                      </button>
                    </h2>
                    <div
                      id="data-facilities"
                      className="accordion-collapse collapse show"
                      aria-labelledby="header-facilities"
                      data-bs-parent="#facilities"
                    >
                      <div className="accordion-body">
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <span>Luggage</span>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="filter-checkbox"
                          />
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <span>In-Flight Meal</span>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="filter-checkbox"
                          />
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <span>Wi-Fi</span>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="filter-checkbox"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion" id="departure-time">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="header-departure-time">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#data-departure-time"
                        aria-expanded="true"
                        aria-controls="data-departure-time"
                      >
                        <strong>Departure Time</strong>
                      </button>
                    </h2>
                    <div
                      id="data-departure-time"
                      className="accordion-collapse collapse show"
                      aria-labelledby="header-departure-time"
                      data-bs-parent="#departure-time"
                    >
                      <div className="accordion-body">
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <label for="00:00-06:00">00:00 - 06:00</label>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="filter-departure"
                            id="00:00-06:00"
                            onClick={deptime0006}
                          />
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <label for="06:00-12:00">06:00 - 12:00</label>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="filter-departure"
                            id="06:00-12:00"
                            onClick={deptime0612}
                          />
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <label for="12:00-18:00">12:00 - 18:00</label>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="filter-departure"
                            id="12:00-18:00"
                            onClick={deptime1218}
                          />
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <label for="18:00-23:59">18:00 - 23:59</label>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="filter-departure"
                            id="18:00-23:59"
                            onClick={deptime1824}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion" id="time-arrived">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="header-time-arrived">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#data-time-arrived"
                        aria-expanded="true"
                        aria-controls="data-time-arrived"
                      >
                        <strong>Time Arrived</strong>
                      </button>
                    </h2>
                    <div
                      id="data-time-arrived"
                      className="accordion-collapse collapse show"
                      aria-labelledby="header-time-arrived"
                      data-bs-parent="#time-arrived"
                    >
                      <div className="accordion-body">
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <span>00:00 - 06:00</span>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="filter-checkbox"
                          />
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <span>06:00 - 12:00</span>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="filter-checkbox"
                          />
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <span>12:00 - 18:00</span>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="filter-checkbox"
                          />
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <span>18:00 - 24:00</span>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="filter-checkbox"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion" id="airlines">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="header-airlines">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#data-airlines"
                        aria-expanded="true"
                        aria-controls="data-airlines"
                      >
                        <strong>Airlines</strong>
                      </button>
                    </h2>
                    <div
                      id="data-airlines"
                      className="accordion-collapse collapse show"
                      aria-labelledby="header-airlines"
                      data-bs-parent="#airlines"
                    >
                      <div className="accordion-body">
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <label for="garuda">Garuda Indonesia</label>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="airlines"
                            id="garuda"
                            value="Garuda"
                            onChange={(e) => setSearch(e.target.value)}
                          />
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <label for="airasia">Air Asia</label>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="airlines"
                            id="airasia"
                            value="Air Asia"
                            onChange={(e) => setSearch(e.target.value)}
                          />
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <label for="lionair">Lion Air</label>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="airlines"
                            id="lionair"
                            value="Lion Air"
                            onChange={(e) => setSearch(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion" id="filter-price">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="header-filter-price">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#data-filter-price"
                        aria-expanded="true"
                        aria-controls="data-filter-price"
                      >
                        <strong>By Price</strong>
                      </button>
                    </h2>
                    <div
                      id="data-filter-price"
                      className="accordion-collapse collapse show"
                      aria-labelledby="header-filter-price"
                      data-bs-parent="#filter-price"
                    >
                      <div className="accordion-body">
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <label for="price1">$ 1 - $ 100</label>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="filter-price"
                            id="price1"
                            onClick={price1}
                          />
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <label for="price2">$ 100 - $ 200</label>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="filter-price"
                            id="price2"
                            onClick={price2}
                          />
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <label for="price3">$ 200 - $ 300</label>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="filter-price"
                            id="price3"
                            onClick={price3}
                          />
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <label for="price4">$ 300 - $ 400</label>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="filter-price"
                            id="price4"
                            onClick={price4}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion" id="price">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="header-price">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#data-price"
                        aria-expanded="true"
                        aria-controls="data-price"
                      >
                        <strong>Price</strong>
                      </button>
                    </h2>
                    <div
                      id="data-price"
                      className="accordion-collapse collapse show"
                      aria-labelledby="header-price"
                      data-bs-parent="#price"
                    >
                      <div className="accordion-body">
                        <div className="d-flex flex-column justify-content-between mt-2">
                          {/* <Typography id="range-slider" gutterBottom>
                            Select Price Range:
                          </Typography> */}
                          {/* <Slider
                            value={price}
                            onChange={rangeSelector}
                            valueLabelDisplay="auto"
                          />
                          Your range {price[0]} and {price[1]} */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.basisRight}>
          {data ? (
            data.map((item) => (
              <div className={style.brFlight}>
                <div className={style.brSelect}>
                  <div className={style.brfHead}>
                    <p className={style.brfhSelect}>Select Ticket</p>
                    <div className="d-flex flex-row gap-2">
                      <button className={style.brfhSortby}>Sort by</button>
                      <img
                        src={assets.sortby}
                        alt=""
                        className={style.whSortby}
                      />
                    </div>
                  </div>
                  <div className={style.brfBody}>
                    <div className={style.brfBodyValue}>
                      <div className="d-flex flex-column gap-3">
                        <div className={style.basisPhoto}>
                          <div>
                            <img
                              src={item.photo}
                              className={style.photo}
                              alt=""
                            />
                          </div>
                          <div className="mt-3">
                            <p className={style.flightName}>{item.airlines}</p>
                          </div>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                          <div className="d-flex flex-row gap-4">
                            <div className="d-flex flex-column">
                              <p className={style.codeFlight}>{item.origin}</p>
                              <p className={style.departureTime}>
                                {item.departure}
                              </p>
                            </div>
                            <div>
                              <img
                                src={assets.airlinespace}
                                alt=""
                                className="mt-2"
                              />
                            </div>
                            <div className="d-flex flex-column">
                              <p className={style.codeFlight}>
                                {item.destination}
                              </p>
                              <p className={style.arrivalTime}>
                                {item.arrived}
                              </p>
                            </div>
                          </div>
                          <div className="mt-2">
                            <p className={style.spaceTime}>
                              3 hours 11 minutes
                            </p>
                          </div>
                          <div className="d-flex flex-row gap-3 mt-2">
                            <div>
                              <img src={assets.luggage} alt="" />
                            </div>
                            <div>
                              <img src={assets.lunch} alt="" />
                            </div>
                            <div>
                              <img src={assets.wifi} alt="" />
                            </div>
                          </div>
                          <div className="d-flex flex-row gap-0 mt-2">
                            <div>
                              <p className={style.flightPrice}>
                                ${" "}
                                {String(item.price)
                                  .split("")
                                  .reverse()
                                  .join("")
                                  .match(/.{1,3}/g)
                                  .join(".")
                                  .split("")
                                  .reverse()
                                  .join("")}
                              </p>
                            </div>
                            <div>
                              <p className={style.flightPax}>/pax</p>
                            </div>
                          </div>
                          <div>
                            <button
                              className={style.btnFlight}
                              onClick={() =>
                                navigate(`/flight-detail/${item.id}`)
                              }
                            >
                              Select
                            </button>
                          </div>
                        </div>
                        <div className="d-flex flex-row gap-2">
                          <div>
                            <p className={style.viewDetail}>View Details</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="d-flex flex-auto justify-content-center">
              Loading ges... jangan brutal. Kasian server konsumsi energi
              listrik hasil batu bara. #SaveEarth #GoGreen
            </div>
          )}
          <div className="d-flex flex-row gap-5 mt-5 mb-5">
            <div>
              <button disabled={page === 1} onClick={previousPage}>
                Prev
              </button>
            </div>
            <div>
              <button disabled={data <= 0} onClick={nextPage}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Flight;
