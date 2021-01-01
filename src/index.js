import React from "react";
// htmlにコンポーネントを反映するため
import ReactDom from "react-dom";
import App from "./App";

// 画面に反映させる render関数の第一引数にコンポーネント、第二引数はどこに反映させるか、
ReactDom.render(<App />, document.getElementById("root"));
