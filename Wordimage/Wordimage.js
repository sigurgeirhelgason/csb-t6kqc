/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Wordimage extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("__0", "./Wordimage/costumes/__0.svg", {
        x: 119.83090845440132,
        y: 112.98203388276572
      }),
      new Costume("API", "./Wordimage/costumes/API.svg", {
        x: 82.06653884787931,
        y: 116.2935623453792
      }),
      new Costume("ÁS", "./Wordimage/costumes/ÁS.png", { x: 138, y: 240 }),
      new Costume("ASNI", "./Wordimage/costumes/ASNI.png", { x: 141, y: 242 }),
      new Costume("BOLTI", "./Wordimage/costumes/BOLTI.svg", {
        x: 75.39315769805222,
        y: 101.57645223102229
      }),
      new Costume("DÓT", "./Wordimage/costumes/DÓT.png", { x: 205, y: 272 }),
      new Costume("EPLI", "./Wordimage/costumes/EPLI.svg", {
        x: 70.13818532903375,
        y: 107.84637845275458
      }),
      new Costume("FÁNI", "./Wordimage/costumes/FÁNI.png", { x: 258, y: 210 }),
      new Costume("GLAS", "./Wordimage/costumes/GLAS.svg", {
        x: 55.79008424046987,
        y: 102.79513933613802
      }),
      new Costume("HÆNA", "./Wordimage/costumes/HÆNA.svg", {
        x: 88.46443478475175,
        y: 104.23574261255321
      }),
      new Costume("ÉL", "./Wordimage/costumes/ÉL.png", { x: 190, y: 223 }),
      new Costume("IL", "./Wordimage/costumes/IL.png", { x: 213, y: 278 }),
      new Costume("JEPPI", "./Wordimage/costumes/JEPPI.png", {
        x: 249,
        y: 210
      }),
      new Costume("KISA", "./Wordimage/costumes/KISA.svg", {
        x: 71.77623239563988,
        y: 104.96541808004768
      }),
      new Costume("LAMB", "./Wordimage/costumes/LAMB.png", { x: 178, y: 249 }),
      new Costume("ÍS", "./Wordimage/costumes/ÍS.png", { x: 80, y: 287 }),
      new Costume("NEF", "./Wordimage/costumes/NEF.png", { x: 189, y: 240 }),
      new Costume("OFN", "./Wordimage/costumes/OFN.png", { x: 172, y: 263 }),
      new Costume("ÓRÓI", "./Wordimage/costumes/ÓRÓI.png", { x: 165, y: 274 }),
      new Costume("POPP", "./Wordimage/costumes/POPP.png", { x: 161, y: 274 }),
      new Costume("SÓL", "./Wordimage/costumes/SÓL.svg", {
        x: 95.24328728141109,
        y: 117.63906069031232
      }),
      new Costume("TRÖLL", "./Wordimage/costumes/TRÖLL.png", {
        x: 231,
        y: 300
      }),
      new Costume("UGLA", "./Wordimage/costumes/UGLA.svg", {
        x: 55.5920966124028,
        y: 117.65517542868797
      }),
      new Costume("ÚR", "./Wordimage/costumes/ÚR.png", { x: 160, y: 220 }),
      new Costume("VAGN", "./Wordimage/costumes/VAGN.png", { x: 142, y: 229 }),
      new Costume("XKEX", "./Wordimage/costumes/XKEX.png", { x: 201, y: 252 }),
      new Costume("YDDARI", "./Wordimage/costumes/YDDARI.png", {
        x: 287,
        y: 260
      }),
      new Costume("ÝSA", "./Wordimage/costumes/ÝSA.png", { x: 330, y: 186 }),
      new Costume("ÞAK", "./Wordimage/costumes/ÞAK.png", { x: 305, y: 243 }),
      new Costume("ÆR", "./Wordimage/costumes/ÆR.png", { x: 301, y: 252 }),
      new Costume("ÖND", "./Wordimage/costumes/ÖND.png", { x: 246, y: 271 }),
      new Costume("ÐBAÐ", "./Wordimage/costumes/ÐBAÐ.png", { x: 249, y: 231 }),
      new Costume("MÚFFA", "./Wordimage/costumes/MÚFFA.png", {
        x: 167,
        y: 242
      }),
      new Costume("RÓLA", "./Wordimage/costumes/RÓLA.png", { x: 246, y: 224 })
    ];

    this.sounds = [
      new Sound("API", "./Wordimage/sounds/API.wav"),
      new Sound("ÁS", "./Wordimage/sounds/ÁS.wav"),
      new Sound("EPLI", "./Wordimage/sounds/EPLI.wav"),
      new Sound("FÁNI", "./Wordimage/sounds/FÁNI.wav"),
      new Sound("GLAS", "./Wordimage/sounds/GLAS.wav"),
      new Sound("HÆNA", "./Wordimage/sounds/HÆNA.wav"),
      new Sound("MÚFFA", "./Wordimage/sounds/MÚFFA.wav"),
      new Sound("ÉL", "./Wordimage/sounds/ÉL.wav"),
      new Sound("IL", "./Wordimage/sounds/IL.wav"),
      new Sound("JEPPI", "./Wordimage/sounds/JEPPI.wav"),
      new Sound("KISA", "./Wordimage/sounds/KISA.wav"),
      new Sound("LAMB", "./Wordimage/sounds/LAMB.wav"),
      new Sound("ÍS", "./Wordimage/sounds/ÍS.wav"),
      new Sound("NEF", "./Wordimage/sounds/NEF.wav"),
      new Sound("OFN", "./Wordimage/sounds/OFN.wav"),
      new Sound("ÓRÓI", "./Wordimage/sounds/ÓRÓI.wav"),
      new Sound("POPP", "./Wordimage/sounds/POPP.wav"),
      new Sound("RÓLA", "./Wordimage/sounds/RÓLA.wav"),
      new Sound("SÓL", "./Wordimage/sounds/SÓL.wav"),
      new Sound("TRÖLL", "./Wordimage/sounds/TRÖLL.wav"),
      new Sound("UGLA", "./Wordimage/sounds/UGLA.wav"),
      new Sound("ÚR", "./Wordimage/sounds/ÚR.wav"),
      new Sound("VAGN", "./Wordimage/sounds/VAGN.wav"),
      new Sound("XKEX", "./Wordimage/sounds/XKEX.wav"),
      new Sound("YDDARI", "./Wordimage/sounds/YDDARI.wav"),
      new Sound("ÝSA", "./Wordimage/sounds/ÝSA.wav"),
      new Sound("ÞAK", "./Wordimage/sounds/ÞAK.wav"),
      new Sound("ÆR", "./Wordimage/sounds/ÆR.wav"),
      new Sound("ÖND", "./Wordimage/sounds/ÖND.wav"),
      new Sound("ÐBAÐ", "./Wordimage/sounds/ÐBAÐ.wav"),
      new Sound("BOLTI", "./Wordimage/sounds/BOLTI.wav"),
      new Sound("DÓT", "./Wordimage/sounds/DÓT.wav"),
      new Sound("ASNI", "./Wordimage/sounds/ASNI.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Main Opna" },
        this.whenIReceiveMainOpna
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Main Loka" },
        this.whenIReceiveMainLoka
      )
    ];

    this.vars.localletter = 0;
    this.vars.localword = "API";
    this.vars.letterfound = "false";
  }

  *whenthisspriteclicked() {
    for (let i = 0; i < 3; i++) {
      this.size += 10;
      yield;
    }
    yield* this.wait(0.1);
    yield* this.startSound(this.costume.name);
    for (let i = 0; i < 3; i++) {
      this.size += -10;
      yield;
    }
    this.size = 100;
  }

  *whenIReceiveMainOpna() {
    this.costume = "__0";
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.costume = "__0";
    this.stage.vars.wordlist = [];
    yield* this.createwordlist();
    this.broadcast("startApp");
  }

  *whenIReceiveMainLoka() {
    this.costume = this.stage.vars.word;
    this.broadcast("typeWord");
    this.stage.vars.wordstartposition = this.stage.vars.word.length * -15;
    if (!(this.costumeNumber == 1)) {
      this.visible = true;
    }
  }

  *createwordlist() {
    this.stage.vars.firstword = this.costume.name;
    this.costumeNumber += 1;
    while (!(this.stage.vars.firstword == this.costume.name)) {
      this.stage.vars.wordlist.push(this.costume.name);
      this.costumeNumber += 1;
      yield;
    }
  }
}
