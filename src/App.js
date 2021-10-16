import React from "react";
import PropTypes from "prop-types";

class App extends React.Component{
    state = {
        isLoading: true,
        movies: []
    };
    // 처음 render를 하게 되면 호출되는 life cycle method = componentDidMount
    componentDidMount(){
        setTimeout(() => {
            this.setState({ isLoading: false});
        }, 6000); //6초 뒤에 We are ready로 바뀜.
    }
    render() {
        const { isLoading } = this.state;
        return <div>{isLoading ? "Loading..." : "We are ready"}</div>; // 삼항연산자로 isLoading이 true면 Loading을 아니면 we are ready 출력
    }
}

export default App;