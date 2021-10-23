import React from "react";
import { HashRouter, Route } from "react-router-dom"
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

// 라우터는 렌더링을 연속으로 하는데 이것을 방지하기 위해서 이 라우터 아니면 안쓰겠다는 의미인 exact를 사용해준다. 
function App() {
    return (
        <HashRouter>
            <Navigation />
            <Route path="/" exact={true} component={Home} /> 
            <Route path="/about" component={About} />
            <Route path="/movie-detail" component={Detail} />
        </HashRouter>
    );
}

export default App;