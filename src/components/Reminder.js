import { useRef } from "react";
import emailjs from "@emailjs/browser";
import graphic from "./images/contact-anim.gif";
import "./styles/reminder.css";
import AIWriter from "react-aiwriter";

export default function Reminder() {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "contact_service",
        "template_4oa2a1b",
        refForm.current,
        "RJy48fHoAV--GvoIN"
      )

      .then(
        () => {
          alert("Message has been sent successfully!!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send your message! Please try again...");
        }
      );
  };
  return (
    <>
      <div className="main mt-5">
        <div className="row d-flex mx-auto">
          <div className="text col-sm-6 px-5">
            <div className="codebird">
              <h1 className="text-brown">
                Rem<span className="text-warning">in</span>der System
              </h1>
            </div>
            <div className="sub-text my-5">
              <AIWriter delay={125}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia dolorum voluptate, laudantium accusantium deserunt eos
                explicabo, ipsa exercitationem asperiores voluptatum illum quasi
                id, sequi impedit nobis. Doloremque corporis veritatis neque?
              </AIWriter>
            </div>
            <div className="contact-form mt-5">
              <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input
                      className="rounded-pill"
                      type="text"
                      name="name"
                      id=""
                      placeholder="Name of Pet"
                      required
                    />
                  </li>
                  <li className="half">
                    <input
                      className="rounded-pill"
                      type="text"
                      name="text"
                      id=""
                      placeholder="Set timing"
                      required
                    >
                        </input>
                  </li>
                  <li>
                    <input
                      className="rounded-pill"
                      type="text"
                      placeholder="Reason of alarm"
                      name="Reason of alarm"
                      required
                    />
                    
                  </li>
                  <li>
                    <textarea
                      className="rounded"
                      placeholder="Messsage"
                      name="message"
                      id=""
                      cols="30"
                      rows="10"
                      required
                    ></textarea>
                  </li>
                  <li>
                    <input
                      type="submit"
                      className="flat-button button btn bg-warning"
                      value="Submit"
                    />
                  </li>
                </ul>
              </form>
            </div>
          </div>

          <div className="anim col-sm-6 img-fluid mx-auto d-flex">
            <img
              className="home-anim rounded img-fluid mx-auto d-flex"
              src={graphic}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
