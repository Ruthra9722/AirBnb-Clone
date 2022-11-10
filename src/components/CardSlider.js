import React from "react";
import Slider from "react-slick";
import "./components-styles/cardSlider.css";

const CardSlider = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="container-md">
      <h2 className="mt-5 mb-5">
        {" "}
       Top sellers{" "}
      </h2>
      <Slider {...settings}>
        {/* card 1 */}
        <div>
          <img
            className="slider-img"
            src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-2340325-media_library/original/599c584e-f401-4f67-958a-18277ee7dd10.png?im_w=480"
            alt=""
          />
          <div className="slider-caption mt-2 p-2">
            <p className="slider-caption-p">
              <i className="fa-solid fa-star"></i>4.99{" "}
              <span className="text-secondary">(153) . united states</span>
              <br />
              Plan the perfect new york vacation
              <br />
              <strong>from ₹1,564</strong>/person
            </p>
          </div>
        </div>

        {/* card 2 */}
        <div>
          <img
            className="slider-img"
            src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-2544967-media_library/original/5ff16718-7c07-4317-a84c-fc7947c63f5d.jpeg?im_w=480"
            alt=""
          />
          <div className="slider-caption mt-2 p-2">
            <p className="slider-caption-p">
              <i className="fa-solid fa-star"></i>5.0{" "}
              <span className="text-secondary">(153) . spain</span>
              <br />
              design your trip to barcelona with gemma
              <br />
              <strong>from ₹3,117</strong>/person
            </p>
          </div>
        </div>

        {/* caed 3 */}
        <div>
          <img
            className="slider-img"
            src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-poster/original/437c46e2-33d8-4b5c-a6a4-84d6642b2fcc.jpg?im_w=480"
            alt=""
          />
          <div className="slider-caption mt-2 p-2">
            <p className="slider-caption-p">
              <i className="fa-solid fa-star"></i>4.97{" "}
              <span className="text-secondary">(60) . south korea</span>
              <br />
              craft a custom trip to korea with jay
              <br />
              <strong>from ₹3,473</strong>/person
            </p>
          </div>
        </div>

        {/* cartd 4 */}
        <div>
          <img
            className="slider-img"
            src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1718920-media_library/original/b93b65ee-1cbb-43b5-8a55-ced3f4310f9c.jpg?im_w=480"
            alt=""
          />
          <div className="slider-caption mt-2 p-2">
            <p className="slider-caption-p">
              <i className="fa-solid fa-star"></i>4.63{" "}
              <span className="text-secondary">(8) . mexico</span>
              <br />
              live tulum like a local
              <br />
              <strong>from ₹624</strong>/person
            </p>
          </div>
        </div>

        {/* card 5 */}
        <div>
          <img
            className="slider-img"
            src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-2673705-poster/original/2d1a6bd1-a1b3-4644-8c54-76581edac4c0.jpeg?im_w=480"
            alt=""
          />
          <div className="slider-caption mt-2 p-2">
            <p className="slider-caption-p">
              <i className="fa-solid fa-star"></i>4.75{" "}
              <span className="text-secondary">(12) . united states</span>
              <br />
              Plan a trip to amazing austin
              <br />
              <strong>from ₹2,058</strong>/person
            </p>
          </div>
        </div>

        {/* card 6 */}
        <div>
          <img
            className="slider-img"
            src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-2596268-active_media/original/7c87c5f0-28ab-47fb-84bd-4805bf8680a6.jpeg?im_w=320"
            alt=""
          />
          <div className="slider-caption mt-2 p-2">
            <p className="slider-caption-p">
              <i className="fa-solid fa-star"></i>4.91{" "}
              <span className="text-secondary">(43) . italy</span>
              <br />
              create your rome itinerary with debora
              <br />
              <strong>from ₹985</strong>/person
            </p>
          </div>
        </div>

        {/* card 7 */}
        <div>
          <img
            className="slider-img"
            src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-2493134-active_media/original/90ff3c19-817e-48a5-be2e-2316a55852dd.jpeg?im_w=320"
            alt=""
          />
          <div className="slider-caption mt-2 p-2">
            <p className="slider-caption-p">
              <i className="fa-solid fa-star"></i>5.0{" "}
              <span className="text-secondary">(16) . italy</span>
              <br />
              plan a venice venture with giulia
              <br />
              <strong>from ₹2,461</strong>/person
            </p>
          </div>
        </div>

        {/* card 8 */}
        <div>
          <img
            className="slider-img"
            src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-2493583-active_media/original/41e41ce9-c713-4526-9c28-d8aab2b1bf82.jpeg?im_w=320"
            alt=""
          />
          <div className="slider-caption mt-2 p-2">
            <p className="slider-caption-p">
              <i className="fa-solid fa-star"></i>4.98{" "}
              <span className="text-secondary">(153) . united states</span>
              <br />
              Plan a trip to nashvile with a local insider
              <br />
              <strong>from ₹988</strong>/person
            </p>
          </div>
        </div>

        {/* card 9 */}
        <div>
          <img
            className="slider-img"
            src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-2493134-active_media/original/90ff3c19-817e-48a5-be2e-2316a55852dd.jpeg?im_w=320"
            alt=""
          />
          <div className="slider-caption mt-2 p-2">
            <p className="slider-caption-p">
              <i className="fa-solid fa-star"></i>5.0{" "}
              <span className="text-secondary">(4) . united states</span>
              <br />
              Plan the perfect trip to sunny miami
              <br />
              <strong>from ₹1,729</strong>/person
            </p>
          </div>
        </div>

        {/* card 10 */}
        <div>
          <img
            className="slider-img"
            src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-4486443-media_library/original/3f642d23-14c5-4a45-b29c-0a5089fefcaa.jpeg?im_w=1200"
            alt=""
          />
          <div className="slider-caption mt-2 p-2">
            <p className="slider-caption-p">
              <i className="fa-solid fa-star"></i>4.99{" "}
              <span className="text-secondary">(153) . united states</span>
              <br />
              Plan the perfect new york vacation
              <br />
              <strong>from ₹1,564</strong>/person
            </p>
          </div>
        </div>

        {/* card 11 */}
        <div>
          <img
            className="slider-img"
            src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-4477143-media_library/original/2618d48d-c9f9-4b3f-aaf3-0d8c6f9195c1.jpeg?im_w=320"
            alt=""
          />
          <div className="slider-caption mt-2 p-2">
            <p className="slider-caption-p">
              <i className="fa-solid fa-star"></i>4.99{" "}
              <span className="text-secondary">(153) . united states</span>
              <br />
              Plan the perfect new york vacation
              <br />
              <strong>from ₹1,564</strong>/person
            </p>
          </div>
        </div>

        {/* card 12 */}
        <div>
          <img
            className="slider-img"
            src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-4489667-media_library/original/0176fc13-e91c-4d46-83cb-74a4e998a1ac.jpeg?im_w=320"
            alt=""
          />
          <div className="slider-caption mt-2 p-2">
            <p className="slider-caption-p">
              <i className="fa-solid fa-star"></i>4.99{" "}
              <span className="text-secondary">(153) . united states</span>
              <br />
              Plan the perfect new york vacation
              <br />
              <strong>from ₹1,564</strong>/person
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CardSlider;
