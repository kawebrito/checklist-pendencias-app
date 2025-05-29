
import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom/client";

// Aqui entraria o código transpilado. Para fins de exemplo, apenas mostramos uma div.
const App = () => React.createElement("div", null, "Checklist estático em construção...");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
