/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Gult hringur", "./Stage/costumes/Gult hringur.svg", {
        x: 255.51935745573152,
        y: 180
      }),
      new Costume("Gras", "./Stage/costumes/Gras.png", { x: 480, y: 360 }),
      new Costume(
        "purple-background-768x0",
        "./Stage/costumes/purple-background-768x0.png",
        { x: 480, y: 360 }
      )
    ];

    this.sounds = [
      new Sound("Ó", "./Stage/sounds/Ó.wav"),
      new Sound("ÓSound", "./Stage/sounds/ÓSound.wav"),
      new Sound("A", "./Stage/sounds/A.wav"),
      new Sound("ASound", "./Stage/sounds/ASound.wav"),
      new Sound("B", "./Stage/sounds/B.wav"),
      new Sound("D", "./Stage/sounds/D.wav"),
      new Sound("Á", "./Stage/sounds/Á.wav"),
      new Sound("ÁSound", "./Stage/sounds/ÁSound.wav"),
      new Sound("E", "./Stage/sounds/E.wav"),
      new Sound("ESound", "./Stage/sounds/ESound.wav"),
      new Sound("É", "./Stage/sounds/É.wav"),
      new Sound("F", "./Stage/sounds/F.wav"),
      new Sound("G", "./Stage/sounds/G.wav"),
      new Sound("H", "./Stage/sounds/H.wav"),
      new Sound("I", "./Stage/sounds/I.wav"),
      new Sound("Í", "./Stage/sounds/Í.wav"),
      new Sound("J", "./Stage/sounds/J.wav"),
      new Sound("K", "./Stage/sounds/K.wav"),
      new Sound("M", "./Stage/sounds/M.wav"),
      new Sound("N", "./Stage/sounds/N.wav"),
      new Sound("P", "./Stage/sounds/P.wav"),
      new Sound("R", "./Stage/sounds/R.wav"),
      new Sound("S", "./Stage/sounds/S.wav"),
      new Sound("T", "./Stage/sounds/T.wav"),
      new Sound("U", "./Stage/sounds/U.wav"),
      new Sound("Ú", "./Stage/sounds/Ú.wav"),
      new Sound("V", "./Stage/sounds/V.wav"),
      new Sound("X", "./Stage/sounds/X.wav"),
      new Sound("Y", "./Stage/sounds/Y.wav"),
      new Sound("Ý", "./Stage/sounds/Ý.wav"),
      new Sound("Þ", "./Stage/sounds/Þ.wav"),
      new Sound("Æ", "./Stage/sounds/Æ.wav"),
      new Sound("O", "./Stage/sounds/O.wav"),
      new Sound("OSound", "./Stage/sounds/OSound.wav"),
      new Sound("Ö", "./Stage/sounds/Ö.wav"),
      new Sound("PSound", "./Stage/sounds/PSound.wav"),
      new Sound("USound", "./Stage/sounds/USound.wav"),
      new Sound("ÉSound", "./Stage/sounds/ÉSound.wav"),
      new Sound("ISound", "./Stage/sounds/ISound.wav"),
      new Sound("ÍSpound", "./Stage/sounds/ÍSpound.wav"),
      new Sound("ÚSound", "./Stage/sounds/ÚSound.wav"),
      new Sound("BSound", "./Stage/sounds/BSound.wav"),
      new Sound("DSound", "./Stage/sounds/DSound.wav"),
      new Sound("ÐSound", "./Stage/sounds/ÐSound.wav"),
      new Sound("FSound", "./Stage/sounds/FSound.wav"),
      new Sound("GSound", "./Stage/sounds/GSound.wav"),
      new Sound("JSound", "./Stage/sounds/JSound.wav"),
      new Sound("KSound", "./Stage/sounds/KSound.wav"),
      new Sound("LSound", "./Stage/sounds/LSound.wav"),
      new Sound("MSound", "./Stage/sounds/MSound.wav"),
      new Sound("NSound", "./Stage/sounds/NSound.wav"),
      new Sound("PSound2", "./Stage/sounds/PSound2.wav"),
      new Sound("RSound", "./Stage/sounds/RSound.wav"),
      new Sound("SSound", "./Stage/sounds/SSound.wav"),
      new Sound("TSound", "./Stage/sounds/TSound.wav"),
      new Sound("VSound", "./Stage/sounds/VSound.wav"),
      new Sound("XSound", "./Stage/sounds/XSound.wav"),
      new Sound("YSound", "./Stage/sounds/YSound.wav"),
      new Sound("ÝSound", "./Stage/sounds/ÝSound.wav"),
      new Sound("ÞSound", "./Stage/sounds/ÞSound.wav"),
      new Sound("ÆSound", "./Stage/sounds/ÆSound.wav"),
      new Sound("ÖSound", "./Stage/sounds/ÖSound.wav"),
      new Sound("HSound", "./Stage/sounds/HSound.wav"),
      new Sound("ÍSound", "./Stage/sounds/ÍSound.wav"),
      new Sound("L", "./Stage/sounds/L.wav"),
      new Sound("Ð", "./Stage/sounds/Ð.wav")
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
      new Trigger(
        Trigger.BROADCAST,
        { name: "LetterSound" },
        this.whenIReceiveLettersound
      ),
      new Trigger(Trigger.BROADCAST, { name: "sound" }, this.whenIReceiveSound),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.letter = 0;
    this.vars.word = 0;
    this.vars.playletternumber = 4;
    this.vars.wordstartposition = -60;
    this.vars.xstart = -255;
    this.vars.ystart = 200;
    this.vars.yspace = 80;
    this.vars.xspace = 55;
    this.vars.frontlettersize = 65;
    this.vars.frontlettercount = 30;
    this.vars.firstword = "__0";
    this.vars.view = "letter";
    this.vars.wordlist = [
      "API",
      "ÁS",
      "ASNI",
      "BOLTI",
      "DÓT",
      "EPLI",
      "FÁNI",
      "GLAS",
      "HÆNA",
      "ÉL",
      "IL",
      "JEPPI",
      "KISA",
      "LAMB",
      "ÍS",
      "NEF",
      "OFN",
      "ÓRÓI",
      "POPP",
      "SÓL",
      "TRÖLL",
      "UGLA",
      "ÚR",
      "VAGN",
      "XKEX",
      "YDDARI",
      "ÝSA",
      "ÞAK",
      "ÆR",
      "ÖND",
      "ÐBAÐ",
      "MÚFFA",
      "RÓLA"
    ];
  }

  *whenIReceiveMainLoka() {
    this.costume = "Gult hringur";
  }

  *whenIReceiveMainOpna() {
    this.costume = "Gras";
    this.vars.frontlettercount = 0;
    this.vars.view = "letter";
  }

  *whenIReceiveLettersound() {
    yield* this.startSound(this.vars.letter);
  }

  *whenIReceiveSound() {
    yield* this.playSoundUntilDone(
      "" + this.vars.word[this.vars.playletternumber - 1] + "Sound"
    );
  }

  *whenGreenFlagClicked() {
    /* TODO: Implement looks_switchbackdroptoandwait */ null;
    this.vars.frontlettersize = 65;
    this.vars.xstart = -255;
    this.vars.ystart = 200;
    this.vars.xspace = 55;
    this.vars.yspace = 80;
    this.vars.frontlettercount = 0;
    this.broadcast("startMenu");
    this.broadcast("startMenu");
  }
}
