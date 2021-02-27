import React from "react";
import "./style.css";

function About() {
  return (
    <>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="mt-lg-5 mb-lg-0 mb-4 col-lg-5 col-md-10 mx-auto col-12">
              <h2 className="mb-4" data-aos="fade-up" data-aos-delay={300}>
                What is WanderList?
              </h2>
              <p data-aos="fade-up" data-aos-delay={400}>
                An app for music lovers with wanderlust at heart. Find music
                geographically relevent to you. Works in combination with your
                favorite music streaming services.{" "}
              </p>
              <p data-aos="fade-up" data-aos-delay={500}>
                If you have any question regarding{" "}
                <a rel="nofollow" href="#" target="_parent">
                  WanderList
                </a>
                , you can{" "}
                <a rel="nofollow" href="#" target="_parent">
                  contact us
                </a>{" "}
                immediately. Thank you.
              </p>
            </div>
            <div
              className="ml-lg-auto col-lg-3 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-delay={700}
            >
              <div className="team-thumb">
                <img
                  src="./images/pandora.jpg"
                  className="img-fluid"
                  alt="Pandora"
                />
                <div className="team-info d-flex flex-column">
                  <h3>
                    <span>
                      <a href="https://wwww.pandora.com"> Pandora</a>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="mr-lg-auto mt-5 mt-lg-0 mt-md-0 col-lg-3 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-delay={800}
            >
              <div className="team-thumb">
                <img
                  src="./images/spotify.jpeg"
                  className="img-fluid"
                  alt="Spotify"
                />
                <div className="team-info d-flex flex-column">
                  <h3>
                    <span>
                      <a href="https://www.Spotify.com">Spotify</a>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
