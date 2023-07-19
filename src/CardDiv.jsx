import "./CardDiv.css";

export default function CardDiv() {
  return (
    <>
      <div className="parent-container">
        <div className="Container">
          <div className="heading-div">
            <h2>Improved Tools.Better Insights</h2>
            <p>
              Track detailed body and health metrics with cutting edge
              technology
            </p>
          </div>
          <div className="cards">
            <div className="info-card">
              <h4>Continuous Glucose Monitoring</h4>
              <p>
                Track your glucose response to food & activity and learn what
                works for you.
              </p>
              <img
                id="info1"
                src="https://healthifyme.imgix.net/static/images/home_website/landing/assets/Glucose+Monitoring.png?auto=format"
                alt=""
              ></img>
            </div>
            <div className="info-card">
              <div className="card1">
                <h4>Food Tracker</h4>
                <p>
                  Log meals with a touch, check your macros, or simply take a
                  photo of your meal.
                </p>
                <img
                  id="info2"
                  src="https://healthifyme.imgix.net/static/images/home_website/landing/assets/Food+Tracker.png?auto=format"
                  alt=""
                ></img>
              </div>
              <div className="card2">
                <h4>Body Metrics</h4>
                <p>
                  Do not just lose weight, lose the right kind of weight. Get
                  detailed body metrics.
                </p>
                <img
                  id="info3"
                  src="https://healthifyme.imgix.net/static/images/home_website/landing/assets/Body+Metrics.png?auto=format"
                  alt=""
                ></img>
              </div>
            </div>
            <div className="info-card">
              <h4>TimeLine & History</h4>
              <p>
                Get a feed of your whole day in one single place and receive
                feedback on your choices.
              </p>
              <img
                id="info4"
                src="https://healthifyme.imgix.net/static/images/home_website/landing/assets/Timeline+History.png?auto=format"
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
