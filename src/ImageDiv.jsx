import "./ImageDiv.css";

export default function ImageDiv() {
  return (
    <>
      <div className="container">
        <div className="row1">
          <div className="row1-img">
            <div className="div-container">
              <img
                id="img1"
                src="https://healthifyme.imgix.net/static/images/home_website/landing/generic/Lifestyle1.png?auto=format"
                alt=""
              />
            </div>
            <div className="div-container">
              <img
                id="img2"
                src="https://healthifyme.imgix.net/static/images/home_website/landing/assets/Lifestyle2_update.png?auto=format"
                alt=""
              />
            </div>
          </div>
          <div className="div-description">
            <h2>Diet Flexibility and Fitness Freedom</h2>
            <p>
              With the right data, reach your fitness goals faster, get
              personalized coaching and work with greater efficiency
            </p>
          </div>
        </div>
        <div className="row2">
          <div className="div-container">
            <img
              id="img3"
              src="https://healthifyme.imgix.net/static/images/home_website/landing/assets/Lifestyle_gray.png?auto=format"
              alt=""
            />
          </div>
          <div className="div-container">
            <img
              id="img4"
              src="https://healthifyme.imgix.net/static/images/home_website/landing/generic/Lifestyle4.png?auto=format"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
