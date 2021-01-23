import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  // 分割代入
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickButton = () => alert();
  const onClickCountup = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // Too many re-renders.
  // if (num % 3 === 0) {
  //   setFaceShowFlag(true);
  // } else {
  //   setFaceShowFlag(false);
  // }

  if (num % 3 === 0) {
    // faceshowFlagがfalseの時
    faceShowFlag || setFaceShowFlag(true);
  } else {
    faceShowFlag && setFaceShowFlag(false);
  }

  return (
    // </React.Fragment>短縮して書ける
    <>
      {/* 外の{}はjsを書くため、内側はオブジェクトの{} */}
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      {/* <ColorfulMessage color="blue" message="お元気ですか？" /> */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
      <button onClick={onClickCountup}>カウントアップ</button>
      <p>{num}</p>
      <br />
      <button onClick={onClickSwitchShowFlag}>On/Off</button>
      {/* 左側がtureの時右側を実行 */}
      {faceShowFlag && <p>(^^)</p>}
    </>
  );
};
export default App;
