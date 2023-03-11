import React from "react";
import Form from "react-bootstrap/Form";
import flowerImg3 from "../assets/img/svg/flower_3.svg";
const RadioSection = () => {
  return (
    <>
      <section className="position-relative">
        <img
          className="position-absolute flower_3"
          src={flowerImg3}
          alt="flowerImg3"
        />
        <div className="custom_container py-5 ">
          <div className="text-center">
            <h2 className="fw-bold fs_49 ff_times clr_green">Don't miss out</h2>
            <p className="ff_open_sans fw-normal fs_18 clr_green">
              The best homes sell fast. See the latest listings, inspiring
              second homes and buying tips.
            </p>
          </div>
          <input
            type="text"
            className="border-top-0 border-end-0 border-start-0 bg-transparent w-100 px-2 input_outline ff_open_sans fw-semibold fs_18 clr_green mt-3 mt-sm-5"
            placeholder="ENTER  EMAIL"
          />
          <div className="mt-5">
            <p className="ff_open_sans fw-normal fs_18 clr_green">
              Select one of the following:
            </p>

            <Form>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    className=" ff_open_sans fw-normal fs_18 clr_green"
                    inline
                    label="I am a buyer"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    className=" ff_open_sans fw-normal fs_18 clr_green mx-sm-5"
                    inline
                    label="I am a seller"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    className=" ff_open_sans fw-normal fs_18 clr_green mt-3 mt-sm-0"
                    inline
                    name="group1"
                    label="I'm an agent or broker "
                    type={type}
                    id={`inline-${type}-3`}
                  />
                </div>
              ))}
            </Form>
            <div className="text-center mt-lg-5">
              <div className="pt-5">
                <a
                  href="#"
                  className="fw-bold  ff_open_sans fs_20  text-white btn_subscribe transition_time btn rounded-0"
                >
                  SUBSCRIBE
                </a>
              </div>
              <p className="ff_open_sans fw-normal fs_18 clr_green mt-5">
                I give mana permission to contact me & agree to the terms.This
                site is protected by reCAPTCHA and the Google{" "}
                <span className="fw-semibold">
                  privacy policy & terms of service.
                </span>
              </p>
              <p className="ff_open_sans fw-normal fs_18 clr_green ">
                Want to chat? <span className="fw-semibold">Contact us.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RadioSection;
