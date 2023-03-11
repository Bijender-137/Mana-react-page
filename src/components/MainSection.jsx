import React from "react";
import heartGroup from "../assets/img/svg/heart_group_img.svg";
import streamLine from "../assets/img/svg/stream_line_img.svg";
import flowerImg from "../assets/img/svg/flower_img.svg";
import { Container, Row,Col } from "react-bootstrap";
const MainSection = () => {
  return (
    <>
      <section className="py-sm-5" id="down_key">
        <Container className="py-5">
          <div className="text-center">
            <h2 className="ff_times fw-bold fs_49 clr_green ">
              Find your second home with Mana
            </h2>
            <p className="ff_open_sans fw-normal  fs_18 clr_green">
              We make it simple
            </p>
          </div>
          <Row className="py-5">
            <Col xs={12} md={6} lg={4}>
              <div className="d-flex align-items-baseline">
                <div>
                  <img className="img_width_50" src={heartGroup} alt="heartGroup" />
                </div>
                <div className="ms-3 ">
                  <p className="ff_times fw-bold fs_30 clr_green">Shop</p>
                  <p className="ff_open_sans  fw-normal  fs_18 clr_green">
                    Explore our collection of stunning single-family homes in
                    top second home destinations. We'll help you find the
                    perfect fit, and you decide how many shares you'd like to
                    own.
                  </p>
                </div>
              </div>
            </Col>
            <Col  xs={12} md={6} lg={4}>
              <div className="d-flex align-items-baseline">
                <div>
                  <img className="img_width_50" src={streamLine} alt="streamLine" />
                </div>
                <div className="ms-3 ">
                  <p className="ff_times fw-bold fs_30 clr_green">Own</p>
                  <p className="ff_open_sans  fw-normal  fs_18 clr_green">
                    We create a property LLC for each home, find and vet
                    co-owners, and handle all the sales details. At closing, the
                    co-owners enjoy 100% ownership of the home – Pacaso does not
                    retain any shares
                  </p>
                </div>
              </div>
            </Col>
            <Col  xs={12} md={12} lg={4}>
              <div className="d-flex align-items-baseline">
                <div>
                  <img className="img_width_50" src={flowerImg} alt="flowerImg" />
                </div>
                <div className="ms-3 ">
                  <p className="ff_times fw-bold fs_30 clr_green">Enjoy</p>
                  <p className="ff_open_sans  fw-normal  fs_18 clr_green">
                    We take care of furnishings, repairs, utilities and property
                    management – you just show up and relax. Scheduling is easy
                    and equitable with our app and SmartStay™ technology.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <div className="d-flex flex-column align-items-center">
            <a href="#" className="ff_open_sans fw-semibold  fs_18 clr_green">
              GET STARTED
            </a>
            <span className="green_line"></span>
          </div>
        </Container>
      </section>
    </>
  );
};

export default MainSection;
