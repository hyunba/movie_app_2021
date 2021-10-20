import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component{
    state = {
        isLoading: true,
        movies: []
    };
    getMovies = async () => {
        const {data: { data :{movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"); // 마지막 줄에 ?sort_by=rating을 추가함으로써 rating 별로 정렬함
        this.setState({ movies, isLoading: false });
    }
    componentDidMount(){
        this.getMovies();
    }
    render() {
        const { isLoading, movies } = this.state;
        return (    
            <section class="container">
                {isLoading ? (
                    <div class="loader">
                        <span class="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div class="movies">
                        {movies.map(movie => (
                            <Movie 
                                key={movie.id}
                                id={movie.id} 
                                year={movie.year} 
                                title={movie.title} 
                                summary={movie.summary} 
                                poster={movie.medium_cover_image}
                                genres = {movie.genres} 
                            />
                            ))
                        }
                    </div>
                )}
            </section>
        );
    }
}

export default App;