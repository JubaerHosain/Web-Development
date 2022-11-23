// javascript xml
const Increment = () => {
    // const reactState = React.useState(0);
    const [counter, setCounter] = React.useState(0);

    return (
        <div id="container">
            <h1 id="display"> {counter} </h1>
            <button id="button" onClick={() => setCounter(counter + 1)}>Increment +</button>
        </div>
    );
};


const domContainer = document.querySelector("#root");

// ReactDOM.render(Increment(), domContainer);
ReactDOM.render(
    <div id="container">
        <Increment />
        <Increment />
        <Increment />
        <Increment />
        <Increment />
        <Increment />
    </div>
    , domContainer
);
