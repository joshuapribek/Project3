import react from "react";
import About from "../Components/About";
import TheTeam from "../Components/TheTeam";
import Contact from "../Components/Contact";

function Main() {
  return (
    <div>
      <section
        className="hero d-flex flex-column justify-content-center align-items-center"
        id="home"
        >
        <div className="bg-overlay" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto col-12">
              <div className="hero-text mt-5 text-center">
                <h6 data-aos="fade-up" data-aos-delay={300}>
                  A new way to experience music!
                </h6>
                <h1
                  className="text-white"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  Upgrade your listening
                </h1>
                <a
                  href="#feature"
                  className="btn custom-btn mt-3"
                  data-aos="fade-up"
                  data-aos-delay={600}
                >
                  Get started
                </a>
                <a
                  href="#about"
                  className="btn custom-btn bordered mt-3"
                  data-aos="fade-up"
                  data-aos-delay={700}
                >
                  learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature" id="feature">
        <div className="container">
          <div className="row">
            <div className="d-flex flex-column justify-content-center ml-lg-auto mr-lg-5 col-lg-5 col-md-6 col-12">
              <h2 className="mb-3 text-white" data-aos="fade-up">
                New to WanderList?
              </h2>
              <h6 className="mb-4 text-white" data-aos="fade-up">
                Add to your road experience.
              </h6>
              <a href="#"
                className="btn custom-btn bg-color mt-3"
                data-aos="fade-up"
                data-aos-delay={300}
                data-toggle="modal"
                data-target="#membershipForm"
              >
                Get Started
              </a>
            </div>
            <div className="mr-lg-auto mt-3 col-lg-4 col-md-6 col-12">
              <div></div>
            </div>
          </div>
        </div>
      </section>
  );
}
</div>

function aboutsection(){
  return <About />;
}
function theteamsection(){
  return <TheTeam />;
}
function contactsection(){
  return   <Contact />;
}

export default Main;
