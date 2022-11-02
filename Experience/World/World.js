import Experience from "../Experience.js";
import Environment from "./Enviroment.js";
import Room from "./Room.js";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.resources.on("ready", () => {
      this.environment = new Environment();
      this.room = new Room();
      // this.controls = new Controls();
      this.emit("worldready");
    });
  }

  createWorld() {
    this.room = new Room();
  }
}
