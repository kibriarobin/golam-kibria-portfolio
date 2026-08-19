import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-hot-toast";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_27t8c0p",
        "template_eh53o5w",
        form.current,
        {
          publicKey: "XgPFNKtWp11C6E0YA",
        }
      )
      .then(
        () => {
          toast.success("Email sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5">

        {/* Section Header */}
        <div className="text-center mb-16">

          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-blue-400/20 bg-blue-400/5 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Get In Touch
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Connect
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-sm md:text-base opacity-60 leading-relaxed">
            Have a project idea, opportunity, or just want to say hello?
            Feel free to reach out. I'd love to hear from you.
          </p>

        </div>


        {/* Contact Content */}
        <div className="grid lg:grid-cols-5 gap-8 items-stretch">

          {/* Left Side */}
          <div
            className="
              lg:col-span-2
              relative
              p-7 md:p-8
              rounded-2xl
              border border-white/10
              bg-white/[0.025]
              backdrop-blur-xl
              overflow-hidden
            "
          >

            {/* Card Glow */}
            <div className="
              absolute -top-20 -right-20
              w-48 h-48
              bg-blue-500/10
              blur-[80px]
              rounded-full
            " />

            <div className="relative">

              <div className="
                w-12 h-12
                rounded-xl
                flex items-center justify-center
                bg-blue-400/10
                border border-blue-400/20
                text-blue-400
                text-xl
                mb-5
              ">
                <FaEnvelope />
              </div>

              <h3 className="text-2xl font-bold">
                Let's talk!
              </h3>

              <p className="mt-3 text-sm opacity-60 leading-6">
                I'm always open to discussing new projects, creative ideas,
                and opportunities to be part of your team.
              </p>


              {/* Contact Information */}
              <div className="mt-8 space-y-4">

                {/* Phone */}
                <a
                  href="tel:+8801871793020"
                  className="
                    group
                    flex items-center gap-4
                    p-4
                    rounded-xl
                    border border-white/10
                    bg-white/[0.02]
                    transition-all duration-300
                    hover:border-blue-400/30
                    hover:bg-blue-400/5
                  "
                >
                  <div className="
                    w-10 h-10
                    shrink-0
                    rounded-lg
                    flex items-center justify-center
                    bg-blue-400/10
                    text-blue-400
                    group-hover:scale-105
                    transition-transform
                  ">
                    <FaPhoneAlt className="text-sm" />
                  </div>

                  <div>
                    <p className="text-xs opacity-40">
                      Phone
                    </p>
                    <p className="text-sm font-medium">
                      +880 1871793020
                    </p>
                  </div>
                </a>


                {/* Email */}
                <a
                  href="mailto:kibriarobin97@gmail.com"
                  className="
                    group
                    flex items-center gap-4
                    p-4
                    rounded-xl
                    border border-white/10
                    bg-white/[0.02]
                    transition-all duration-300
                    hover:border-blue-400/30
                    hover:bg-blue-400/5
                  "
                >
                  <div className="
                    w-10 h-10
                    shrink-0
                    rounded-lg
                    flex items-center justify-center
                    bg-blue-400/10
                    text-blue-400
                    group-hover:scale-105
                    transition-transform
                  ">
                    <FaEnvelope className="text-sm" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs opacity-40">
                      Email
                    </p>

                    <p className="text-sm font-medium truncate">
                      kibriarobin97@gmail.com
                    </p>
                  </div>
                </a>


                {/* WhatsApp */}
                <a
                  href="https://wa.me/8801871793020"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group
                    flex items-center gap-4
                    p-4
                    rounded-xl
                    border border-green-400/20
                    bg-green-400/5
                    transition-all duration-300
                    hover:border-green-400/40
                    hover:bg-green-400/10
                  "
                >
                  <div className="
                    w-10 h-10
                    shrink-0
                    rounded-lg
                    flex items-center justify-center
                    bg-green-400/10
                    text-green-400
                    group-hover:scale-105
                    transition-transform
                  ">
                    <FaWhatsapp className="text-lg" />
                  </div>

                  <div>
                    <p className="text-xs opacity-40">
                      WhatsApp
                    </p>

                    <p className="text-sm font-medium text-green-400">
                      Chat with me
                    </p>
                  </div>
                </a>

              </div>

            </div>

          </div>


          {/* Right Side - Form */}
          <div
            className="
              lg:col-span-3
              p-7 md:p-8
              rounded-2xl
              border border-white/10
              bg-white/[0.025]
              backdrop-blur-xl
            "
          >

            <div className="mb-7">

              <h3 className="text-2xl font-bold">
                Send Me a Message
              </h3>

              <p className="mt-2 text-sm opacity-50">
                Fill out the form below and I'll get back to you soon.
              </p>

            </div>


            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5"
            >

              {/* Name */}
              <label className="block">

                <span className="block mb-2 text-sm font-medium">
                  Your Name
                </span>

                <input
                  type="text"
                  placeholder="Enter your name"
                  name="user_name"
                  required
                  className="
                    w-full
                    px-4 py-3
                    rounded-xl
                    border border-white/10
                    bg-white/[0.03]
                    outline-none
                    text-sm
                    placeholder:opacity-30
                    transition-all duration-300
                    focus:border-blue-400/50
                    focus:bg-blue-400/[0.03]
                    focus:ring-2
                    focus:ring-blue-400/10
                  "
                />

              </label>


              {/* Email */}
              <label className="block">

                <span className="block mb-2 text-sm font-medium">
                  Email Address
                </span>

                <input
                  type="email"
                  placeholder="Enter your email"
                  name="user_email"
                  required
                  className="
                    w-full
                    px-4 py-3
                    rounded-xl
                    border border-white/10
                    bg-white/[0.03]
                    outline-none
                    text-sm
                    placeholder:opacity-30
                    transition-all duration-300
                    focus:border-blue-400/50
                    focus:bg-blue-400/[0.03]
                    focus:ring-2
                    focus:ring-blue-400/10
                  "
                />

              </label>


              {/* Message */}
              <label className="block">

                <span className="block mb-2 text-sm font-medium">
                  Message
                </span>

                <textarea
                  rows="5"
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  className="
                    w-full
                    px-4 py-3
                    rounded-xl
                    border border-white/10
                    bg-white/[0.03]
                    outline-none
                    text-sm
                    resize-none
                    placeholder:opacity-30
                    transition-all duration-300
                    focus:border-blue-400/50
                    focus:bg-blue-400/[0.03]
                    focus:ring-2
                    focus:ring-blue-400/10
                  "
                />

              </label>


              {/* Submit */}
              <button
                type="submit"
                className="
                  group
                  w-full
                  flex items-center justify-center gap-2
                  px-6 py-3
                  rounded-xl
                  bg-gradient-to-r
                  from-blue-500
                  to-cyan-500
                  text-white
                  font-semibold
                  text-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                  hover:shadow-blue-500/20
                  active:translate-y-0
                "
              >
                <FaPaperPlane className="
                  text-xs
                  transition-transform duration-300
                  group-hover:translate-x-1
                " />

                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;