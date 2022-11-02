import * as THREE from "three";
import Camera from "./Camera";
import Sizes from "./utils/Sizes";
import Renderer from "./Renderer";
import Time from "./utils/Time";
import World from "./World/World";
import Resources from "./utils/Resources";

export default class Experience {
  static instance;
  constructor(canvas) {
    if (Experience.instance) {
      return Experience.instance;
    }
    Experience.instance = this;
    this.canvas = canvas;
    this.sizes = new Sizes();
    this.scene = new THREE.Scene();
    this.time = new Time();
    this.camera = new Camera();
    this.render = new Renderer();
    this.resources = new Resources();
    this.world = new World();
    this.time.on("update", () => {
      this.update();
    });
    this.sizes.on("resize", () => {
      this.resize();
    });
  }

  update() {
    this.camera.update();
    this.render.render();
  }

  resize() {
    this.camera.resize();
    this.render.resize();
  }
}
