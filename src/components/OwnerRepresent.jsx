import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import elips1 from "../assets/img/png/elips_1.png";
import elips2 from "../assets/img/png/elips_2.png";
import elips_3 from "../assets/img/png/elips_3.png";
import flowerImg2 from "../assets/img/svg/flower_2.svg";
import leftArrow from "../assets/img/svg/left_arrow.svg";
import rightArrow from "../assets/img/svg/right_arrow.svg";

const OwnerRepresent = () => {
  return (
    <>
      <section className="py-5 bg-white position-relative">
        <img
          className="position-absolute flower_2 "
          src={flowerImg2}
          alt="flowerImg2"
        />
        <Container className="position-relative">
          <img
            className="position-absolute left_arrow d-none d-lg-block"
            src={leftArrow}
            alt="leftArrow"
          />
          <img
            className="position-absolute right_arrow d-none d-lg-block"
            src={rightArrow}
            alt="rightArrow"
          />
          <div className=" text-center">
            <h2 className="ff_times fw-bold fs_49 clr_green">
              Owner perspectives
            </h2>{" "}
          </div>
          <Row className="py-5">
            <Col xs={12} sm={6} lg={4}>
              <div className="box_shadow h-100">
                <div className="d-flex align-items-center">
                  <div>
                    <img src={elips1} alt="elips1" />
                  </div>
                  <div className="ms-3">
                    <h2 className="ff_open_sans fw-semibold fs_18 clr_green ">
                      John Doe
                    </h2>
                    <p className="ff_open_sans fw-normal fs_16 clr_green mb-0">
                      Mauris pretium,USA{" "}
                    </p>
                  </div>
                </div>
                <p className="ff_open_sans fw-normal fs_18 clr_green mt-3">
                  “Integer odio est, efficitur nec nibh quis, euismod ultricies
                  diam. Quisque accumsan libero vitae massa consequat consequat.
                  Sed eu tincidunt lacus, in”{" "}
                </p>
              </div>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <div className="box_shadow h-100 mt-4 mt-sm-0">
                <div className="d-flex align-items-center">
                  <div>
                    <img src={elips2} alt="elips1" />
                  </div>
                  <div className="ms-3">
                    <h2 className="ff_open_sans fw-semibold fs_18 clr_green ">
                      John Doe
                    </h2>
                    <p className="ff_open_sans fw-normal fs_16 clr_green mb-0">
                      Mauris pretium,USA{" "}
                    </p>
                  </div>
                </div>
                <p className="ff_open_sans fw-normal fs_18 clr_green mt-3">
                  “Integer odio est, efficitur nec nibh quis, euismod ultricies
                  diam. Quisque accumsan libero vitae massa consequat consequat.
                  Sed eu tincidunt lacus, in”{" "}
                </p>
              </div>
            </Col>
            <Col xs={12} sm={12} lg={4} className=" mt-5 mt-sm-4 mt-lg-0">
              <div className="box_shadow h-100 ">
                <div className="d-flex align-items-center">
                  <div>
                    <img src={elips_3} alt="elips1" />
                  </div>
                  <div className="ms-3">
                    <h2 className="ff_open_sans fw-semibold fs_18 clr_green ">
                      John Doe
                    </h2>
                    <p className="ff_open_sans fw-normal fs_16 clr_green mb-0">
                      Mauris pretium,USA{" "}
                    </p>
                  </div>
                </div>
                <p className="ff_open_sans fw-normal fs_18 clr_green mt-3">
                  “Integer odio est, efficitur nec nibh quis, euismod ultricies
                  diam. Quisque accumsan libero vitae massa consequat consequat.
                  Sed eu tincidunt lacus, in”{" "}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default OwnerRepresent;
