import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Frontletter from "./Frontletter/Frontletter.js";
import Wordletter from "./Wordletter/Wordletter.js";
import Wordimage from "./Wordimage/Wordimage.js";
import Welcometitle from "./Welcometitle/Welcometitle.js";
import Startbutton from "./Startbutton/Startbutton.js";
import Mainbutton from "./Mainbutton/Mainbutton.js";

const stage = new Stage({ costumeNumber: 3 });

const sprites = {
  Frontletter: new Frontletter({
    x: -200,
    y: 120,
    direction: 90,
    costumeNumber: 1,
    size: 65,
    visible: false
  }),
  Wordletter: new Wordletter({
    x: -60,
    y: -125,
    direction: 90,
    costumeNumber: 66,
    size: 100,
    visible: false
  }),
  Wordimage: new Wordimage({
    x: 13,
    y: 2,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Welcometitle: new Welcometitle({
    x: -21,
    y: 110,
    direction: 90,
    costumeNumber: 1,
    size: 80,
    visible: true
  }),
  Startbutton: new Startbutton({
    x: -8,
    y: -11,
    direction: 90,
    costumeNumber: 2,
    size: 101.19999999999987,
    visible: true
  }),
  Mainbutton: new Mainbutton({
    x: 208,
    y: -145,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: false
  })
};

const project = new Project(stage, sprites);
export default project;
