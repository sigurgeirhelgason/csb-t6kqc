/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Frontletter extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("A", "./Frontletter/costumes/A.svg", { x: 28, y: 38 }),
      new Costume("Á", "./Frontletter/costumes/Á.svg", {
        x: 27.469195000000013,
        y: 54.912810896989456
      }),
      new Costume("B", "./Frontletter/costumes/B.svg", { x: 29, y: 42 }),
      new Costume("D", "./Frontletter/costumes/D.svg", { x: 31, y: 41 }),
      new Costume("Ð", "./Frontletter/costumes/Ð.svg", {
        x: 39.30760057832836,
        y: 40.998999999999995
      }),
      new Costume("E", "./Frontletter/costumes/E.svg", { x: 25, y: 39 }),
      new Costume("É", "./Frontletter/costumes/É.svg", {
        x: 24.990100000000012,
        y: 57.074731665338646
      }),
      new Costume("F", "./Frontletter/costumes/F.svg", { x: 23, y: 40 }),
      new Costume("G", "./Frontletter/costumes/G.svg", { x: 28, y: 39 }),
      new Costume("H", "./Frontletter/costumes/H.svg", { x: 27, y: 38 }),
      new Costume("I", "./Frontletter/costumes/I.svg", { x: 19, y: 39 }),
      new Costume("Í", "./Frontletter/costumes/Í.svg", {
        x: 18.48320000000001,
        y: 56.41942086446085
      }),
      new Costume("J", "./Frontletter/costumes/J.svg", { x: 25, y: 41 }),
      new Costume("K", "./Frontletter/costumes/K.svg", { x: 24, y: 40 }),
      new Costume("L", "./Frontletter/costumes/L.svg", { x: 26, y: 40 }),
      new Costume("M", "./Frontletter/costumes/M.svg", { x: 35, y: 37 }),
      new Costume("N", "./Frontletter/costumes/N.svg", {
        x: 27.1371791164417,
        y: 36.587371160086036
      }),
      new Costume("O", "./Frontletter/costumes/O.svg", { x: 32, y: 40 }),
      new Costume("Ó", "./Frontletter/costumes/Ó.svg", {
        x: 31.74385555555557,
        y: 59.55588118777001
      }),
      new Costume("P", "./Frontletter/costumes/P.svg", {
        x: 22.452548939126928,
        y: 45.225320261756394
      }),
      new Costume("R", "./Frontletter/costumes/R.svg", {
        x: 26.463961111111075,
        y: 39.86902222222224
      }),
      new Costume("S", "./Frontletter/costumes/S.svg", {
        x: 17.075249999999954,
        y: 39.70994999999999
      }),
      new Costume("T", "./Frontletter/costumes/T.svg", {
        x: 30.362166666666695,
        y: 39.87795
      }),
      new Costume("U", "./Frontletter/costumes/U.svg", {
        x: 29.010662012710014,
        y: 39.62653572309739
      }),
      new Costume("Ú", "./Frontletter/costumes/Ú.svg", {
        x: 27.170999999999992,
        y: 56.37255168891471
      }),
      new Costume("V", "./Frontletter/costumes/V.svg", {
        x: 34.40128210380365,
        y: 39.789199999999994
      }),
      new Costume("X", "./Frontletter/costumes/X.svg", {
        x: 29.148800000000023,
        y: 39.80518310571435
      }),
      new Costume("Y", "./Frontletter/costumes/Y.svg", { x: 26, y: 33 }),
      new Costume("Ý", "./Frontletter/costumes/Ý.svg", {
        x: 25.116111892772693,
        y: 47.774118731261325
      }),
      new Costume("Þ", "./Frontletter/costumes/Þ.svg", {
        x: 23.676527871766183,
        y: 53.614978303228554
      }),
      new Costume("Æ", "./Frontletter/costumes/Æ.svg", {
        x: 34.93397050833636,
        y: 37.13991001942139
      }),
      new Costume("Ö", "./Frontletter/costumes/Ö.svg", {
        x: 21.928098235433197,
        y: 53.62221227542118
      })
    ];

    this.sounds = [
      new Sound("A", "./Frontletter/sounds/A.wav"),
      new Sound("B", "./Frontletter/sounds/B.wav"),
      new Sound("D", "./Frontletter/sounds/D.wav"),
      new Sound("Ð", "./Frontletter/sounds/Ð.wav"),
      new Sound("E", "./Frontletter/sounds/E.wav"),
      new Sound("G", "./Frontletter/sounds/G.wav"),
      new Sound("I", "./Frontletter/sounds/I.wav"),
      new Sound("Í", "./Frontletter/sounds/Í.wav"),
      new Sound("J", "./Frontletter/sounds/J.wav"),
      new Sound("K", "./Frontletter/sounds/K.wav"),
      new Sound("L", "./Frontletter/sounds/L.wav"),
      new Sound("M", "./Frontletter/sounds/M.wav"),
      new Sound("N", "./Frontletter/sounds/N.wav"),
      new Sound("P", "./Frontletter/sounds/P.wav"),
      new Sound("R", "./Frontletter/sounds/R.wav"),
      new Sound("S", "./Frontletter/sounds/S.wav"),
      new Sound("T", "./Frontletter/sounds/T.wav"),
      new Sound("U", "./Frontletter/sounds/U.wav"),
      new Sound("Ú", "./Frontletter/sounds/Ú.wav"),
      new Sound("V", "./Frontletter/sounds/V.wav"),
      new Sound("X", "./Frontletter/sounds/X.wav"),
      new Sound("Ý", "./Frontletter/sounds/Ý.wav"),
      new Sound("Þ", "./Frontletter/sounds/Þ.wav"),
      new Sound("Æ", "./Frontletter/sounds/Æ.wav"),
      new Sound("Ö", "./Frontletter/sounds/Ö.wav"),
      new Sound("Y", "./Frontletter/sounds/Y.wav"),
      new Sound("O", "./Frontletter/sounds/O.wav"),
      new Sound("É", "./Frontletter/sounds/É.wav"),
      new Sound("F", "./Frontletter/sounds/F.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Main Loka" },
        this.whenIReceiveMainLoka
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Main Opna" },
        this.whenIReceiveMainOpna
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.colum = 1;
    this.vars.row = 1;
    this.vars.wordcounter = 33;
    this.vars.localcorrectwords = [];
  }

  *whenIReceiveMainLoka() {
    this.visible = false;
  }

  *whenIReceiveMainOpna() {
    this.stage.vars.word = 0;
    this.stage.vars.letter = 0;
    this.vars.localcorrectwords = [];
    this.visible = true;
  }

  *whenthisspriteclicked() {
    yield* this.getcorrectwords();
    this.stage.vars.word = this.vars.localcorrectwords[
      this.random(1, this.vars.localcorrectwords.length) - 1
    ];
    this.stage.vars.letter = this.costume.name;
    this.broadcast("LetterSound");
    this.broadcast("Main Loka");
  }

  *startAsClone() {
    yield* this.setposition();
    yield* this.clone();
    this.visible = false;
  }

  *clone() {
    if (this.stage.vars.frontlettercount < 30) {
      this.stage.vars.frontlettercount += 1;
      this.costumeNumber += 1;
      this.createClone();
    } else {
      this.costumeNumber += 1;
    }
  }

  *setposition() {
    if (this.vars.row < 8) {
      this.vars.row += 1;
    } else {
      this.vars.colum += 1;
      this.vars.row = 1;
    }
    this.goto(
      this.stage.vars.xstart + this.vars.row * this.stage.vars.xspace,
      this.stage.vars.ystart + this.vars.colum * -1 * this.stage.vars.yspace
    );
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.costume = "A";
    this.vars.localcorrectwords = [];
    this.visible = false;
    this.size = this.stage.vars.frontlettersize;
    this.vars.colum = 1;
    this.vars.row = 1;
    this.goto(
      this.stage.vars.xstart + this.vars.row * this.stage.vars.xspace,
      this.stage.vars.ystart + this.vars.colum * -1 * this.stage.vars.yspace
    );
    this.createClone();
    this.stage.vars.frontlettercount += 1;
  }

  *getcorrectwords() {
    this.vars.wordcounter = 0;
    for (let i = 0; i < this.stage.vars.wordlist.length; i++) {
      this.vars.wordcounter += 1;
      if (
        this.stage.vars.wordlist[this.vars.wordcounter - 1][1 - 1] ==
        this.costume.name
      ) {
        this.vars.localcorrectwords.push(
          this.stage.vars.wordlist[this.vars.wordcounter - 1]
        );
      }
      yield;
    }
  }
}
