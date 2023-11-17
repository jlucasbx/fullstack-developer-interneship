import "./style.css";
import App from "./src/App";
import { lifeCycleInit } from "./src/utils/lifeCycle";

//render the content and start the application lifecycle
const root = document.querySelector("#app");
root.innerHTML = App();

lifeCycleInit();
