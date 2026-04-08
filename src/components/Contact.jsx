import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import SuccessMsg from "./SuccessMsg";
import ErrorMsg from "./ErrorMsg";

const quickContacts = [
  { label: "Email", value: "manishjangra761@gmail.com", href: "mailto:manishjangra761@gmail.com" },
  { label: "Phone", value: "+91 9817558402", href: "tel:+919817558402" },
  { label: "LinkedIn", value: "linkedin.com/in/manishjangra2002", href: "https://www.linkedin.com/in/manishjangra2002" },
  { label: "GitHub", value: "github.com/manishjangra761", href: "https://github.com/manishjangra761" },
  { label: "Availability", value: "Open to full-time roles & opportunities" },
];

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
    <section className="section" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="flex-1 flex flex-col justify-center gap-5"
          >
            <p className="text-sm uppercase tracking-[0.18em] text-slate-400 font-semibold">Contact</p>
            <h2 className="h2">Let’s work together.</h2>
            <p className="text-lg text-slate-200 max-w-xl leading-8">
  I'm open to full-time roles, internships, and collaboration opportunities.
  Feel free to reach out if you'd like to work together or discuss a project.
</p>
            <div className="grid sm:grid-cols-2 gap-3 max-w-xl">
              {quickContacts.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-800 bg-[#0f172a]/90 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
                >
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-400">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="text-sm font-semibold text-slate-50 hover:text-sky-300 break-words"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-slate-50">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="flex-1 rounded-2xl border border-slate-800 bg-[#0f172a]/90 p-6 shadow-[0_18px_48px_rgba(0,0,0,0.45)] flex flex-col gap-5"
          >
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-200" htmlFor="user_name">Name</label>
              <input
                className="w-full rounded-xl border border-slate-700 bg-[#0b1324] px-4 py-3 text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-900 transition"
                type="text"
                placeholder="Your name"
                name="user_name"
                id="user_name"
                required
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-200" htmlFor="user_email">Email</label>
              <input
                className="w-full rounded-xl border border-slate-700 bg-[#0b1324] px-4 py-3 text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-900 transition"
                type="email"
                placeholder="you@example.com"
                name="user_email"
                id="user_email"
                required
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-200" htmlFor="message">Message</label>
              <textarea
                className="w-full rounded-xl border border-slate-700 bg-[#0b1324] px-4 py-3 text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-900 transition resize-none min-h-[140px]"
                placeholder="Tell me about your opportunity or project..."
                name="message"
                id="message"
                required
              ></textarea>
            </div>
            <button className="btn h-12 px-6 text-base font-semibold self-start" type="submit">
              Send Message
            </button>
            {isSubmitted && !isError && <SuccessMsg />}
            {isSubmitted && isError && <ErrorMsg />}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
