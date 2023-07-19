import { useState,useEffect } from "react";
import './Footer.css'
export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 468);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="footer">
        <div className="footer-info">
          <div className="footer-logo">
            <img
              src="https://healthifyme.imgix.net/static/images/home_website/landing/assets/HealthifyMeLogosvg.svg?auto=format"
              alt="logo"
              width="170"
              height="28"
            ></img>
            <div className="footer-buttons">
              {isMobile ? (
                <button style={{ fontSize: "11px", fontWeight: "600",width:'90%' }}>
                  Get the App
                </button>
              ) : (
                <>
                  <button>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAP1JREFUSEvdlesNwjAMhK+bwCTAJMAkwCTQSYBJYBR0UoxSYid21P7BUlS1ae+Lnx2wsA0L68MDeAEYAZx7DuMB3AFsAbwBrKMQD4DihNBuAI4RiAdAPYbn1ONFDbACIIvh4aI39CLf471pFkBOnH9IwCOJEyQmz9XQaYA85pFwq/mJeOCB7ZKX33drOZDy9AjLO5fffqkBtDy0YEWv1AAHANeWorI/0awBKE5IxFhlzEMzB7NVkuZBT+zlxOyFSeNpgJ7qEUChN2ejFSVKqpXkqBfmKLcAHGaE8OqxooPNmGVqFGeZ7tMkfWbDbpP2eHImluWpmvd/4PHiTwEffSotGVXp+qMAAAAASUVORK5CYII=" />
                    App Store
                  </button>
                  <button>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOxJREFUSEvFldENwjAMRF83gU1gEsQkwCYwCXQSYBLQSbUUIidxS6vms0L3chf76Fj4dAvrsxrgCTyAC/D6x6Xn4AxcAUEkfgP0bdLxAJ/h5gaR8GRQCSBRxZNCDHQc4gs5qgFKEH0XOPQ+LUANotjMZdFNBNCK6wC8S4MQBeQQ3V5vcQJ2w/VdR2MAKWSTiVtEguzT3RkLMAEJak+8s50KSGPpoyMcdeBlbhN0r217BOCJWzQ/cXh5tQAlcRWhpqhZhDVAaRRnqYpcfNay0/ilS6THnLWubYm0/iq1Zs61Wl3tLzPU9ZEfLe7gC/SfVxkz15vAAAAAAElFTkSuQmCC" />
                    Play Store
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="app-details">
                <div className="footer-links">
                    <a href="#">Our App</a>
                    <a href="#">Premiuem Plans</a>
                    <a href="#">Blog</a>
                    <a href="#">Corporate Wellness</a>
                    <a href="#">Our Team</a>
                    <a href="#">Careers</a>
                    <a href="#">Annual Filling Report</a>
                </div>
                <div className="footer-address">
                    <span>Address:</span>
                    <span>Singapore: HealthifyMe Private Limited 20 Bendemeer Road, #03-12 BS Bendemeer Centre, Singapore 339914</span>
                    <span>Malaysia: Suite 28-1, Level 28, Vertical Corporate Tower B, Avenue 10, The Vertical, Bangsar South City, 8 Jalan Kerinchi, 59200 Kuala Lumpur</span>
                    <span>Contact</span>
                    <span><b>18004199501</b></span>
                    <span><b>supporthealthifyme.com</b></span>
                </div>
          </div>
        </div>
      </div>
      <div className="footer-terms">
          <div className="logos">
            <span>Follow us on <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAW5JREFUSEvFlc1NQ0EMhCdNcAUqAS7cKQAJKgEk+gDK4ARUws+BOxUEfcjzZO1zNhuhp+wlSmJ7xuNZ70oLn9XC9bU3gCNJV5JOJJ12uvyI/14l3Uny9yml6oDCDxFBAsm9AxlIEPsk6TYHtwAEv0fRsx3mQ95LxF9nUi0AzOnguGq3ALwMaX4kXVTkWgDY02rFHmCYHkp6k/Qo6VzSs6Sv+N1dTPktwDoSadOHonTWDhsi95K+JR2E/gAQjwJ/ZwSAJIrjEgZoh91Et1OxIEKnU91tAHaUi+cx+D/ksNM8wy5ALtYbuh1XxQ8DIAlSbHIVM/sXANozg0oig2MIHMUZkohgu8gO4tO3NA8Z7bOldwaAVc+mFM/7ZyvA7KJE6943LL/PKGpZsrNmF7VaFejeMhtZS3ZVlnh20RzkdTFbvxuQsoz5XpQPji9Q3vUj65qY7KhyVeT9g/+tfQ/AbwYum70de3syR4Y6FLN4B78fNGgZwcR3kQAAAABJRU5ErkJggg=="/><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAATxJREFUSEvtld1NBDEMhOcqASoBOjkqASoBKoFODioBfatMNLGsvad7QDq/ROu/scdO9qALy+HC+XUFOMvwHkW3ko6SbiR9SPoq2c7ZN/cOgMA3SQ8l4aukl6HD9lns35IeJXFO6QAIJAGOVH4fYO9Dh4/t6Oj0eegWkApA5TgTfBeFoMOWQqKkje4AAfDJjhXgJAmKcMAxJUE6O3GmbRaXAJmgoy55rx26EHcx55WJTE8OMztwd9YtVAwlXeAHdVC4bNEePQlO9XxzQlXOwQCzw+zAAHV4psZBucYdVb+5JAmAAakAHXDOo1Jq/y13Anj/k1vrJqcxFA80L5gpmrkTwAEYAaFKAtobOmy+8fhQhGNmkQnQPRHdIHOzvPuclmUudd9xpAqeh594e8qdWz53Y64/nD3qNtv/p+gPB7taGWlWvPYAAAAASUVORK5CYII="/><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANBJREFUSEvtlesNwjAMhL9uQicBNimTwCbAJLAJ3YTqqloYCDhAIvGjlqpGkXVnnx9pqGxNZXxmglDhR4kWQAcsAZ1l9k+B9e5SZ31H4Gz3nmAFnMKQYgeRbIzEE+yn6GOI2EMZrOXmCS6BHDHszUNZtJ8SKCJl+a4mRpEkuAYhKltrgm1GOqM6XqIcAsPNIfpfgh3wlURRF/1cZA2Zhq2EJeegJMFhmua7LlJnSKYSJjnHfZRadiqgyHKWnTD8whPoy2VXIvInjPlFC2WtLtEAOrgkGaLy3nEAAAAASUVORK5CYII="/><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARBJREFUSEvlldENwjAMRK+bwCTAJMAkwCTAJMAksAnoVTFKUydNPvpVSxUtSXz23dXtNHN0M+fXcgG2kk6SVoHiu6RzeD6E+34ppegh6SjpU9CGBFdnnTMAcv5m6ynANyS3ijwc9uQCkKckzvM76AD0d3TyEiqJu8lVHwPuLHmOIvi1IDkXFRkFHj22H2qg6B8pRVQYi9f6mhQBUopak7N/IHANRa0g69SBKUV0gVXN360Ao8ngjQpE3ktCj5YY0eNRxH81VkyBcRj0jCI37HjtcVNtDLxfsmm8hg5m2xKQS40d8DowgelgSods5R5Ai4OYM1NDscfwbIqLNsGqsV0R8uXMp6JOy/2i1dp3/o/+D9mWMhnNBgLxAAAAAElFTkSuQmCC"/></span>
          </div>
          <div className="terms">
            <span>Terms of Use</span>
            <span>Privacy Policy</span>
          </div>
        </div>
    </>
  );
}
