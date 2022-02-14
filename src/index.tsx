import React from "react";
import ReactDOM from "react-dom";
import Wrapper from "./core/Wrapper";
try {
    ReactDOM.render(
        <React.StrictMode>
            <Wrapper />
        </React.StrictMode>,
        document.getElementById("root")
    );
} catch (e) {
    console.log(e);
}
