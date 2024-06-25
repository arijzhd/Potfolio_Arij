import React, { useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import "../app.css";

const ContactSkillsSection = () => {
  const counters = [
    { title: 'HTML', percentage: 89 },
    { title: 'CSS', percentage: 47 },
    { title: 'JavaScript', percentage: 56 },
    { title: 'python', percentage: 40 },
  ];

  const observer = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    observer.current = new IntersectionObserver(handleIntersection, options);

    // Start observing each skill element
    document.querySelectorAll('.skill').forEach((element) => {
      observer.current.observe(element);
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Animate the skill counter when it becomes visible
        const target = entry.target;
        const percentage = target.dataset.percentage;

        if (percentage) {
          const counterElement = target.querySelector('.counter');
          counterElement.innerText = percentage;

          // You can customize the CountUp component options here
          // Refer to the react-countup documentation for more options
        }
      }
    });
  };

  return (
    <section className="down-box" id="contact">
      <div className="contactSkills">
        <div className="contact-info">
          <div className="main-text">
            <h2 className="heading">Contact Me</h2>
            <span>get in touch with me</span>
          </div>
          <form action="#">
            <div className="input-box">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea name="#" id="" cols="30" rows="10"></textarea>
            <div className="formBtn">
              <button type="submit" className="btn">
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="skills">
          <div className="container">
            <div className="skillBox">
              <div className="main-text">
                <h2 className="heading">My Skills</h2>
                <span>Let Me Help you</span>
              </div>
              <div className="skill-wrap">
                {counters.map((skill, index) => (
                  <div className="skill" key={index} data-percentage={skill.percentage}>
                    <div className="outer-circle">
                      <div className="inner-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="180px" height="180px">
                          <defs>
                            <linearGradient id={`GradientColor-${index}`}>
                              <stop offset="0%" stopColor="#e91e63" />
                              <stop offset="100%" stopColor="#673ab7" />
                            </linearGradient>
                          </defs>
                          <circle cx="85" cy="85" r="75" stroke="url(#GradientColor-${index})" strokeLinecap="round" />
                        </svg>
                        <h2 className="counter">
                          <CountUp end={skill.percentage} duration={2} />
                          <span>%</span>
                        </h2>
                      </div>
                    </div>
                    <div className="sk-title">{skill.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSkillsSection;
