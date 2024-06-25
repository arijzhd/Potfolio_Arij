import React, { useEffect, useRef } from "react";
import "../../app.css"; // Assuming this file contains global styles
import cercle from "../../assests/shapes/circle.png";
import test from "../../assests/img/WhatsApp Image 2024-06-22 at 21.15.06 (1).jpeg";
import test1 from "../../assests/img/WhatsApp Image 2024-06-22 at 21.15.06 (1)da.jpeg";
import test2 from "../../assests/img/dqs.jpeg";

const blogPosts = [
  {
    imgSrc: test,
    title: "Certification",
    date: "Sunday, Jan 14, 2023",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, illo.",
  },
  {
    imgSrc: test1,
    title: "Mobile App Landing Page",
    date: "Sunday, Jan 14, 2023",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, illo.",
  },
  {
    imgSrc: test2,
    title: "Mobile App Landing Page",
    date: "Sunday, Jan 14, 2023",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, illo.",
  },
  // Add more blog posts as needed
];

const BlogSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 2, behavior: "smooth" }); // Adjust left value for scrolling speed
      }
    };

    const interval = setInterval(scroll, 10); // Scroll every 10 milliseconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="blog" id="blog">
      <div className="main-text">
        <h2 className="heading">Blog</h2>
        <span>Latest News & Post</span>
      </div>

      <div className="blog-box">
        <div className="cards" ref={scrollRef}>
          {blogPosts.map((post, index) => (
            <div
              className="card"
              style={{ width: "400px", minWidth: "400px", marginLeft: "32px" }}
              key={index}
            >
              <div className="card-top">
                <img src={post.imgSrc} alt="" />
              </div>
              <div className="card-info">
                <h2>{post.title}</h2>
                <span className="date">{post.date}</span>
                <p className="excerpt">{post.excerpt}</p>
                <a href="#" className="readMore">
                  Explore More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="showcase">
        <img src={cercle} className="ring" alt="ring" />
        <img src={cercle} className="second-circle" alt="second-circle" />
        <img src={cercle} className="circle" alt="circle" />
        <img src={cercle} className="half-ring" alt="half-ring" />
      </div>
    </section>
  );
};

export default BlogSection;
