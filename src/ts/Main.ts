import {SubModule} from "./sub/SubModule";


class Main {
  constructor() {
    console.log("Main Class Works!");
    new SubModule();
  }
}

window.addEventListener("DOMContentLoaded", () => new Main())