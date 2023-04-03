import React, { useState, useEffect } from "react";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";

import { BsTelephoneFill, BsGithub, BsLinkedin } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { GrMail } from "react-icons/gr";

const About = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const query = '*[_type == "personalinfo"]';

    client.fetch(query).then((data) => {
      setInfo(data);
    });
  }, []);

  const phoneNumberFormat = ({phoneNumber}) => {
      var output = ['(',phoneNumber.slice(0,2),') ', phoneNumber.slice(2,4), '- ', phoneNumber.slice(4)];
      return <p>{output}</p>
  }

  return (
    <>
      {info.map((data) => (
        <div className="container">
          <div className="left">
            {/* <img src={images.businesscard} /> */}
          </div>
          <div className="right">
            <div className="top">
              <h1>{data.name}</h1>
              <h2>{data.title}</h2>
            </div>
            <div className="divider" />
            <div className="middle">
              <div className="contactinfo_container">
                <p className="email">{data.email}</p>
                <GrMail size={20} className="icon"/>
              </div>
              <div className="contactinfo_container">
                <p>(737) 484 - 2504</p>
                <BsTelephoneFill size={20} className="icon"/>
              </div>
              <div className="contactinfo_container">
                <p>United States</p>
                <ImLocation size={20} className="icon"/>
              </div>
            </div>
            <div className="divider" />
            <div className="bottom">
              <div className="contactinfo_container">
                <p>github.com/jkim1998</p>
                <BsGithub size={20} className="icon"/>
              </div>
              <div className="contactinfo_container">
                <p>linkedin.com/in/jkim980</p>
                <BsLinkedin size={20} className="icon"/>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AppWrap(MotionWrap(About, "app__about"), "about");
