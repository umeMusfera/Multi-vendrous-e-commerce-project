import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./redux/store";

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { Provider } from "react-redux";
// import Store from "./redux/store";
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(
//   <Provider store={Store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById("root")
// );

// reportWebVitals();
