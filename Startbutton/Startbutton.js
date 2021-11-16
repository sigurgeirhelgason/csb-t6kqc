/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Startbutton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button2-a", "./Startbutton/costumes/button2-a.svg", {
        x: 72,
        y: 72
      }),
      new Costume("button2-b", "./Startbutton/costumes/button2-b.svg", {
        x: 72.48825783348255,
        y: 54.512910474485295
      })
    ];

    this.sounds = [new Sound("pop", "./Startbutton/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "startApp" },
        this.whenIReceiveStartapp
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("Main Opna");
    this.visible = false;
  }

  *whenIReceiveStartapp() {
    this.goto(-8, -11);
    this.size = 100;
    this.visible = true;
    while (true) {
      for (let i = 0; i < 60; i++) {
        this.size += 0.1;
        yield;
      }
      for (let i = 0; i < 60; i++) {
        this.size += -0.1;
        yield;
      }
      yield;
    }
  }
}
