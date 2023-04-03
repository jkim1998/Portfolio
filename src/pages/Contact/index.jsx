import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { AiFillGithub, AiFillLinkedin, AiOutlineBold } from "react-icons/ai";
import { BsFillPersonFill, BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

import Navbar from "../../components/Navbar/Navbar";
import { AppWrap, MotionWrap } from "../../wrapper";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";

import "./Contact.css";

const Contact = () => {
  const [contact, setContact] = useState([]);
  const form = useRef();
  const [status, setStatus] = useState("");
  const [error_email, setErrorEmail] = useState("");
  const [thispage, setThispage] = useState(false);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const query = '*[_type == "personalinfo"]';

    client.fetch(query).then((data) => {
      setInfo(data);
    });
  }, []);

  const sendEmail = (e) => {
    //prevent re-render
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_CONTACT_SERVICE,
        process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE,
        form.current,
        process.env.REACT_APP_EMAILJS_CONTACT_API
      )
      .then(
        (result) => {
          console.log(result.text);
          // console.log("message sent");
          setStatus("SUCCESS");
        },
        (error) => {
          console.log(error.text);
          setStatus("FAILED");
        }
      );
  };
  // success message time out after certain time(3000)
  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);

      document.getElementById("form").reset();
    } else {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  const isThisPage = () => {
    setThispage(true);
    setTimeout(() => {
      setThispage(false);
    }, 1000);
  };

  return (
    <>
      <div className="content_contact">
        <div className="banner">
          <h1>Contact</h1>
        </div>
        <div className="main_page">
          <div className="confirmation">
            {status === "SUCCESS" && renderAlert_success()}
            {status === "FAILED" && renderAlert_fail()}
            <form ref={form} onSubmit={sendEmail} id="form">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required="required"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required="required"
                onInvalid={invalidEmail()}
              />
              <textarea name="message" placeholder="Message"></textarea>
              <input type="submit" value="Send" />
            </form>
          </div>

          {info.map((data) => (
            <div className="contactinfo">
              <div className="personalInfo">
                <div className="contactinfo_container">
                  <BsFillPersonFill />
                  <p>{data.name}</p>
                </div>
                <div className="contactinfo_container">
                  <BsTelephoneFill /> <p>(737) 484 - 2504</p>
                </div>
                <div className="contactinfo_container">
                  <GrMail />
                  <p>{data.email}</p>
                </div>
              </div>
              <div className="links">
                <a href={data.github} target="_blank" rel="noreferrer">
                  <AiFillGithub size={40} id="github" />
                </a>
                <a href={data.linkedin} target="_blank" rel="noreferrer">
                  <AiFillLinkedin size={40} id="linkedin" />
                </a>
                {!thispage ? (
                  <a onClick={isThisPage}>
                    <AiOutlineBold size={40} id="" />
                  </a>
                ) : (
                  <p>It is this page!</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
const renderAlert_success = () => (
  <div className="confirmation">
    <p>Your message has been sent</p>
  </div>
);
const renderAlert_fail = () => (
  <div className="confirmation">
    <p>Error. Please try again later</p>
  </div>
);

const invalidEmail = () => {
  <div>
    <p>this is required</p>
  </div>;
};
export default AppWrap(
  MotionWrap(Contact, "app__footer"),
  "contact",
  "app__whitebg"
);
