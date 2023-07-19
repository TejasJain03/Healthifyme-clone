import  { useState,useEffect } from "react";
import './Navbar.css';
function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="nav-logo">
      <img src="https://healthifyme.imgix.net/static/images/home_website/landing/assets/HealthifyMeLogosvg.svg?auto=format" alt="logo" width="170" height="28"></img>
      </div>
      <div className="nav-buttons">
        {isMobile ? (
          <button style={{fontSize:"11px",fontWeight:"600"}}>Get the App</button>
        ) : (
          <>
            <button><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAQJJREFUSEvVle0NwjAMRK+bwCYwCTAJMAkwCWwCTAJ6UoJS4nzS/sASqkQjP/vOcQfNHMPM+fUL4CBpI2mZK7IXcJW0knSWtJsacJK0dUnXkm5TA+6SFq5yOshGSSISIQXhk6E9VT9cJzyToBwglMJXSTJ+Hhr+f5EEfBQpgDexpMD3eyaKAj5hATCQ6lvDNNwCWNKUYMlxtQB+SkpJw/dHS38OWIBXS2Z3tgnQYzBjiwdRTOUBiatN7p0ixjO6C1YH3F6M7olIqtRF6+0ikikFoAvM5lkbptG5XdQiFfqbH56abbp3y40Kn26TAudrxtLjDnCTRzvIt10C1MqTPPf/gDdiHjAZ8BAcCQAAAABJRU5ErkJggg=="/>App Store</button>
            <button><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOxJREFUSEvFldENwjAMRF83gU1gEsQkwCYwCXQSYBLQSbUUIidxS6vms0L3chf76Fj4dAvrsxrgCTyAC/D6x6Xn4AxcAUEkfgP0bdLxAJ/h5gaR8GRQCSBRxZNCDHQc4gs5qgFKEH0XOPQ+LUANotjMZdFNBNCK6wC8S4MQBeQQ3V5vcQJ2w/VdR2MAKWSTiVtEguzT3RkLMAEJak+8s50KSGPpoyMcdeBlbhN0r217BOCJWzQ/cXh5tQAlcRWhpqhZhDVAaRRnqYpcfNay0/ilS6THnLWubYm0/iq1Zs61Wl3tLzPU9ZEfLe7gC/SfVxkz15vAAAAAAElFTkSuQmCC"/>Play Store</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
