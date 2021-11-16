/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Welcometitle extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Welcometitle/costumes/costume1.svg", {
        x: 193.62733052124997,
        y: 37.84689856250918
      })
    ];

    this.sounds = [new Sound("pop", "./Welcometitle/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Main Opna" },
        this.whenIReceiveMainOpna
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveMainOpna() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = true;
  }
}
