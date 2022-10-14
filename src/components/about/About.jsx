import React from 'react';
import './about.css';
import Awar from '../../img/award.png';

const About = () => {
  return (
    <>
      <div className="a">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img src="https://images.pexels.com/photos/6893880/pexels-photo-6893880.jpeg?cs=srgb&dl=pexels-mikhail-nilov-6893880.jpg&fm=jpg" alt="" className="a-img-left" />
          </div>
        </div>

        <div className="a-right">
          <h3 className="a-heading">About Me</h3>
          <p className="a-sub-heading">
            <pre>
              It is a long established fact that reader will be distracted by
              the readable content.
            </pre>
          </p>
          <p className="a-sub-para">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            exercitationem atque labore similique! Suscipit, perferendis! Quam
            odit inventore nulla eius cumque id consequatur harum ipsa, dolores
            assumenda asperiores facere nemo.
          </p>
          <div className="a-container">
            <img src={Awar} alt="" className="a-img" />
            <div className="a-lower-p">
              <p className="first-p">International Design Awards 2021</p>
              <p className="second-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, ad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
