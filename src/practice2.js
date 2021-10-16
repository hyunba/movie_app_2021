import React from "react";
import PropTypes from "prop-types";

class practice2 extends React.Component{
    
    state = {
        count: 0
    };
    add = () => {
        this.setState(current => ({ count: current.count + 1 }));
    };
    minus = () => {
        this.setState(current => ({ count: current.count - 1 })); // ({ count: this.state.count - 1 });는 의존성에 문제가 있어서 좋은 코드는 아님.
    };
    // 매 순간 우리가 setState를 호출할 때마다 react는 새로운 state와 함께 render function을 호출한다.
    render() {
        return(
            <div>
                <h1>The number is {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    //react는 자동적으로 class component의 render method를 실행한다.
    }
    //React.Component는 return을 가지고 있지 않다. 그 이유는 function이 아니기 때문
}

export default practice2;