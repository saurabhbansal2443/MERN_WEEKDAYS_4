let root = ReactDOM.createRoot(document.getElementById("root"));

let ele = React.createElement(
  "div",
  { className: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, " I am h1 tag ")
  )
);

console.log(ele);

root.render(ele);

<div class="parent">
<div id="child">
<h1> I am h1tag </h1>
</div>
</div>
