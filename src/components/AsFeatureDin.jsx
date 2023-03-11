import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import InmanImg from "../assets/img/svg/Inman_img.svg";
import RealDeal from "../assets/img/svg/realdeal_img.svg";
import CnbcImg from "../assets/img/svg/CNBC_img.svg";
import GroupingImg from "../assets/img/svg/grouping_img.svg";
import FortuneImg from "../assets/img/svg/Fortune_img.svg";
import GeekwireImg from "../assets/img/svg/Geekwire_img.svg";
const AsFeatureDin = () => {
  return (
    <>
      <section className="bg-white py-5">
        <Container>
          <div className="text-center ">
            <h2 className="fs_49 ff_times fw-bold clr_green">
              As featured in:
            </h2>
          </div>
          <Row className="py-4 py-lg-5 justify-content-center ">
            <Col xm={12} sm={6} md={4} lg={3} xl={2} className="text-center ">
              <img className="w-100" src={InmanImg} alt="InmanImg" />
            </Col>
            <Col xm={12} sm={6} md={4} lg={3} xl={2} className="text-center mt-3 mt-sm-0">
              <img className="w-100" src={RealDeal} alt="InmanImg" />
            </Col>
            <Col xm={12} sm={6} md={4} lg={3} xl={2} className="text-center mt-3 mt-md-0">
              <img className="w-100" src={CnbcImg} alt="InmanImg" />
            </Col>
            <Col xm={12} sm={6} md={4} lg={3} xl={2} className="text-center mt-3 mt-lg-0">
              <img className="w-100" src={GroupingImg} alt="InmanImg" />
            </Col>
            <Col xm={12} sm={6} md={4} lg={3} xl={2} className="text-center mt-3 mt-xl-0">
              <img className="w-100" src={FortuneImg} alt="InmanImg" />
            </Col>
            <Col xm={12} sm={6} md={4} lg={3} xl={2} className="text-center mt-3 mt-xl-0">
              <img className="w-100" src={GeekwireImg} alt="InmanImg" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AsFeatureDin;
