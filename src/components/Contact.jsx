import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
// _EKJhgtRBNxFNudxy
// service_t9xt8ei
// template_zvigz6c
const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // _EKJhgtRBNxFNudxy
    // service_t9xt8ei
    //
    emailjs
      .send(
        "service_t9xt8ei",
        "template_zvigz6c",
        {
          from_name: form.name,
          to_name: "Akshat",
          from_email: form.email,
          to_email: "www.akshatagarwal123klj@gmail.com",
          message: form.message,
        },
        "4HLV3McGMyLiDofcs"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you ill, get to you as soon as possible");

          setForm({
            name: "",
            email: "",
            message: "",
          })
        },
        (error) => {
          console.log(error);
          alert("Something went wrong");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="What's your name"
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email </span>
            <input
              type="email"
              name="email"
              placeholder="What's your email ?"
              value={form.email}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Waht do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium "
            />
          </label>
          <button
            className="bg-tertiary py-3 outline-none px-3 font-bold shadow-md rounded-xl showdow-primary w-fit"
            type="submit"
          >
            {loading ? "Sending" : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[500px] h-[300px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
