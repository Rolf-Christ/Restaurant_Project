export function FooterInfo(params) {
  return (
    <section id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="block wow fadeInLeft" data-wow-delay="200ms">
              <h3>
                CONTACT <span>INFO</span>
              </h3>
              <div className="info">
                <ul>
                  <li>
                    <h4>
                      <i className="fa fa-phone"></i>Telefone
                    </h4>
                    <p>(000) 123 456 78- (000) 123 4567 89</p>
                  </li>
                  <li>
                    <h4>
                      <i className="fa fa-map-marker"></i>Address
                    </h4>
                    <p>2046 Blue Spruce Lane Laurel Canada</p>
                  </li>
                  <li>
                    <h4>
                      <i className="fa fa-envelope"></i>E mail
                    </h4>
                    <p>rest@gmail.com - rest@mail.ru</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="block wow fadeInLeft" data-wow-delay="700ms">
              <h3>
                LATEST <span>BLOG POSTS</span>
              </h3>
              <div className="blog">
                <ul>
                  <li>
                    <h4>
                      <a href="https://google.com">Nov 9-2014</a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adip iscing elit.
                      Curabitur ut blandit sapien
                    </p>
                  </li>
                  <li>
                    <h4>
                      <a href="https://google.com">Sep 8-2014</a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adip iscing elit.
                      Curabitur ut blandit sapien
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="block wow fadeInLeft" data-wow-delay="1100ms">
              <div className="gallary">
                <h3>
                  PHOTO <span>STREAM</span>
                </h3>
                <ul>
                  <li>
                    <a href="https://google.com">
                      <img src="images/photo/photo-1.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://google.com">
                      <img src="images/photo/photo-2.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://google.com">
                      <img src="images/photo/photo-3.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://google.com">
                      <img src="images/photo/photo-4.jpg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="social-media-link">
                <h3>
                  Follow <span>US</span>
                </h3>
                <ul>
                  <li>
                    <a href="https://google.com">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://google.com">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://google.com">
                      <i className="fa fa-dribbble"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://google.com">
                      <i className="fa fa-behance"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
