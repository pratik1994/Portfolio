import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/defaultImage.jpeg";
import PropTypes from "prop-types";
// import { memo } from "react";

function Project({ project }){
  const { name, slug, images, client } = project;
  // console.log(name);
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single room" />
        <div className="price-top">
          <h6>{client}</h6>
          <p>client</p>
        </div>
        <Link to={`/projects/${slug}`} className="btn-primary room-link">
          Details
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}

Project.propTypes = {
  Project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
export default Project;
