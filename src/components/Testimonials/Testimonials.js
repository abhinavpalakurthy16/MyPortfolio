import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import TestimonialStyle from "./TestimonialsStyles";

export default class Testimonials extends Component {
  render() {
    return (
    <>
      <TestimonialStyle />
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="/images/user.png" />
          <div className="myCarousel">
            <h3>Micheal Morrissey</h3>
            <h4>Digital Experience Lead</h4>
            <p>
            Was grateful for the opportunity to work with Abhi. His ability to keep development commitments and constantly drive himself to continuously learn made him a dev that could be relied on to take any stories off our agile boards (front end and back end) and complete. Additionally his constant attention to detail ensured the stories were built to spec and of high quality and appreciated how much he cared about the products and features he supported by engaging in conversations on what dev patterns should be implemented to support the work (both short term and long term).
            </p>
          </div>
        </div>

        <div>
          <img src="/images/user.png" />
          <div className="myCarousel">
            <h3>Phaneendra</h3>
            <h4>Principal Software Engineer</h4>
            <p>
            Abhinav is a very quicker learner in respect of the technology and tools that we used on the project at CVS Health. He is a good communicator and produced very good written documentation for the development work he did. His contribution to the project was very valued and team player for the project. 
            </p>
          </div>
        </div>

        <div>
          <img src="/images/user.png" />
          <div className="myCarousel">
            <h3>Jai</h3>
            <h4>Developer</h4>
            <p>
            Abhinav is an excellent recourse and a master at javascript programming. Abhinav has been a tremendous asset to the team. He is open, helping, and very professional. It’s a pleasure and an honor to recommend abhinav to anyone who wants to hire him.
            </p>
          </div>
        </div>
        <div>
          <img src="/images/user.png" />
          <div className="myCarousel">
            <h3>Sumanth</h3>
            <h4>Developer</h4>
            <p>
            I had the privilege of working with abhinav in Development team for more than one year at Cvs. Abhinav is proactive, result oriented, responsible and technically sound employee and he is always ready to put all his energy and time to get the job done. He has an exceptional troubleshooting and analytical skill in Web development technologies. As an Independent Contractor or as an employee, you will find abhinav makes a great addition to your team! It is an honor for me to recommend and endorse him.
            </p>
          </div>
        </div>
      </Carousel></>
    );
  }
}