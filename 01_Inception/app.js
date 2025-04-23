//! this is first react code -: we print hello react

//this is only create for 1 element
const heading1 = React.createElement(
  "h1",
  { id: "heading1" },
  "Hello world from react"
);
//createElement is used to create the element in react (h1 in this case)


//^VIMP
const root = ReactDOM.createRoot(document.getElementById("root"));
//createRoot is used to create the root element in react



root.render(heading1);
//render is used to render the element in react

//! but for the nested elements we can use the following code
/*

<div id="parent">
    <div id="child">
       <h1> I Am 1st Child</h1>
       <h2> I Am 2nd Child</h2>
    </div>
<div>
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am 1st child"),
    React.createElement("h2", {}, "I am 2nd child"),
  ])
);

root.render(parent);

//!
/*

<div id="parent">
    <div id="child1">
       <h1> I Am 1st Child of parent1</h1>
       <h2> I Am 2nd Child of parent1</h2>
    </div>
    <div id="child2">
       <h1> I Am 1st Child of parent 2</h1>
       <h2> I Am 2nd Child of parent2</h2>
    </div>
<div>

*/

const parent2 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am 1st child of parent2"),
    React.createElement("h1", {}, "I am 2nd child of parent2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am 1st child of parent2"),
    React.createElement("h1", {}, "I am 2nd child of parent2"),
  ]),
]);


root.render(parent2);   //it replacing everything in the root element by parent2 



//^ above code is very lengthy and not readable

//^ we can also use the JSX syntax to create the elements in react it is more readable and easy to understand

//^ JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It allows you to write HTML-like code within JavaScript, making it easier to create and visualize the structure of your UI components.