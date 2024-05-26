// const heading = React.createElement(
//   "h1",
//   { id: "heading", class: "heading" }, //{}--> this is the object where you place all the attributes to your tag
//   "Hello World from React !"
// );

// console.log(heading); //returns an object
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); // this will convert the object to h1 tag and inject to root element

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     // React.createElement("h1", {}, "I'm a nested H1 Tag!")
//     [
//       React.createElement("h1", {}, "I'm a nested H1 Tag!"),
//       React.createElement("h2", {}, "I'm a nested H2 Tag!"),
//     ] //array of children
//   )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);
/*
<div id="parent">
    <div id="child">
       <h1>
          I'm a nested H1 Tag!
      </h1>
      <h2>
         I'm a h2 tag
      </h2>
  </div>
</div>
*/

/*
<div id="parent">
    <div id="child">
       <h1>
          I'm a nested H1 Tag!
      </h1>
      <h2>
         I'm a h2 tag
      </h2>
  </div>
  <div id="child2">
       <h1>
          I'm a nested H1 Tag! child2
      </h1>
      <h2>
         I'm a h2 tag child2
      </h2>
  </div>
</div>
*/
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" },
    // React.createElement("h1", {}, "I'm a nested H1 Tag!")
    [
      React.createElement("h1", {}, "I'm a nested H1 Tag!"),
      React.createElement("h2", {}, "I'm a nested H2 Tag!"),
    ] //array of children
  ),
  React.createElement(
    "div",
    { id: "child2" },
    // React.createElement("h1", {}, "I'm a nested H1 Tag!")
    [
      React.createElement("h1", {}, "I'm a nested H1 Tag! child2"),
      React.createElement("h2", {}, "I'm a nested H2 Tag! child2"),
    ] //array of children
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
