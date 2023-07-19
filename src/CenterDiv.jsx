import "./CenterDiv.css";

function CenterDiv() {
  return (
    <div className="center-container">
      <div className="header">
        <h2>Healthify with Pro.Like a Pro</h2>
        <span>Make accurate progress powered by 360° guidance.</span>
        <button>Know More</button>
      </div>
      <div className="content">
        <div className="item">
          <img
            src="https://healthifyme.imgix.net/static/images/home_website/landing/assets/Bios_gray.png?auto=format"
            alt=""
          />
          <div className="description">
            <h3>CGM</h3>
            <p>
              Small yet powerful, the CGM helps you lose weight more
              consistently. It tracks your glucose every minute. So you know
              what to eat and when to burn.
            </p>
          </div>
        </div>
        <div className="item">
          <div className="description">
            <h3>Pro Coaches</h3>
            <p>
              Pro Coaches gather insights from Pro CGM, Smart Scale, Pro Tracker
              & Metabolic Panel to give you personalised guidance in real time.
            </p>
          </div>
          <img
            src="https://healthifyme.imgix.net/static/images/home_website/landing/assets/Pro-Coaches-Gradient.png?auto=format"
            alt=""
          />
        </div>
        <div className="item">
          <img
            src="https://healthifyme.imgix.net/static/images/home_website/landing/assets/Smart+Scale_update.png?auto=format"
            alt=""
          />
          <div className="description">
            <h3>Smart Scale</h3>
            <p>
              Smart in every way, the Smart Scale breaks down body weight into
              body fat, muscle mass, protein, hydration and bone mass. So you
              lose the right kind of weight.
            </p>
          </div>
        </div>
        <div className="item">
          <div className="description">
            <h3>Metabolic Panel</h3>
            <p>
              A dashboard with 80+ key metabolic parameters that helps you stay
              healthy & identify underlying medical conditions.
            </p>
          </div>
          <img
            src="https://healthifyme.imgix.net/static/images/home_website/landing/assets/Metabolic.png?auto=format"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default CenterDiv;
