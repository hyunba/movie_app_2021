import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// 앞에서 한 App.js에서는 state가 필요해서 class component를 해주었지만
// Movie.js에서는 state가 필요하지 않아 function component를 해준다.
function Movie({year, title, summary, poster, genres}){ // propTypes에서 정보를 가져와서 movie component에 준비한다
    // class에 style을 주고 싶다면, style={{backgroundColor: "red"}}  이런 식으로 주면된다.
    // 다른 방식으로는 css 파일을 만들면된다.
    return (
        <div class="movie">
            <img src={poster} alt={title} title={title} />
            <div class="movie__data">
                <h3 class="movie__title">{title}</h3>
                <h5 class="movie__year">{year}</h5>
                { <ul class="movie__genres">
                    {genres.map((genre, index) => (
                        <li key={index} class="genres__genre">
                            {genre}
                        </li>
                    ))}
                </ul> }
                <p class="movie__summary">{summary}</p>
                
            </div>
        </div>
    );
}

// 우리가 얻어올 prop을 찾는다
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;