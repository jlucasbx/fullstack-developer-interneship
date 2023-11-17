import "./style.css";
// import main from "./src/main";
import App from "./src/App";
import { lifeCycleInit } from "./src/utils/lifeCycle";

const root = document.querySelector("#app");
root.innerHTML = App();

lifeCycleInit();
