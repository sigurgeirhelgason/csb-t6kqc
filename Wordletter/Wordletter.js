/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Wordletter extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("A", "./Wordletter/costumes/A.svg", {
        x: 23.875,
        y: 39.8323025
      }),
      new Costume("A2", "./Wordletter/costumes/A2.svg", {
        x: 23.875,
        y: 39.8323025
      }),
      new Costume("Á", "./Wordletter/costumes/Á.svg", {
        x: 23.875,
        y: 39.8323025
      }),
      new Costume("Á2", "./Wordletter/costumes/Á2.svg", {
        x: 23.875,
        y: 39.8323025
      }),
      new Costume("B", "./Wordletter/costumes/B.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("B2", "./Wordletter/costumes/B2.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("C", "./Wordletter/costumes/C.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("C2", "./Wordletter/costumes/C2.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("D", "./Wordletter/costumes/D.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("D2", "./Wordletter/costumes/D2.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("Ð", "./Wordletter/costumes/Ð.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("Ð2", "./Wordletter/costumes/Ð2.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("E", "./Wordletter/costumes/E.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("E2", "./Wordletter/costumes/E2.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("É", "./Wordletter/costumes/É.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("É2", "./Wordletter/costumes/É2.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("F", "./Wordletter/costumes/F.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("F2", "./Wordletter/costumes/F2.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("G", "./Wordletter/costumes/G.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("G2", "./Wordletter/costumes/G2.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("H", "./Wordletter/costumes/H.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("H2", "./Wordletter/costumes/H2.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("I", "./Wordletter/costumes/I.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("I2", "./Wordletter/costumes/I2.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("Í", "./Wordletter/costumes/Í.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("Í2", "./Wordletter/costumes/Í2.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("J", "./Wordletter/costumes/J.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("J2", "./Wordletter/costumes/J2.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("K", "./Wordletter/costumes/K.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("K2", "./Wordletter/costumes/K2.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("L", "./Wordletter/costumes/L.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("L2", "./Wordletter/costumes/L2.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("M", "./Wordletter/costumes/M.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("M2", "./Wordletter/costumes/M2.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("N", "./Wordletter/costumes/N.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("N2", "./Wordletter/costumes/N2.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("O", "./Wordletter/costumes/O.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("O2", "./Wordletter/costumes/O2.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("Ó", "./Wordletter/costumes/Ó.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("Ó2", "./Wordletter/costumes/Ó2.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("P", "./Wordletter/costumes/P.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("P2", "./Wordletter/costumes/P2.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("R", "./Wordletter/costumes/R.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("R2", "./Wordletter/costumes/R2.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("S", "./Wordletter/costumes/S.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("S2", "./Wordletter/costumes/S2.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("T", "./Wordletter/costumes/T.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("T2", "./Wordletter/costumes/T2.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("U", "./Wordletter/costumes/U.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("U2", "./Wordletter/costumes/U2.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("Ú", "./Wordletter/costumes/Ú.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("Ú2", "./Wordletter/costumes/Ú2.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("V", "./Wordletter/costumes/V.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("V2", "./Wordletter/costumes/V2.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("X", "./Wordletter/costumes/X.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("X2", "./Wordletter/costumes/X2.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("Y", "./Wordletter/costumes/Y.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("Y2", "./Wordletter/costumes/Y2.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("Ý", "./Wordletter/costumes/Ý.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("Ý2", "./Wordletter/costumes/Ý2.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("Þ", "./Wordletter/costumes/Þ.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("Þ2", "./Wordletter/costumes/Þ2.svg", {
        x: 23.875,
        y: 39.83237999999997
      }),
      new Costume("Æ", "./Wordletter/costumes/Æ.svg", {
        x: 24.708721957702664,
        y: 39.83237999999997
      }),
      new Costume("Æ2", "./Wordletter/costumes/Æ2.svg", {
        x: 24.708721957702664,
        y: 39.83237999999997
      }),
      new Costume("Ö", "./Wordletter/costumes/Ö.svg", {
        x: 23.875001957702665,
        y: 39.83237999999997
      }),
      new Costume("Ö2", "./Wordletter/costumes/Ö2.svg", {
        x: 23.875001957702665,
        y: 39.83237999999997
      })
    ];

    this.sounds = [new Sound("A", "./Wordletter/sounds/A.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "typeWord" },
        this.whenIReceiveTypeword
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Main Opna" },
        this.whenIReceiveMainOpna
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone)
    ];

    this.vars.currentletter = 1;
    this.vars.notstartinglettercounter = 0;
    this.vars.skipfirstletter = 1;
    this.vars.notstartingletters = ["Ð", "X"];
  }

  *whenIReceiveTypeword() {
    if (this.stage.vars.word.length > this.vars.currentletter - 1) {
      this.visible = true;
      if (this.stage.vars.word.length > this.vars.currentletter) {
        this.createClone();
      }
      for (let i = 0; i < this.vars.notstartingletters.length; i++) {
        this.vars.notstartinglettercounter += 1;
        if (
          this.stage.vars.letter ==
          this.vars.notstartingletters[this.vars.notstartinglettercounter - 1]
        ) {
          this.stage.vars.wordstartposition += -20;
          this.visible = false;
        }
        yield;
      }
      this.vars.notstartinglettercounter = 0;
      while (true) {
        this.y = -125;
        this.x = this.stage.vars.wordstartposition;
        if (this.touching("mouse")) {
          this.costume =
            "" + this.stage.vars.word[this.vars.currentletter - 1] + 2;
        } else {
          this.costume = this.stage.vars.word[this.vars.currentletter - 1];
        }
        yield;
      }
    } else {
      this.visible = false;
    }
  }

  *whenthisspriteclicked() {
    this.stage.vars.playletternumber = this.vars.currentletter;
    this.broadcast("sound");
  }

  *whenIReceiveMainOpna() {
    this.visible = false;
    this.deleteThisClone();
  }

  *whenGreenFlagClicked() {
    this.vars.notstartingletters = [];
    this.visible = false;
    this.vars.currentletter = 1;
    this.vars.notstartingletters.push("Ð");
    this.vars.notstartingletters.push("X");
  }

  *startAsClone() {
    this.vars.currentletter += 1;
    if (this.stage.vars.word.length > this.vars.currentletter - 1) {
      this.visible = true;
      if (this.stage.vars.word.length > this.vars.currentletter) {
        this.createClone();
      }
      while (true) {
        this.y = -125;
        this.x =
          this.stage.vars.wordstartposition + this.vars.currentletter * 45 - 45;
        if (this.touching("mouse")) {
          this.costume =
            "" + this.stage.vars.word[this.vars.currentletter - 1] + 2;
        } else {
          this.costume = this.stage.vars.word[this.vars.currentletter - 1];
        }
        yield;
      }
    } else {
      this.visible = false;
    }
  }
}
