import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import SuccessMsg from "./SuccessMsg";
import ErrorMsg from "./ErrorMsg";

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_d7svy1m", "template_pi74hr7", form.current, {
        publicKey: "VBpboKP9Skvjp8Cah",
      })
      .then(
        () => {
          setIsSubmitted(true);
          setIsError(false);
          form.current.reset();
          setTimeout(() => setIsSubmitted(false), 4000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSubmitted(true);
          setIsError(true);
          setTimeout(() => setIsSubmitted(false), 4000);
        }
      );
  };

  return (
    <section className="lg:section lg:h-[96vh]  py-16 overflow-hidden text-black" id="contact">
      <div className="container mx-auto">
        {/* text */}
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h2 className="text-[45px] lg:text-[90px] text-accent leading-none mb-8">
                 “Let’s build something amazing together.”
              </h2>
              <h4 className="text-2xl uppercase  font-medium mb-2 tracking-wide">
                “Email me for full case studies.”
              </h4>
            </div>
          
          </motion.div>
          {/* contact form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("left", 0.3)}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border-2 border-black rounded-2xl flex flex-col gap-y-6 pb-12 p-6 items-start bg-white/25 backdrop-blur-xl shadow-xl"
          > 
            <input
              className="bg-transparent border-b-2 border-black py-3 outline-none w-full focus:border-accent transition-all"
              type="text"
              placeholder="Your Name"
              name="user_name"
              required
            />
            <input
              className="bg-transparent border-b-2 border-black py-3 outline-none w-full focus:border-accent transition-all"
              type="email"
              placeholder="Your Email"
              name="user_email"
              required
            />
            <textarea
              className="bg-transparent border-b-2 border-black  outline-none w-full focus:border-accent transition-all resize-none mb-4"
              placeholder="Your Message"
              name="message"
              required
            ></textarea>
            <button className="btn btn-lg" type="submit">
              Send
            </button>
            {/* set state to show error and success message */}
            {isSubmitted && !isError && <SuccessMsg />}
            {isSubmitted && isError && <ErrorMsg />}
          </motion.form>
        </div>
      </div>
    </section>

  );
};

export default Contact;
