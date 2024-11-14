import moment from "moment";

import bemowo010821 from "./bemowo010821.json";
import skwer030522 from "./skwer030522.json";
import studio190322 from "./studio190322.json";
import niepodlegla111121 from "./niepodlegla111121.json";
import niepodlegla310722 from "./niepodlegla310722.json";
import flora190120 from "./flora190120.json";
import jozefow101119 from "./jozefow101119.json";
import festiwal111122 from "./festiwal111122.json";
import dom240822 from "./dom240822.json";
import skwer010822 from "./skwer010822.json";
import bemowo010822 from "./bemowo010822.json";
import skwer010823 from "./skwer010823.json";
import grochow030923 from "./grochow030923.json";
import wawer020819 from "./wawer020819.json";
import niepodlegla010820 from "./niepodlegla010820.json";
import wroclaw200524 from "./wroclaw200524.json";
import wroclaw040824 from "./wroclaw040824.json";
import uwieniawy020824 from "./u wieniawy020824.json";
import skwer010824 from "./skwer010824.json";
import festiwal111124 from "./festiwal111124.json";

export const galleries = [
  bemowo010821,
  skwer030522,
  studio190322,
  niepodlegla111121,
  niepodlegla310722,
  flora190120,
  jozefow101119,
  festiwal111122,
  dom240822,
  skwer010822,
  bemowo010822,
  skwer010823,
  grochow030923,
  wawer020819,
  niepodlegla010820,
  wroclaw200524,
  wroclaw040824,
  uwieniawy020824,
  skwer010824,
  festiwal111124,
];

export const galleriesSortedCovers = galleries
  .sort((a, b) => moment(b.date, "DD.MM.YYYY") - moment(a.date, "DD.MM.YYYY"))
  .map((images) => ({
    cover: images.images[0].urlCover,
    coverAlt: images.images[0].alt,
    location: images.location,
    date: images.date,
    galeryId: images.galeryId,
  }));
