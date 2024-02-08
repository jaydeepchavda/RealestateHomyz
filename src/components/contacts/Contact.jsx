import React from "react";
import './Contact.css'
import { MdCall } from "react-icons/md";
import {BsFillChatDotsFill} from 'react-icons/bs';

import {HiChatBubbleBottomCenter} from 'react-icons/hi2';

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy way to contact us</span>
          <span className="secondaryText">
            We always ready to help by providing the best service for you.
            <br />
            We believe a good blace to live can make your life better.
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              {/* first mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText"> Call</span>
                    <span className="secondaryText">+91 9712544436</span>
                  </div>
                </div>
                <div className="flexColStart button">Call Now</div>
              </div>
              {/* first mode end */}

              {/* second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText"> Chat</span>
                    <span className="secondaryText">+91 9712544436</span>
                  </div>
                </div>
                <div className="flexColStart button">Chat Now</div>
              </div>
              {/* end second mode */}
              
            </div>

            {/* second row */}
            <div className="flexStart row">

              {/* third mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText"> Video Call</span>
                    <span className="secondaryText">+91 9712544436</span>
                  </div>
                </div>
                <div className="flexColStart button">Video Call Now</div>
              </div>
              {/* third mode end */}

              {/* fourth mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText"> Message</span>
                    <span className="secondaryText">+91 9712544436</span>
                  </div>
                </div>
                <div className="flexColStart button">Text Message Now</div>
              </div>
              {/* end second mode */}
              
            </div>
          </div>

        </div>
        {/* right side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
