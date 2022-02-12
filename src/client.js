import React from "react";
import ReactDom from "react-dom";

import Wrapper from "core/Wrapper.tsx";

try {
  ReactDom.render(<Wrapper />, document.getElementById("root"));
} catch (e) {
  console.log(e);
}
