import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import homeImg from "../assets/img/png/home_img.png";
import vidioImg2 from "../assets/img/png/vidio_img_2.png";
import flowerImg from "../assets/img/svg/flower_1.svg";
const Ownthejoy = () => {
  return (
    <>
      <section className="py-5 position-relative">
        <img className="position-absolute flower_1 d-none d-lg-block" src={flowerImg} alt="flowerImg" />
        <Container>
          <Row className="align-items-center py-5">
            <Col lg={7}>
              <div className="position-relative">
                <img className="w-100" src={homeImg} alt="" />
                <img
                  className="position-absolute vidio_set"
                  src={vidioImg2}
                  alt="vidioImg2"
                />
              </div>
            </Col>
            <Col lg={5}>
              <div className="mt-3 mt-lg-0">
                <h2 className="ff_times fw-bold fs_49 clr_green">
                  Own the joy
                </h2>
                <p className=" ff_open_sans fw-normal fs_18 clr_green mt-4">
                  Start enriching your life today, not "someday." We're here to
                  help you experience the joy of second home ownership. With
                  Mana, you own a spectacular second home for 1/8 of the cost,
                  while avoiding the hassles of traditional ownership.
                </p>
                <div className="d-flex flex-column mt-4">
                  <a
                    href="#"
                    className="ff_open_sans fw-semibold  fs_18 clr_green"
                  >
                    GET STARTED
                  </a>
                  <span className="green_line"></span>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="py-5 align-items-center flex-column-reverse flex-lg-row">
            <Col lg={5}>
              <div className="mt-3 mt-lg-0">
                <h2 className="ff_times fw-bold fs_49 clr_green">
                  Forget timeshares
                </h2>
                <p className=" ff_open_sans fw-normal fs_18 clr_green mt-4">
                  With Mana, you own a home, not just a block of time. You can
                  book stays throughout the year, not annually. And resale? It's
                  fast and streamlined, and you set the price.
                </p>
                <div className="d-flex flex-column mt-4">
                  <a
                    href="#"
                    className="ff_open_sans fw-semibold  fs_18 clr_green"
                  >
                    GET STARTED
                  </a>
                  <span className="green_line"></span>
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <div className="overflow_scroll">
                <table className="mx-auto table_width">
                  <tr>
                    <th
                      colSpan={2}
                      className="text-center bg_clr_green text-white px-4 py-3 ff_open_sans fw-normal fs_18"
                    >
                      MANA HOME
                    </th>
                    <th className="bg_clr_lite_green px-4 py-3 text-white ff_open_sans fw-normal fs_18">
                      RESORT TIMESHARE
                    </th>
                  </tr>
                  <tr className="bg_lite_gray">
                    <th className="ff_open_sans fw-normal fs_18 clr_green">
                      PROPERTY TYPE
                    </th>
                    <th className="ff_open_sans fw-normal fs_18 clr_green">
                      Single-family residence
                    </th>
                    <th className="ff_open_sans fw-normal fs_18 clr_green">
                      Hotel/Condo
                    </th>
                  </tr>
                  <tr className="bg_gray">
                    <th className="ff_open_sans fw-normal fs_18 clr_green">
                      TRUE OWNERSHIP
                    </th>
                    <th className="ff_open_sans fw-normal fs_18 clr_green">
                      Yes, real property
                    </th>
                    <th className="ff_open_sans fw-normal fs_18 clr_green">
                      No, right-to-use time
                    </th>
                  </tr>
                  <tr className="bg_lite_gray">
                    <th className="ff_open_sans fw-normal fs_18 clr_green">
                      USAGE
                    </th>
                    <th className="ff_open_sans fw-normal fs_18 clr_green">
                      Single-family residence
                    </th>
                    <th className="ff_open_sans fw-normal fs_18 clr_green">
                      Fixed week(s)
                    </th>
                  </tr>
                  <tr className="bg_gray">
                    <th className="ff_open_sans fw-normal fs_18 clr_green">
                      RESALE APPROACH
                    </th>
                    <th className="ff_open_sans fw-normal fs_18 clr_green">
                      Market pricing; sell on your terms
                    </th>
                    <th className="ff_open_sans fw-normal fs_18 clr_green">
                      Set pricing; sell with resort
                    </th>
                  </tr>
                </table>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Ownthejoy;
