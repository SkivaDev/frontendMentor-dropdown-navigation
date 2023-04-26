import React from "react";
import databiz_logo from "../../assets/images/client-databiz.svg";
import phile_logo from "../../assets/images/client-audiophile.svg";
import meet_logo from "../../assets/images/client-meet.svg";
import maker_logo from "../../assets/images/client-maker.svg";
import hero_mobile from "../../assets/images/image-hero-mobile.png";
import hero_desktop from "../../assets/images/image-hero-desktop.png";
import "./section.scss";

function Section() {
  return (
    <section className="section">
      <div className="main-container">
        <div className="main-left">
          <h1 className="main-heading">
            Make <br /> remote work
          </h1>
          <p className="main-content">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="primary-btn">Learn more</button>
          <div className="logos">
            <img src={databiz_logo} alt="databiz_logo" />
            <img src={phile_logo} alt="phile_logo" />
            <img src={meet_logo} alt="meet_logo" />
            <img src={maker_logo} alt="maker_logo" />
          </div>
        </div>
        <div className="main-right">
          <picture>
            <source media="(max-width: 800px)" srcset={hero_mobile} />
            <img src={hero_desktop} alt="hero_desktop" />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default Section;
