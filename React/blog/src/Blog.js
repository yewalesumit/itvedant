import React from "react";
import "./Blog.css";

function Blog() {
  const title = "10 Tips for Effective Time Management";
  const author = "John Doe";
  const description =
    "In today's fast-paced world, effective time management is crucial for success. Learn 10 tips to improve your time management skills and boost productivity.";
  const image = "https://tse2.mm.bing.net/th/id/OIP.TTyA7_g8uKvhIxyKwVRflwHaEc?rs=1&pid=ImgDetMain&o=7&rm=3";

  const containerStyle = { border: "1px solid gray", padding: "15px", width: "300px" };
  const titleStyle = { color: "blue" };
  const authorStyle = { color: "green" };
  const descStyle = { color: "black" };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>{title}</h2>
      <p style={authorStyle}>By {author}</p>
      <img src={image} alt="Blog" className="blog-image" />
      <p style={descStyle}>{description}</p>
    </div>
  );
}

export default Blog;