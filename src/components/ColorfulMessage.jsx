import React from "react";

const ColorfulMessage = (props) => {
  // 渡されてきたpropsの確認
  // console.log(props);

  // 分割代入
  const { color, children } = props;
  const contentStyle = {
    // color: props.color,を書き換え、プロパティ名と値が同じ場合省略可
    color,
    fontSize: "16px"
  };
  // <p style={contentStyle}>{props.message}</p>;の書き換え
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
