import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import NewsLetter from "../components/NewsLetter";
import img1 from "../img/people/1.png";
import img2 from "../img/people/2.png";
import img3 from "../img/people/3.png";

const Contact = () => {
  const [map, setMap] = useState(true);

  useEffect(() => {});
  return (
    <div>
      <PageHeader
        className="about-heeader"
        title="#Let's talk"
        desc="Leave us a message and we will get back to you"
      />

      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit our office location or contact us today</h2>
          <h3>Head Office</h3>
          <div>
            <li>
              <i className="fal fa-map"></i>
              <p>574 Jacob Street Gezina</p>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <p>christianlambo26@gmail.com</p>
            </li>
            <li>
              <i className="fas fa-phone-alt"></i>
              <p>0817439255</p>
            </li>
            <li>
              <i className="far fa-clock"></i>
              <p>Monday to Saturday: 09h00 - 17h00</p>
            </li>
          </div>
        </div>
        <div className="map">
          {/* <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.5705030848803!2d28.204883415543463!3d-25.71864075065534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebfd8b2c2c4ce1b%3A0xe2bab8d9fdcfbf6!2sGezina%20Galleries!5e0!3m2!1sen!2sza!4v1643311427861!5m2!1sen!2sza"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe> */}
        </div>
      </section>

      <section id="form-details">
        <form action="">
          <span>LAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input type="text" placeholder="Enter You Name" />
          <input type="text" placeholder="Enter You Email" />
          <input type="text" placeholder=" Subject" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button class="normal">Submit</button>
        </form>

        <div class="people">
          <div>
            <img src={img1} alt="" />
            <p>
              <span>John Doe</span>Senior Marketing Manager <br />
              Phone: 081 743 9255 <br />
              Email: christianlambo26@gmail.com
            </p>
          </div>
          <div>
            <img src={img2} alt="" />
            <p>
              <span>John Doe</span>Senior Marketing Manager <br />
              Phone: 081 743 9255 <br />
              Email: christianlambo26@gmail.com
            </p>
          </div>
          <div>
            <img src={img3} alt="" />
            <p>
              <span>John Doe</span>Senior Marketing Manager <br />
              Phone: 081 743 9255 <br />
              Email: christianlambo26@gmail.com
            </p>
          </div>
        </div>
      </section>

      <NewsLetter />
    </div>
  );
};

export default Contact;
