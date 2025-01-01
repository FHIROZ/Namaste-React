//-------------Hello World---------------------------------------------------------------
// // let variable=document.getElementById("element");
// variable.innerHTML="Hello World!!";
// console.log(variable.appendChild);

// const heading=React.createElement(
//     "h1",
//     {id:"heading"},
//     "Hello World from React");
// let root=ReactDOM.createRoot(document.getElementById("root")[0]);
// root.render(heading);

// const heading = React.createElement("h1", { id: "heading" }, "Hello World from React");
// const root = ReactDOM.createRoot(document.querySelector(".root"));
// root.render(heading);


//------------------------------Nested Elements Creating using React-------------------------------

const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{id:"heading"},"I am h1 tag"),
        React.createElement("p",{id:"p1"},"I am p tag"),
        React.createElement("em",{id:"e"},"I am emphasized tag"),
    ]
    ))
)
const root=ReactDOM.createRoot(document.querySelector(".root"));
root.render(parent);


//---------------------------Need JSX ------------------------------------------

