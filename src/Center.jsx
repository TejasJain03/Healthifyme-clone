import "./Center.css"; // Import the CSS file for styling

export default function Center() {
  return (
    <>
      <div className="parent-div">
        <div className="Center">
          <div className="heading">
            <h1>A Connected Fitness Ecosystem</h1>
            <span>
              Improve your health holistically, more consistently and experience
              change like never before.
            </span>
          </div>
          <div className="row">
            <div className="column">
              <div className="card">
                <div className="card-head">
                  <img
                    className="card-logo"
                    src="https://healthifyme.imgix.net/static/images/home_website/landing/icons/Devices.svg?auto=format"
                    alt="Glucose Monitoring"
                  ></img>
                  <div className="card-head-content">
                    <h3>Better Tech. Better Health</h3>
                    <p>
                      A connected fitness ecosystem that helps you achieve your
                      health goals faster and more consistently.
                    </p>
                  </div>
                </div>

                <img
                  id="img2"
                  className="card-img"
                  src="https://healthifyme.imgix.net/static/images/home_website/landing/assets/Smart_Devices_gray.png?auto=format"
                  alt="glucose image"
                  loading="lazy"
                ></img>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-head">
                  <img
                    className="card-logo"
                    src="https://healthifyme.imgix.net/static/images/home_website/landing/icons/Coaches.svg?auto=format"
                    alt="Glucose Monitoring"
                  ></img>
                  <div className="card-head-content">
                    <h3>Elite Coaches</h3>
                    <p>
                      Best-in-class Coaches for supreme guidance and motivation.
                    </p>
                  </div>
                </div>
                <img
                  className="card-img"
                  id="img3"
                  src="https://healthifyme.imgix.net/static/images/home_website/landing/assets/Elite--Coaches.png?auto=format"
                  alt="glucose image"
                  loading="lazy"
                ></img>
              </div>
            </div>
          </div>
          <div className="row2">
            <div className="column">
              <div className="card">
                <div className="card-head-2">
                  <div className="card-head-content-2">
                    <img
                      className="card-img-2"
                      src="https://healthifyme.imgix.net/static/images/home_website/landing/icons/Metabolic.svg?auto=format"
                      alt="Glucose Monitoring"
                      width="60"
                      height="60"
                    ></img>
                    <h4>Metabolic Panel</h4>
                    <p>
                      A dashboard with 80+ key metabolic parameters that helps
                      you stay healthy & identify underlying medical conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-head-2">
                  <div className="card-head-content-2">
                    <img
                      className="card-img-2"
                      src="https://healthifyme.imgix.net/static/images/home_website/landing/icons/Plans.svg?auto=format"
                      alt="Glucose Monitoring"
                      width="60"
                      height="60"
                    ></img>
                    <h4>Personalized Fitness Plans</h4>
                    <p>
                      Extensive Diet and Workout Plans customized for you and
                      your fitness goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-head-2">
                  <div className="card-head-content-2">
                    <img
                      className="card-img-2"
                      src="https://healthifyme.imgix.net/static/images/home_website/landing/icons/Insights.svg?auto=format"
                      alt="Glucose Monitoring"
                      width="60"
                      height="60"
                    ></img>
                    <h4>Better Health Insights</h4>
                    <p>
                      Detailed insights to keep you on track and help you
                      improve your health regimen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
