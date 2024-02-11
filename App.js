/**
 *  create a div structure like below
 * <div id="parent">
 *  <div id="child">
 *      <h1>Example of nested div</h1>
 *      <h2>I'm sibling header </h2>
 *  </div>
 * </div>
 *
 *
 *
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Example of nested div"),
    React.createElement("h2", {}, "I'm a sibling header"),
  ])
);

console.log(parent);

/**
 *  create a div structure like below
 * <div id="parent">
 *  <div id="child">
 *      <h1>Example of nested div</h1>
 *      <h2>I'm sibling header </h2>
 *  </div>
 *  <div id="child">
 *      <h1>Example of nested div</h1>
 *      <h2>I'm sibling header </h2>
 *  </div>
 * </div>
 *
 *
 *
 */

const parent2 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Example of nested div"),
    React.createElement("h2", {}, "I'm a sibling header"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Example of nested div"),
    React.createElement("h2", {}, "I'm a sibling header"),
  ]),
]);

console.log(parent2);


const header = React.createElement(
  "h1",
  { id: "header", xyz: "abc" },
  "Hello World from React"
); //creating a header which is nothing but a js object
console.log(header); //see the console...it will just give you an object

const root = ReactDOM.createRoot(document.getElementById("root")); // pointing to the root div

root.render(parent2);
