import { cookerimg } from './../../assets/images/cooker-img.png'

function About() {
  return (
    <section id="about-us">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="block">
              <img src="./../../assets/images/logo.png" alt="cooker-img-assets" />
              <h1
                className="heading wow fadeInUp"
                data-wow-duration="400ms"
                data-wow-delay="500ms"
              >
                Your <span>Restaurant’s</span> <br /> Website Has To Look{' '}
                <span>Good</span>
              </h1>
              <p
                className="wow fadeInUp"
                data-wow-duration="300ms"
                data-wow-delay="600ms"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About