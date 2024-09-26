import './App.css';
import calculator from './calculator.png';
import JPCSLogo from './JPCSLogo.png';
import ParkMe from './Park Me.png';
import MusikalistaLogo from './MusikalistaLogo.png';
import tetrisparody from './tetrisparody.png';
import ebook from './ebook.png';
import me from './me.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


function App() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Personal Portfolio - Elwyn Nicole</title>

      {/* Bootstrap CSS CDN link */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossOrigin="anonymous"
      />

      {/* Custom CSS file */}
      <link rel="stylesheet" href="css/style.css" />

      {/* Google Font link */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Bootstrap Icons CDN link */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css" />

      {/* AOS Library CSS file CDN link for animations */}
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

      {/* jQuery CDN link */}
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js" />

      {/* Navbar starts */}
      <nav id="navbar-top" className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
        <div className="container-fluid px-5">
          <a className="navbar-brand fw-bold fs-2" href="#" style={{ color: "#d242be" }}>Portfolio</a>
          <button className="nav-menu d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <i className="bi bi-menu-button-fill" />
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav gap-4" style={{ fontSize: "1.1rem" }}>
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#aboutme">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section className="home pt-5 pb-5" id="home">
        <div className="row justify-content-evenly align-middle">
          <div className="col-10 col-md-6 text-center text-md-start" data-aos="slide-right">
            <h2 style={{ color: "#d626d3" }}>
              Hello! I Am <br /><span className="c-orange">Elwyn Nicole</span>
            </h2>
            <p className="text-muted">
              I am a Computer Science student of C3A in De La Salle Lipa. <br />
              Get to know me using my portfolio!
            </p>
            <button className="btn btn-primary btn-lg square-pill py-3 px-5" style={{ backgroundColor: "#d626d3", color: "#ffff" }}>Hire Me!</button>
            <a href="#" className="link ms-4 d-none">See My Work</a>
          </div>
        </div>
      </section>

      {/* about me section starts */}
      <section className="aboutme mt-5" id="aboutme">
        <div className="heading text-center">
          <small>About Me</small>
          <h3>
            My Field of <br />
            Interests
          </h3>
          </div>
        <div className="row justify-content-evenly mt-5">
          <div className="col-10 col-md-4" data-aos="fade-up">
            <div className="service-card">
              <div className="img">
                <img src={JPCSLogo} className="w-25 img-fluid img" alt="" />
              </div>
              <div className="content mt-3">
                <h4>JPCS</h4>
                <p className="text-muted">
                  Junior Philippine Computer Society
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-10" data-aos="fade-up">
            <div className="service-card">
              <div className="img">
                <img src={ParkMe} className="w-25 img-fluid img" alt="" />
              </div>
              <div className="content mt-3">
                <h4>Park Me</h4>
                <p className="text-muted">
                  Park Me - Mobile Application
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-10" data-aos="fade-up">
            <div className="service-card">
              <div className="img">
                <img src={MusikalistaLogo} className="w-25 img-fluid img" alt="" />
              </div>
              <div className="content mt-3">
                <h4>Musikalista</h4>
                <p className="text-muted">
                  DLSL Musikalista
                </p>
              </div>
            </div>
          </div>
          {/* modals starts */}
          <div className="modal fade" id="exampleModal1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <div className="modal-body px-4">
                  <div className="img">
                    <img src={JPCSLogo} className="img-fluid" alt="" />
                  </div>
                  <div className="content mt-3">
                    <small>By Elwyn Nicole</small><span className="text-muted ms-2">Aug 8, 2024</span>
                    <h4 className="card-title mt-3">JPCS</h4>
                    <div className="social-links mt-4">
                      <button href="#" className="rounded-pill facebook">
                        <i className="bi bi-facebook" />
                      </button>
                      <button href="#" className="rounded-pill linkedin">
                        <i className="bi bi-linkedin" />
                      </button>
                      <button href="#" className="rounded-pill google">
                        <i className="bi bi-google" />
                      </button>
                    </div>
                    <p className="text-muted mt-3">Junior Philippine Computer Society is a PROF Organization of De La Salle Lipa composed of CS, EMC, IT, and ACT students.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <div className="modal-body px-4">
                  <div className="img">
                    <img src={ParkMe} className="img-fluid" alt="" />
                  </div>
                  <div className="content mt-3">
                    <small>By Elwyn Nicole</small><span className="text-muted ms-2 ms-md-0">Jan 8, 2024</span>
                    <h4 className="card-title mt-3">Park Me</h4>
                    <div className="social-links mt-4">
                      <button href="#" className="rounded-pill facebook">
                        <i className="bi bi-facebook" />
                      </button>
                      <button href="#" className="rounded-pill linkedin">
                        <i className="bi bi-linkedin" />
                      </button>
                      <button href="#" className="rounded-pill google">
                        <i className="bi bi-google" />
                      </button>
                    </div>
                    <p className="text-muted mt-3">Park Me is a mobile application that helps users find parking spaces in a specific area.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="exampleModal3" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <div className="modal-body px-4">
                  <div className="img">
                    <img src={MusikalistaLogo} className="img-fluid" alt="" />
                  </div>
                  <div className="content mt-3">
                    <small>By Elwyn Nicole</small><span className="text-muted ms-2 ms-md-0">Aug 8, 2024</span>
                    <h4 className="card-title mt-3">Musikalista</h4>
                    <div className="social-links mt-4">
                      <button href="#" className="rounded-pill facebook">
                        <i className="bi bi-facebook" />
                      </button>
                      <button href="#" className="rounded-pill linkedin">
                        <i className="bi bi-linkedin" />
                      </button>
                      <button href="#" className="rounded-pill google">
                        <i className="bi bi-google" />
                      </button>
                    </div>
                    <p className="text-muted mt-3">DLSL Musikalista is a school organization that promotes music and arts in De La Salle Lipa.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio" id="portfolio">
      <div className="heading text-center pt-5">
        <small>Creative Work</small>
        <h3>Check My Portfolio</h3>
      </div>


      <div className="portfolio-body">
        <div className="row justify-content-evenly px-4">
          <div className="post col-md-4 game all col-10 mt-3 mt-md-0" data-aos="fade-up">
            <div className="card">
              <img src={tetrisparody} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h4 className="card-title">Tetris Game</h4> 
                <br />
                <span className="badge bg-secondary badge-pill">HTML&CSS</span>
                <span className="badge bg-secondary badge-pill">JavaScript</span>
                <span className="badge bg-secondary badge-pill mb-2">Game</span> 
                <br />
              </div>
            </div>
          </div>

          <div className="post col-md-4 website all col-10 mt-3 mt-md-0" data-aos="fade-up">
            <div className="card">
              <img src={calculator} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h4 className="card-title">Calculator App</h4> 
                <br />
                <span className="badge bg-secondary badge-pill">HTML&CSS</span>
                <span className="badge bg-secondary badge-pill">JavaScript</span>
                <span className="badge bg-secondary badge-pill mb-2">Website</span>
                <br />
              </div>
            </div>
          </div>

          <div className="post col-md-4 webapp all col-10 mt-3 mt-md-0" data-aos="fade-up">
            <div className="card">
              <img src={ebook} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h4 className="card-title">EBook</h4> 
                <br />
                <span className="badge bg-secondary badge-pill">HTML&CSS</span>
                <span className="badge bg-secondary badge-pill">JavaScript</span>
                <span className="badge bg-secondary badge-pill mb-2">WebApp</span>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


{/* Contact Section */}
<section className="contact mt-5" id="contact">
  <div className="heading text-center">
    <small>Contact</small>
    <h3>
      Get in Touch
    </h3>
  </div>
  <div className="row justify-content-evenly mt-5">
    <div className="col-10 col-md-6" data-aos="fade-up">
      <div className="contact-card">
        <div className="img">
          <img src={me} className="img-fluid" alt="" />
        </div>
        <div className="content mt-5">
          <h4>Villegas, Elwyn Nicole R.</h4>
          <p className="text-muted">
            If you have any questions or would like to get in touch, please don't hesitate to contact me.
          </p>
        </div>
      </div>
    </div>
    <div className="col-10 col-md-6" data-aos="fade-up">
      <section id="contact">
        <h2>Contact Me</h2>
        <form id="contact-form">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" id="name" className="form-control" required />
            <div id="name-error" className="invalid-feedback"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" id="email" className="form-control" required />
            <div id="email-error" className="invalid-feedback"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message:</label>
            <textarea id="message" className="form-control" required />
            <div id="message-error" className="invalid-feedback"></div>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </section>
    </div>
  </div>
</section>
    </>
  );
}

export default App;          