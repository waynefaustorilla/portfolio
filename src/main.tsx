import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import Application from "./App";

const root = document.querySelector("#root");

ReactDOM.render(<StrictMode><Application /></StrictMode>, root);