import React from "react";

const About = () => {
  return (
    <section className="min-h-[80%] py-6">
      <div className="layout my-4 py-3">
        <h1 className="text-center text-xl md:text-4xl text-gray-500 font-bold">
          Welcome to AU Services
        </h1>
        <div>
          <h1 className="text-center text-xl font-semibold text-gray-600">
            Our Mission
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto my-4">
            At <span className="text-green-500 font-bold">AU Services</span>, we
            are dedicated to providing top-notch services in the field of
            plumbing, electrical work, and more. Our mission is to simplify your
            life by offering reliable, efficient, and professional services at
            your doorstep.{" "}
          </p>
        </div>

        <div>
          <h1 className="text-center text-xl font-semibold text-gray-600">
            Who We Are
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto my-4">
            We are a passionate team of professionals, committed to making a
            difference in your daily life. With a focus on excellence and
            customer satisfaction, we have assembled a team of skilled plumbers,
            electricians, and other service providers to cater to your specific
            needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
