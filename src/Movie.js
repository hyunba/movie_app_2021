import React from "react";
import PropTypes from "prop-types";

// 앞에서 한 App.js에서는 state가 필요해서 class component를 해주었지만
// Movie.js에서는 state가 필요하지 않아 function component를 해준다.
function Movie({id, year, title, summary, poster}){ // propTypes에서 정보를 가져와서 movie component에 준비한다
    return <h4>{title}</h4>;
}

// 우리가 얻어올 prop을 찾는다
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;