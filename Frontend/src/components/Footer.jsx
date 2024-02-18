import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Container from "react-bootstrap/esm/Container";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import "../styles/font.css";

const footer1 = () => {
  return (
    <Container fluid className="footer-container">
      <div className="row">
        <div className="col-6 col-lg-4 first">
          <span>
            <img
              src="../images/logo-navbar.png"
              alt="لوگوی شرکت"
              className="logo"
            />
          </span>
          <span className="hide-on-small-screen" style={{ marginTop: "10px" }}>
            09112113045
          </span>
          <span className="hide-on-small-screen" style={{ marginTop: "10px" }}>
            khoshesanat@gmail.com
          </span>
        </div>
        <div className="col-6 col-lg-4 second">
          <h6 className="text-center">:دسترسی سریع</h6>
          <div className="links">
            <Link to="/About">درباره ما</Link>
            <Link to="/Products">محصولات</Link>
            <Link to="/Services">خدمات</Link>
            <Link to="/SampleWorks">نمونه کارها</Link>
          </div>
        </div>
        <div className="col-6 col-lg-3 third hide-on-small-screen">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1599.8782283259504!2d52.68421339667321!3d36.68035629759859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8f8093ba6eea3f%3A0xce45a2b9384e4f71!2sKhoushe%20Sanaat%20Company!5e0!3m2!1sen!2sde!4v1708142011528!5m2!1sen!2sde"
            width="600"
            height="450"
            style={{ border: "0", width: "95%", height: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="icons col-6">
          {/* instagram icon */}
          <a href="https://www.instagram.com/iran_color_sorter/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M15 0C10.9263 0 10.4154 0.0172822 8.8155 0.0902517C7.21893 0.163087 6.12854 0.416694 5.1744 0.787436C4.18802 1.17077 3.3515 1.6837 2.51762 2.51758C1.6837 3.35146 1.17077 4.18806 0.787481 5.17444C0.416649 6.12854 0.163132 7.21893 0.090207 8.8155C0.0172376 10.4154 0 10.9263 0 15C0 19.0737 0.0172376 19.5846 0.090207 21.1845C0.163132 22.7811 0.416649 23.8715 0.787481 24.8256C1.17082 25.8119 1.68375 26.6484 2.51762 27.4824C3.35155 28.3163 4.18802 28.8292 5.1744 29.2126C6.12854 29.5833 7.21893 29.8369 8.8155 29.9097C10.4154 29.9827 10.9263 30 15 30C19.0737 30 19.5846 29.9827 21.1845 29.9097C22.7811 29.8369 23.8715 29.5833 24.8256 29.2126C25.8119 28.8292 26.6484 28.3163 27.4824 27.4824C28.3163 26.6484 28.8292 25.8119 29.2126 24.8256C29.5833 23.8715 29.8369 22.7811 29.9097 21.1845C29.9827 19.5846 30 19.0737 30 15C30 10.9263 29.9827 10.4154 29.9097 8.8155C29.8369 7.21893 29.5833 6.12854 29.2126 5.17444C28.8292 4.18806 28.3163 3.35146 27.4824 2.51758C26.6484 1.6837 25.8119 1.17077 24.8256 0.787436C23.8715 0.416694 22.7811 0.163087 21.1845 0.0902517C19.5846 0.0172822 19.0737 0 15 0ZM15 2.70268C19.0051 2.70268 19.4796 2.718 21.0613 2.79017C22.5238 2.85684 23.318 3.1012 23.8465 3.30662C24.5468 3.57876 25.0464 3.90378 25.5713 4.42867C26.0962 4.95357 26.4212 5.45328 26.6934 6.15341C26.8988 6.68197 27.1432 7.47624 27.2098 8.93871C27.282 10.5204 27.2973 10.9949 27.2973 15C27.2973 19.0051 27.282 19.4796 27.2098 21.0613C27.1432 22.5238 26.8988 23.318 26.6934 23.8465C26.4212 24.5468 26.0962 25.0464 25.5713 25.5713C25.0464 26.0962 24.5467 26.4212 23.8466 26.6934C23.318 26.8988 22.5238 27.1432 21.0613 27.2098C19.4798 27.282 19.0055 27.2973 15 27.2973C10.9945 27.2973 10.5202 27.282 8.93871 27.2098C7.4762 27.1432 6.68197 26.8988 6.15346 26.6934C5.45324 26.4212 4.95357 26.0962 4.42872 25.5713C3.90382 25.0464 3.57876 24.5467 3.30662 23.8466C3.1012 23.318 2.85688 22.5238 2.79017 21.0613C2.718 19.4796 2.70268 19.0051 2.70268 15C2.70268 10.9949 2.718 10.5204 2.79017 8.93871C2.85688 7.4762 3.1012 6.68197 3.30662 6.15346C3.57876 5.45324 3.90382 4.95357 4.42867 4.42872C4.95357 3.90378 5.45328 3.57876 6.15341 3.30662C6.68197 3.1012 7.47624 2.85684 8.93871 2.79017C10.5204 2.718 10.9949 2.70268 15 2.70268"
                fill="#59B64D"
              />
              <path
                d="M15.0001 20.0001C12.2386 20.0001 10 17.7615 10 15.0001C10 12.2386 12.2386 10 15.0001 10C17.7615 10 20.0001 12.2386 20.0001 15.0001C20.0001 17.7615 17.7615 20.0001 15.0001 20.0001ZM15.0001 7.29736C10.746 7.29736 7.29736 10.7459 7.29736 15.0001C7.29736 19.2542 10.746 22.7028 15.0001 22.7028C19.2542 22.7028 22.7028 19.2542 22.7028 15.0001C22.7028 10.7459 19.2542 7.29736 15.0001 7.29736ZM24.8071 6.99303C24.8071 7.98718 24.0012 8.79301 23.0071 8.79301C22.013 8.79301 21.2071 7.98718 21.2071 6.99303C21.2071 5.99892 22.013 5.19299 23.0071 5.19299C24.0012 5.19299 24.8071 5.99892 24.8071 6.99303Z"
                fill="#59B64D"
              />
            </svg>
          </a>

          {/* whatsapp icon */}
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="32"
              viewBox="0 0 30 32"
              fill="none"
            >
              <path
                d="M0 31.1111L2.10875 23.122C0.807498 20.7835 0.12375 18.1326 0.125 15.4143C0.12875 6.91574 6.79749 0 14.9912 0C18.9675 0.0012963 22.7 1.60741 25.5074 4.52148C28.3137 7.43555 29.8587 11.3089 29.8574 15.4285C29.8537 23.9283 23.1849 30.8441 14.9912 30.8441C12.5037 30.8428 10.0525 30.1959 7.88123 28.967L0 31.1111ZM8.24623 26.1761C10.3412 27.4659 12.3412 28.2385 14.9862 28.2398C21.7962 28.2398 27.3437 22.492 27.3474 15.4259C27.3499 8.34556 21.8287 2.60556 14.9962 2.60296C8.18123 2.60296 2.63749 8.35074 2.63499 15.4156C2.63374 18.2998 3.44874 20.4594 4.81749 22.7189L3.56874 27.4478L8.24623 26.1761ZM22.48 19.0931C22.3875 18.9324 22.14 18.8365 21.7675 18.6433C21.3962 18.4502 19.57 17.5181 19.2287 17.3898C18.8887 17.2615 18.6412 17.1967 18.3925 17.583C18.145 17.968 17.4325 18.8365 17.2162 19.0931C17 19.3498 16.7825 19.3822 16.4112 19.1891C16.04 18.9959 14.8425 18.5902 13.4237 17.277C12.32 16.2556 11.5737 14.9943 11.3575 14.608C11.1412 14.223 11.335 14.0143 11.52 13.8224C11.6875 13.65 11.8912 13.3726 12.0775 13.147C12.2662 12.9241 12.3275 12.7633 12.4525 12.5054C12.5762 12.2487 12.515 12.0231 12.4212 11.83C12.3275 11.6381 11.585 9.74167 11.2762 8.97037C10.9737 8.21981 10.6675 8.32093 10.44 8.30926L9.72748 8.2963C9.47998 8.2963 9.07748 8.39222 8.73748 8.77852C8.39748 9.16481 7.43748 10.0956 7.43748 11.992C7.43748 13.8885 8.76873 15.7202 8.95373 15.9769C9.13998 16.2335 11.5725 20.125 15.2987 21.7933C16.185 22.19 16.8775 22.4272 17.4162 22.6048C18.3062 22.8978 19.1162 22.8563 19.7562 22.7578C20.47 22.6476 21.9537 21.8257 22.2637 20.9261C22.5737 20.0252 22.5737 19.2539 22.48 19.0931Z"
                fill="#56B94C"
              />
            </svg>
          </a>

          {/* telegram icon */}
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="30"
              viewBox="0 0 28 30"
              fill="none"
            >
              <rect width="27.3529" height="30" rx="13.6765" fill="#56B94C" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.19096 14.8417C10.1779 12.9365 12.8365 11.6805 14.1668 11.0737C17.9649 9.34105 18.7541 9.04007 19.2685 9.03014C19.3816 9.02795 19.6346 9.0587 19.7985 9.20453C19.9368 9.32767 19.9749 9.494 19.9931 9.61075C20.0113 9.72749 20.034 9.99344 20.016 10.2012C19.8102 12.5731 18.9196 18.329 18.4665 20.9855C18.2748 22.1095 17.8973 22.4864 17.5318 22.5233C16.7376 22.6035 16.1345 21.9477 15.3653 21.3946C14.1616 20.5292 13.4816 19.9905 12.3131 19.146C10.9629 18.1701 11.8382 17.6337 12.6077 16.7571C12.8091 16.5277 16.3085 13.0367 16.3762 12.72C16.3847 12.6804 16.3925 12.5328 16.3126 12.4548C16.2326 12.3769 16.1146 12.4035 16.0294 12.4247C15.9087 12.4548 13.9857 13.8488 10.2606 16.6067C9.71475 17.0178 9.22036 17.2181 8.77741 17.2076C8.28909 17.196 7.34975 16.9047 6.65146 16.6558C5.79497 16.3504 5.11424 16.189 5.17352 15.6704C5.20439 15.4003 5.54354 15.1241 6.19096 14.8417Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
        <div
          className="col-6 d-flex align-items-center justify-content-end line"
          style={{ fontSize: "14px" }}
        >
          &copy;2023 ---. All rights reserved
        </div>
      </div>
    </Container>
  );
};

export default footer1;

// THINGS TO FIX:
//  - The icons should be linked to social medias of the company.
//  - The google maps should be linked to the real location of the comapny.

//  - The font family could be anything better.
