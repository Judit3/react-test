import React from "react";

// function FunctionalGreeting() {
//   return <h1>Hello</h1>
// }

const FunctionalGreetingWithProps = (props) => {
    console.log(props);
    <h1>Hello you, {props.greeting}</h1>;
}

export default FunctionalGreetingWithProps;