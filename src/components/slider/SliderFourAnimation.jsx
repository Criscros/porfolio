import React from "react";
import { VideoTag } from "react-video-tag";
import TextLoop from "react-text-loop";


const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section
        id="home"
        className="home-banner slider-five-video inner-content-static overlay overlay-75 video-banner"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "img/banner/bg-2.jpg"
            })`,
        }}
      >

        <div className="video-background">
          <VideoTag
            autoPlay={`${true}`}
            muted={`${true}`}
            playsInline={`${true}`}
            loop={`${true}`}
            src={`${"videos/dynamo.mp4"}`}
            poster={`${"img/bg-2.jpg"}`}
          />
        </div>
        <div className="container">
          <div className="row align-items-center full-screen">
            <div className="col-lg-12">
              <div className="hb-typo text-center">
                <h1 className="font-alt">
                  I'm <span>David </span>
                </h1>
                <h2 className="mb-4">
                  <TextLoop>
                    <span className="loop-text">Aws Developer</span>
                    <span className="loop-text">Full Stack  Developer</span>
                    <span className="loop-text"> App Developer</span>
                  </TextLoop>{" "}

                </h2>
                {/* End social slide  */}
              </div>
            </div>
          </div>
        </div>

      </section>
      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
