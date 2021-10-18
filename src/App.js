import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component{
    state = {
        isLoading: true,
        movies: []
    };
    // getMovies를 가져오려면 시간이 걸림 그걸 기다리기 위해서
    // async 함수가 비동기라고 지정. 이 말은 "너는 이걸 기다려야 해"
    getMovies = async () => {
        // axios 앞에 await을 붙여주면서 axios가 끌날 때까지 기다린다.
        const {data: { data :{movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"); // 마지막 줄에 ?sort_by=rating을 추가함으로써 rating 별로 정렬함
        this.setState({ movies, isLoading: false });
    }
    // 처음 render를 하게 되면 호출되는 life cycle method = componentDidMount
    componentDidMount(){
        this.getMovies();
    }
    render() {
        const { isLoading, movies } = this.state;
        return <div>{isLoading 
                        ? "Loading..." 
                        : movies.map(movie => (
                            <Movie 
                                key={movie.id}
                                id={movie.id} 
                                year={movie.year} 
                                title={movie.title} 
                                summary={movie.summary} 
                                poster={movie.medium_cover_image} 
                            />
                        ))}
                </div>; // 삼항연산자로 isLoading이 true면 Loading을 아니면 we are ready 출력
    }
}

export default App;