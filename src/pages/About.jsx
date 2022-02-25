import React from "react";
import PageHeader from "../components/PageHeader";
import Feature from "../components/Feature";
import NewsLetter from "../components/NewsLetter";
import { Link } from "react-router-dom";
import a6 from "../img/about/a6.jpg";
import video from "../img/about/1.mp4";

const About = () => {
  return (
    <div>
      <PageHeader
        className="about-heeader"
        title="#know us"
        desc="This where our story started"
      />
      <section id="about-head" className="section-p1">
        <img src={a6} alt="" />
        <div>
          <h2>Who we are</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium, odit. Minima sequi consequuntur nostrum suscipit veniam
            error eum aspernatur labore cupiditate necessitatibus vel id
            voluptatem unde quidem saepe veritatis sint fuga, ad architecto
            mollitia reiciendis molestias eveniet ducimus iste? Dolorum unde,
            ab, commodi quam sunt enim vitae labore in obcaecati, dolores
            reprehenderit fuga sed quia officia architecto molestiae qui fugiat?
          </p>
          <abbr title="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur quaerat.
          </abbr>
          <br />
          <br />

          <marquee
            style={{
              bacgroundColor: "#ccc",
              loop: "-1",
              scrollamount: "5",
              width: "100%",
            }}
          >
            Create stunnin images with as much or as little control as uou like,
            thanks to a choice of basic and creative modes.
          </marquee>
        </div>
      </section>

      <section id="about-app" className="section-p1">
        <h1>
          Download our <Link to="/">App</Link>
        </h1>
        <div className="video">
          <video src={video} autoplay muted loop></video>
        </div>
      </section>
      <Feature />
      <NewsLetter />
    </div>
  );
};

export default About;
