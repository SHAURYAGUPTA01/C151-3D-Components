AFRAME.registerComponent("car-model", {
    schema: {
      modelRef: { type: "string", default: "../Car/Car.glb" }
    },
    init: function() {
      this.el.setAttribute("obj-model", this.data.modelRef);
      pos = { x: 0, y: 50, z: 80 };
      this.el.setAttribute("position", position);
    }
  });