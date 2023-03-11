import React from "react";
import { Container } from "react-bootstrap";
import downArrow from "../assets/img/svg/down_arrow.svg";
import vidioPlayer from "../assets/img/png/vidio_player.png";

const HeroSection = () => {
  return (
    <>
      <section className="py-5">
        <Container className="py-sm-5">
          <div className=" py-md-5 d-flex flex-column align-items-center">
            <h1 className="ff_times fw-bold  fs_58 text-white pt-5 text-center">
              The modern way to buy and own a second home
            </h1>
            <a
              href="#"
              className="btn_view ff_open_sans fs_20 mt-5 text-white transition_time btn rounded-0"
            >
              VIEW LISTINGS
            </a>{" "}
          </div>
          <div className="d-flex justify-content-end pt-5">
            <a href="#">
              {" "}
              <img src={vidioPlayer} alt="vidioPlayer" />
            </a>
          </div>
          <div className="pt-5 d-flex justify-content-center align-items-center">
            <a href="#down_key">
              <img src={downArrow} alt="downArrow" />
            </a>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;
