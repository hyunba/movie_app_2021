import React from "react";
import PropTypes from "prop-types";

function Food({ name, rating }) {
  return(
  <div>
    <h3>I love {name}</h3>
    <h2>{rating} / 5</h2>
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number
}

const foodILike = [
  {
    name: "Kimchi",
    rating: 5.0
  },
  {
    name: "Samgyeopsal",
    rating: 4.9
  },
  {
    name: "Bibimbap",
    rating: 4.2
  },
  {
    name: "Doncasu",
    rating: 5.0
  }
];

function renderFood(dish) {
  return(
    <Food name = {dish.name} rating = {dish.rating} />
  );
}

function practice() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
      
}

export default practice;
