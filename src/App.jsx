import React from "react";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "16px"
  };
  return (
    // </React.Fragment>短縮して書ける
    <>
      {/* 外の{}はjsを書くため、内側はオブジェクトの{} */}
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
export default App;
