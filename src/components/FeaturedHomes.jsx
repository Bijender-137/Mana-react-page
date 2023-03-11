import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import roomImg from "../assets/img/png/room_img.png";

const FeaturedHomes = () => {
  return (
    <>
      <section className="bg-white position-relative overflow-hidden">
        <Container className="pt-5">
          <div className="text-center">
            <h2 className="ff_times fw-bold  fs_49 clr_green">
              Featured homes
            </h2>
            <p className="ff_open_sans fw-normal fs-18 clr_green">
              Browse our curated selection of wow-worthy listings – homes in the
              most desirable locations.
            </p>
          </div>
          <Row className="py-5 d-lg-none">
            <Col sm={12}>
              <div className="">
                <img
                  className="  feature_img w-100"
                  src={roomImg}
                  alt="roomImg"
                />
              </div>
            </Col>
            <Col sm={12} className="m-auto">
              <div className="mt-4 ">
                <h2 className="fs_18 ff_open_sans fw-normal clr_green">
                  CORONA DEL MAR, CA
                </h2>
                <p className="fs_35 ff_times fw-bold clr_green mt-3">
                  Ocean Boulevard
                </p>
                <p className="fs_18 ff_open_sans fw-normal clr_green mt-2">
                  $ 1,263,000 . 1/8 OWNERSHIP
                </p>
                <div className="d-flex align-items-center">
                  <p className="fs_18 ff_open_sans fw-normal clr_green mb-0">
                    4 Beds{" "}
                  </p>
                  <div className="ms-3">
                    <span className="line_90"></span>
                  </div>
                  <p className="fs_18 ff_open_sans fw-normal clr_green mb-0 ms-3">
                    4.5 Baths{" "}
                  </p>
                  <div className="ms-3">
                    <span className="line_90"></span>
                  </div>
                  <p className="fs_18 ff_open_sans fw-normal clr_green mb-0 ms-3  ">
                    3,143 sq ft{" "}
                  </p>
                </div>
                <p className="fs_18 ff_open_sans fw-normal clr_green w_600 mt-4">
                  Phasellus condimentum purus nec lacus finibus egestas. Donec a
                  ipsum massa. Pellentesque convallis id erat ut tempor. Integer
                  interdum purus orci, non luctus velit pulvinar quis
                </p>
                <div className="d-flex flex-column  mt-4">
                  <a
                    href="#"
                    className="ff_open_sans fw-semibold  fs_18 clr_green"
                  >
                    DETAILS
                  </a>
                  <span className="detail_underline"></span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Row className="py-5 d-none d-lg-flex">
          <Col sm={6}>
            <div className="">
              <img
                className="  feature_img w-100"
                src={roomImg}
                alt="roomImg"
              />
            </div>
          </Col>
          <Col sm={6} className="m-auto">
            <div>
              <h2 className="fs_18 ff_open_sans fw-normal clr_green">
                CORONA DEL MAR, CA
              </h2>
              <p className="fs_35 ff_times fw-bold clr_green mt-3">
                Ocean Boulevard
              </p>
              <p className="fs_18 ff_open_sans fw-normal clr_green mt-2">
                $ 1,263,000 . 1/8 OWNERSHIP
              </p>
              <div className="d-flex align-items-center">
                <p className="fs_18 ff_open_sans fw-normal clr_green mb-0">
                  4 Beds{" "}
                </p>
                <div className="ms-3">
                  <span className="line_90"></span>
                </div>
                <p className="fs_18 ff_open_sans fw-normal clr_green mb-0 ms-3">
                  4.5 Baths{" "}
                </p>
                <div className="ms-3">
                  <span className="line_90"></span>
                </div>
                <p className="fs_18 ff_open_sans fw-normal clr_green mb-0 ms-3  ">
                  3,143 sq ft{" "}
                </p>
              </div>
              <p className="fs_18 ff_open_sans fw-normal clr_green w_600 mt-4">
                Phasellus condimentum purus nec lacus finibus egestas. Donec a
                ipsum massa. Pellentesque convallis id erat ut tempor. Integer
                interdum purus orci, non luctus velit pulvinar quis
              </p>
              <div className="d-flex flex-column  mt-4">
                <a
                  href="#"
                  className="ff_open_sans fw-semibold  fs_18 clr_green"
                >
                  DETAILS
                </a>
                <span className="detail_underline"></span>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default FeaturedHomes;
