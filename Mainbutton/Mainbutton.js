/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Mainbutton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("home button", "./Mainbutton/costumes/home button.svg", {
        x: 72,
        y: 72
      })
    ];

    this.sounds = [new Sound("pop", "./Mainbutton/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Main Loka" },
        this.whenIReceiveMainLoka
      )
    ];
  }

  *whenthisspriteclicked() {
    this.broadcast("Main Opna");
    this.visible = false;
  }

  *whenIReceiveMainLoka() {
    this.visible = true;
  }
}
