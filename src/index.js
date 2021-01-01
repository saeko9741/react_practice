import React from "react";
// htmlにコンポーネントを反映するため
import ReactDom from "react-dom";

const App = () => {
  return (
    // </React.Fragment>短縮して書ける
    <>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </>
  );
};
// 画面に反映させる render関数の第一引数にコンポーネント、第二引数はどこに反映させるか、
ReactDom.render(<App />, document.getElementById("root"));
