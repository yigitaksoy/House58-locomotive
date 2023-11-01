import React from "react";

const Footer = () => {
  return (
    <section id="footer" className="bg-house-greenlight" data-scroll-section>
      <div className="fixed-target" id="fixed-target"></div>
      <div
        className="fixed-element grid items-center"
        data-scroll
        data-scroll-sticky
        data-scroll-target="#fixed-target"
      >
        <p
          className="text-f-purple text-center text-house-white lg:text-8xl text-3xl font-heavy"
          data-scroll
        >
          Hey There! 👋
        </p>
      </div>
    </section>
  );
};

export default Footer;
